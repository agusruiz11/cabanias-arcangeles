import React from 'react';
import { motion } from 'framer-motion';
import { ExternalLink } from 'lucide-react';
import bookingLogo from '@/assets/icons/bookingcom-1.svg';
import googleLogo from '@/assets/icons/google.svg';
import GoogleReviews from '@/components/GoogleReviews';

/** Link a la ficha en Booking.com (affiliate id) */
const BOOKING_HOTEL_URL =
  'https://www.booking.com/hotel/ar/arcangeles.es.html?aid=318615&label=Spanish_Argentina_ES_AR&sid=d5c2b82407662ec5567059ad11d29c9b';

/** Link a Google Maps (completar con la URL de tu negocio en Maps) */
const GOOGLE_MAPS_URL =
  'https://www.google.com/maps/search/?api=1&query=Cabañas+Arcángeles+Villa+Los+Coihues+Río+Negro';

function AboutSection() {
  return (
    <section
      id="about"
      className="scroll-mt-24 bg-brand-beige-pale py-16 sm:py-20"
      aria-labelledby="about-heading"
    >
      <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          <h2
            id="about-heading"
            className="font-display mb-2 text-2xl font-medium text-brand-dark-green sm:text-3xl"
          >
            Nosotros
          </h2>
          <p className="mb-8 text-brand-dark-green/80 sm:mb-10">
            Reservá tu estadía en Posada del Arcángel. También nos encontrás y podés dejar tu opinión en estas plataformas.
          </p>

          <div className="grid gap-4 sm:grid-cols-2">
            {/* Tarjeta Booking */}
            <a
              href={BOOKING_HOTEL_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="group flex flex-col items-center gap-3 rounded-xl border border-brand-dark-green/15 bg-white p-6 shadow-sm transition-shadow hover:shadow-md focus:outline-none focus:ring-2 focus:ring-brand-dark-green focus:ring-offset-2"
            >
              <img
                src={bookingLogo}
                alt=""
                className="h-12 w-auto sm:h-14"
                aria-hidden
              />
              <div className="flex items-baseline gap-1.5">
                <span className="font-display text-2xl font-medium text-brand-dark-green">9.4</span>
                <span className="text-sm text-brand-dark-green/70">/ 10</span>
              </div>
              <span className="inline-flex items-center gap-1.5 font-display text-sm font-medium text-brand-dark-green">
                Ver ficha y reservar
                <ExternalLink className="h-3.5 w-3.5 shrink-0 opacity-70 group-hover:opacity-100" aria-hidden />
              </span>
            </a>

            {/* Tarjeta Google */}
            <a
              href={GOOGLE_MAPS_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="group flex flex-col items-center gap-3 rounded-xl border border-brand-dark-green/15 bg-white p-6 shadow-sm transition-shadow hover:shadow-md focus:outline-none focus:ring-2 focus:ring-brand-dark-green focus:ring-offset-2"
            >
              <img
                src={googleLogo}
                alt=""
                className="h-12 w-12 sm:h-14 sm:w-14"
                aria-hidden
              />
              <div className="flex items-baseline gap-1.5">
                <span className="font-display text-2xl font-medium text-brand-dark-green">4.7</span>
                <span className="text-sm text-brand-dark-green/70">/ 5</span>
              </div>
              <span className="inline-flex items-center gap-1.5 font-display text-sm font-medium text-brand-dark-green">
                Ver en Google Maps
                <ExternalLink className="h-3.5 w-3.5 shrink-0 opacity-70 group-hover:opacity-100" aria-hidden />
              </span>
            </a>
          </div>

          <div className="mt-12">
            <GoogleReviews />
          </div>
        </motion.div>
      </div>
    </section>
  );
}

export default AboutSection;
