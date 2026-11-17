/** @type {import('next').NextConfig} */
// Next.js (App Router) wstrzykuje inline-skrypty bootstrapujące hydrację,
// a w trybie dev dodatkowo używa eval (HMR). Dlatego CSP musi dopuszczać
// 'unsafe-inline' (i 'unsafe-eval' w dev) — inaczej React się nie hydratuje.
const isDev = process.env.NODE_ENV !== "production";
const scriptSrc = isDev
  ? "script-src 'self' 'unsafe-inline' 'unsafe-eval'"
  : "script-src 'self' 'unsafe-inline'";

const nextConfig = {
  // Statyczny export — deklaratywny HTML (AEO-safe), hosting dowolny (Vercel/Netlify/cPanel)
  output: "export",
  // Trailing slash dla spójnych URL-i na statycznym hostingu
  trailingSlash: true,
  // Wyłącz wskaźniki deweloperskie Next.js (badge „N" w lewym dolnym rogu)
  devIndicators: false,
  images: {
    // Statyczny export bez Image Optimization API
    unoptimized: true,
  },
  // Nagłówki bezpieczeństwa HTTP.
  // Uwaga: przy `output: "export"` Next.js nie serwuje nagłówków sam —
  // należy je dodać w panelu hostingu (Netlify _headers, Vercel vercel.json, Apache .htaccess itp.)
  // lub przejść na tryb serwerowy. Poniższy zapis dokumentuje intencję i działa
  // przy wdrożeniu z serwerem Next.js.
  async headers() {
    return [
      {
        source: "/:path*",
        headers: [
          {
            key: "Content-Security-Policy",
            value: `default-src 'self'; ${scriptSrc}; style-src 'self' 'unsafe-inline'; img-src 'self' data:; font-src 'self'; connect-src 'self'; frame-ancestors 'none'; base-uri 'self'; form-action 'self';`,
          },
          { key: "Strict-Transport-Security", value: "max-age=31536000; includeSubDomains" },
          { key: "X-Frame-Options", value: "DENY" },
          { key: "X-Content-Type-Options", value: "nosniff" },
          { key: "Referrer-Policy", value: "strict-origin-when-cross-origin" },
        ],
      },
    ];
  },
};

export default nextConfig;
