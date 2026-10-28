"use client";

import Link from "next/link";
import { useState } from "react";
import type { ChangeEvent, FormEvent } from "react";

// Typy domenowe zamiast samych stringów — chroni przed pomyłką email ↔ telefon
type Email = string & { __brand: "Email" };
type Phone = string & { __brand: "Phone" };

type FormState = {
  name: string;
  email: Email;
  phone: Phone;
  message: string;
  // pole na roboty: ludzie go nie wypełniają, roboty tak ("honeypot")
  company: string;
};

type Errors = Partial<Record<keyof Omit<FormState, "company">, string>>;

const EMPTY: FormState = {
  name: "",
  email: "" as Email,
  phone: "" as Phone,
  message: "",
  company: "",
};

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/;

function validate(values: FormState): Errors {
  const errors: Errors = {};
  if (values.name.trim().length < 2) {
    errors.name = "Podaj imię lub nazwę firmy (min. 2 znaki).";
  }
  if (!EMAIL_RE.test(values.email.trim())) {
    errors.email = "Podaj poprawny adres e-mail — odpiszę na niego.";
  } else {
    values.email as Email;
  }
  if (values.phone.trim().length > 0) {
    const digits = values.phone.replace(/\D/g, "");
    if (digits.length < 9) {
      errors.phone = "Numer telefonu wygląda na za krótki (min. 9 cyfr) — albo zostaw puste.";
    } else {
      values.phone as Phone;
    }
  }
  if (values.message.trim().length < 10) {
    errors.message = "Napisz chociaż jedno zdanie o projekcie (min. 10 znaków).";
  }
  return errors;
}

export default function ContactForm() {
  const [values, setValues] = useState<FormState>(EMPTY);
  const [errors, setErrors] = useState<Errors>({});
  const [status, setStatus] = useState<"idle" | "sending" | "sent" | "failed">("idle");
  const [statusMessage, setStatusMessage] = useState("");

  const endpoint = process.env.NEXT_PUBLIC_FORM_ENDPOINT;

  function update(field: keyof FormState) {
    return (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
      setValues((prev) => ({ ...prev, [field]: e.target.value }));
      setErrors((prev) => ({ ...prev, [field]: undefined }));
    };
  }

  async function onSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    if (status === "sending") return; // blokada podwójnego wysłania

    const nextErrors = validate(values);
    setErrors(nextErrors);
    if (Object.keys(nextErrors).length > 0) {
      setStatus("idle");
      setStatusMessage("");
      return;
    }

    // honeypot: wypełniony = robot; udajemy sukces i nic nie wysyłamy
    if (values.company.trim().length > 0) {
      setStatus("sent");
      setStatusMessage("Dzięki! Odezwię się wkrótce.");
      return;
    }

    if (!endpoint) {
      setStatus("failed");
      setStatusMessage(
        "Formularz jest jeszcze podłączany — na razie zadzwoń albo napisz maila (dane obok)."
      );
      return;
    }

    setStatus("sending");
    try {
      const response = await fetch(endpoint, {
        method: "POST",
        headers: { Accept: "application/json" },
        body: new FormData(e.currentTarget),
      });
      if (!response.ok) throw new Error(`HTTP ${response.status}`);
      setStatus("sent");
      setStatusMessage("Dzięki! Odezwę się w ciągu 24 godzin.");
      setValues(EMPTY);
    } catch {
      setStatus("failed");
      setStatusMessage(
        "Nie udało się wysłać — spróbuj jeszcze raz albo zadzwoń/mail: dane obok."
      );
    }
  }

  const inputClass =
    "w-full min-h-11 rounded-lg border border-line bg-paper px-4 py-2.5 text-ink placeholder:text-ink-faint";

  const field = (
    label: string,
    name: keyof Omit<FormState, "company">,
    error?: string,
    extra?: { type?: string; inputMode?: "tel" | "email" | "text"; required?: boolean; textarea?: boolean }
  ) => (
    <div>
      <label htmlFor={`contact-${name}`} className="mb-1.5 block text-sm font-semibold text-ink">
        {label}
        {extra?.required ? <span aria-hidden="true"> *</span> : <span className="font-normal text-ink-faint"> (opcjonalnie)</span>}
      </label>
      {extra?.textarea ? (
        <textarea
          id={`contact-${name}`}
          name={name}
          rows={5}
          value={values[name]}
          onChange={update(name)}
          aria-invalid={Boolean(error)}
          aria-describedby={error ? `contact-${name}-error` : undefined}
          className={inputClass}
          placeholder="Napisz wprost: co robisz, gdzie działasz, czego potrzebujesz."
        />
      ) : (
        <input
          id={`contact-${name}`}
          name={name}
          type={extra?.type ?? "text"}
          inputMode={extra?.inputMode}
          value={values[name]}
          onChange={update(name)}
          aria-invalid={Boolean(error)}
          aria-describedby={error ? `contact-${name}-error` : undefined}
          className={inputClass}
        />
      )}
      {error ? (
        <p id={`contact-${name}-error`} className="mt-1 text-sm text-red-700">
          {error}
        </p>
      ) : null}
    </div>
  );

  if (status === "sent") {
    return (
      <div className="rounded-2xl border border-accent bg-paper p-8 text-center" role="status">
        <p className="font-heading text-2xl text-ink">Wiadomość wysłana</p>
        <p className="mx-auto mt-2 max-w-md text-ink-soft">{statusMessage}</p>
      </div>
    );
  }

  return (
    <form onSubmit={onSubmit} noValidate className="flex flex-col gap-4">
      {/* honeypot — ukryty przed ludźmi, widoczny dla robotów */}
      <div className="hidden" aria-hidden="true">
        <label htmlFor="contact-company">Company</label>
        <input id="contact-company" name="company" tabIndex={-1} autoComplete="off" value={values.company} onChange={update("company")} />
      </div>

      <div className="grid gap-4 sm:grid-cols-2">
        {field("Imię lub nazwa firmy", "name", errors.name, { required: true })}
        {field("E-mail", "email", errors.email, { type: "email", inputMode: "email", required: true })}
      </div>
      {field("Telefon", "phone", errors.phone, { type: "tel", inputMode: "tel" })}
      {field("Wiadomość", "message", errors.message, { required: true, textarea: true })}

      <button
        type="submit"
        disabled={status === "sending"}
        className="inline-flex min-h-11 items-center justify-center rounded-lg bg-accent px-6 py-3 font-semibold text-[#08131c] motion-safe:transition-transform motion-safe:hover:-translate-y-0.5 disabled:cursor-wait disabled:opacity-70"
      >
        {status === "sending" ? "Wysyłam…" : "Wyślij wiadomość"}
      </button>

      {/* status dla czytników ekranu i widoczne potwierdzenie błędu */}
      <div aria-live="polite" className="min-h-6">
        {status === "failed" ? (
          <p className="text-sm text-red-700">{statusMessage}</p>
        ) : statusMessage && status !== "sending" ? (
          <p className="text-sm text-ink-soft">{statusMessage}</p>
        ) : null}
      </div>

      <p className="text-xs leading-relaxed text-ink-faint">
        Wysyłając wiadomość, przekazujesz mi imię, adres e-mail i opcjonalnie telefon — tylko po to,
        żebym mógł odpowiedzieć. Zasady przetwarzania opisuje{" "}
        <Link
          href="/polityka-prywatnosci/"
          className="underline decoration-accent decoration-2 underline-offset-4 hover:text-ink"
        >
          polityka prywatności
        </Link>
        .
      </p>
    </form>
  );
}
