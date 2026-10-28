// Marek Barański Portfolio — minimalny, vanilla JS (AEO-safe: progressywne ulepszenie)
(function () {
  'use strict';

  // Rok w stopce
  var yearEl = document.getElementById('year');
  if (yearEl) yearEl.textContent = String(new Date().getFullYear());

  // Formularz: walidacja + feedback (bezpieczna wysyłka przez Formspree/Netlify Forms)
  var form = document.getElementById('contact-form');
  var feedback = document.getElementById('form-feedback');
  if (form) {
    form.setAttribute('novalidate', 'novalidate');

    form.addEventListener('submit', function (e) {
      // Walidacja natywna HTML5 (required) — pozwól przeglądarce pokazać błędy pola
      if (!form.checkValidity()) {
        feedback.textContent = 'Uzupełnij wymagane pola: imię, telefon, wiadomość.';
        feedback.classList.add('is-error');
        var firstInvalid = form.querySelector(':invalid');
        if (firstInvalid) { firstInvalid.focus(); e.preventDefault(); return; }
      }

      var button = form.querySelector('button[type="submit"]');
      if (button) { button.disabled = true; button.textContent = 'Wysyłanie…'; }
      feedback.classList.remove('is-error');
      feedback.textContent = '';
      // Wysyłka przez natywny form POST (Formspree / Netlify Forms obsługuje dalej).
      // Reset przycisku — po przekierowaniu strony formularza.
    });
  }

  // Wejściowe animacje sekcji — tylko gdy użytkownik nie prosi o redukcję ruchu
  var prefersReduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  if (!prefersReduced && 'IntersectionObserver' in window) {
    var sections = document.querySelectorAll('.section, .card');
    var io = new IntersectionObserver(function (entries) {
      entries.forEach(function (entry) {
        if (entry.isIntersecting) {
          entry.target.style.opacity = '1';
          entry.target.style.transform = 'none';
          io.unobserve(entry.target);
        }
      });
    }, { threshold: 0.1 });
    sections.forEach(function (el) {
      el.style.opacity = '0';
      el.style.transform = 'translateY(12px)';
      el.style.transition = 'opacity 300ms ease, transform 300ms ease';
      io.observe(el);
    });
  }
})();
