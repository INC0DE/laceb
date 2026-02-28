import Image from "next/image";
import Link from "next/link";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="w-full bg-dark-900 pt-16 pb-8">
      <div className="container mx-auto px-4 md:px-6 lg:px-8">
        {/* Main Footer Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16">
          {/* Logo & Description - 5 columns */}
          <div className="lg:col-span-5 space-y-4">
            <div className="relative w-[220px] h-[90px] md:w-[280px] md:h-[110px]">
              <Image
                src="/LACEBwhite.png"
                alt="LACEB - Laboratorio de Análisis Clínicos Especializados"
                fill
                className="object-contain object-left"
                priority
              />
            </div>
            <p className="text-neutral-400 text-sm max-w-md">
              Excelencia y precisión en análisis clínicos, comprometidos con tu
              salud desde 2025.
            </p>

            {/* Certifications Badge */}
            <div className="flex gap-3 pt-2">
              <span className="bg-success-500/10 text-success-400 text-xs px-3 py-1 rounded-full border border-success-500/20">
                Certificado ISO 9001
              </span>
              <span className="bg-primary-500/10 text-primary-400 text-xs px-3 py-1 rounded-full border border-primary-500/20">
                Acreditado
              </span>
            </div>
          </div>

          {/* Contact & Location - 4 columns */}
          <div className="lg:col-span-4 space-y-8">
            {/* Contact */}
            <div>
              <h3 className="text-white font-semibold text-lg mb-4 relative inline-block">
                Contacto
                <span className="absolute -bottom-1 left-0 w-12 h-0.5 bg-brand-orange"></span>
              </h3>
              <div className="space-y-3">
                <a
                  href="tel:+525539669986"
                  className="flex items-center gap-3 text-neutral-300 hover:text-brand-orange transition-colors group"
                >
                  <span className="p-2 rounded-lg bg-dark-800 group-hover:bg-brand-orange/10 transition-colors">
                    <svg
                      className="w-4 h-4"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
                    </svg>
                  </span>
                  <span>+52 55 3966 9986</span>
                </a>

                <a
                  href="mailto:servicio@laceb-lab.com"
                  className="flex items-center gap-3 text-neutral-300 hover:text-brand-orange transition-colors group"
                >
                  <span className="p-2 rounded-lg bg-dark-800 group-hover:bg-brand-orange/10 transition-colors">
                    <svg
                      className="w-4 h-4"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
                      <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
                    </svg>
                  </span>
                  <span>servicio@laceb-lab.com</span>
                </a>
              </div>
            </div>

            {/* Location */}
            <div>
              <h3 className="text-white font-semibold text-lg mb-4 relative inline-block">
                Ubicación
                <span className="absolute -bottom-1 left-0 w-12 h-0.5 bg-brand-orange"></span>
              </h3>
              <address className="not-italic flex items-start gap-3 text-neutral-300">
                <span className="p-2 rounded-lg bg-dark-800 shrink-0">
                  <svg
                    className="w-4 h-4"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path
                      fillRule="evenodd"
                      d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z"
                      clipRule="evenodd"
                    />
                  </svg>
                </span>
                <span className="leading-relaxed">
                  Calle Torre Latinoamericana,
                  <br />
                  Nezahualcóyotl, Estado de México
                  <br />
                  C.P. 57000
                </span>
              </address>
            </div>
          </div>

          {/* Quick Links & Social - 3 columns */}
          <div className="lg:col-span-3 space-y-8">
            {/* Quick Links */}
            <div>
              <h3 className="text-white font-semibold text-lg mb-4 relative inline-block">
                Enlaces
                <span className="absolute -bottom-1 left-0 w-12 h-0.5 bg-brand-orange"></span>
              </h3>
              <nav className="space-y-3">
                <Link
                  href="/Privacy"
                  className="block text-neutral-300 hover:text-brand-orange transition-colors hover:translate-x-1 transform duration-200"
                >
                  Aviso de Privacidad
                </Link>
                <Link
                  href="/terms"
                  className="block text-neutral-300 hover:text-brand-orange transition-colors hover:translate-x-1 transform duration-200"
                >
                  Términos y Condiciones
                </Link>
                <Link
                  href="/about"
                  className="block text-neutral-300 hover:text-brand-orange transition-colors hover:translate-x-1 transform duration-200"
                >
                  Sobre LACEB
                </Link>
                <Link
                  href="/blog"
                  className="block text-neutral-300 hover:text-brand-orange transition-colors hover:translate-x-1 transform duration-200"
                >
                  Blog de Salud
                </Link>
              </nav>
            </div>

            {/* Social Media */}
            <div>
              <h3 className="text-white font-semibold text-lg mb-4 relative inline-block">
                Síguenos
                <span className="absolute -bottom-1 left-0 w-12 h-0.5 bg-brand-orange"></span>
              </h3>
              <div className="flex gap-3">
                <a
                  href="#"
                  className="p-2 rounded-lg bg-dark-800 text-neutral-400 hover:text-brand-orange hover:bg-dark-700 transition-all"
                  aria-label="Facebook"
                >
                  <svg
                    className="w-5 h-5"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
                  </svg>
                </a>
                <a
                  href="#"
                  className="p-2 rounded-lg bg-dark-800 text-neutral-400 hover:text-brand-orange hover:bg-dark-700 transition-all"
                  aria-label="LinkedIn"
                >
                  <svg
                    className="w-5 h-5"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                  </svg>
                </a>
                <a
                  href="#"
                  className="p-2 rounded-lg bg-dark-800 text-neutral-400 hover:text-brand-orange hover:bg-dark-700 transition-all"
                  aria-label="Instagram"
                >
                  <svg
                    className="w-5 h-5"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zM5.838 12a6.162 6.162 0 1112.324 0 6.162 6.162 0 01-12.324 0zM12 16a4 4 0 110-8 4 4 0 010 8zm4.965-10.405a1.44 1.44 0 112.881.001 1.44 1.44 0 01-2.881-.001z" />
                  </svg>
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-16 pt-8 border-t border-dark-700">
          <div className="flex flex-col lg:flex-row justify-between items-center gap-4">
            {/* Copyright */}
            <p className="text-neutral-500 text-sm text-center lg:text-left">
              © {currentYear} LACEB S.A. DE C.V. Todos los derechos reservados.
            </p>

            {/* Legal Links */}
            <div className="flex gap-6 text-sm">
              <Link
                href="/Privacy"
                className="text-neutral-500 hover:text-brand-orange transition-colors"
              >
                Privacidad
              </Link>
              <Link
                href="/terms"
                className="text-neutral-500 hover:text-brand-orange transition-colors"
              >
                Términos
              </Link>
              <Link
                href="/cookies"
                className="text-neutral-500 hover:text-brand-orange transition-colors"
              >
                Cookies
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
