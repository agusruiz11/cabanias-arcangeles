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
      className="scroll-mt-24 bg-brand-beige-pale pt-16 pb-10 sm:pt-20 sm:pb-12"
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
            className="font-display text-2xl font-medium text-brand-dark-green sm:text-3xl"
          >
            Nosotros
          </h2>
          <p className="mt-4 text-brand-dark-green/80 sm:mb-4">
            Cabañas Arcángeles es un complejo turístico exclusivo, ubicado en Villa Los Coihues, a orillas del lago Gutiérrez. 
            Allí, lo esperan 4 magníficas cabañas, construídas sobre la ladera del cerro San Martín, y en la armonía del entorno de un bosque nativo de cipreses, ñires y maitenes. 
            Rodeado por los imponentes cerros Otto y Ventana,	el lugar nos invita a tomar contacto con el encanto de la naturaleza.
            Este enclave único es punto de partida inmejorable para realizar actividades al aire libre : desde una tranquila caminata o el mountain bike, pasando por el trekking y la práctica del kayak. Y por supuesto, en invierno, la cita infaltable : El esquí en Cerro Catedral.
          </p>
          <div className="mt-4">
            <GoogleReviews />
          </div>
          <p className="mt-8 text-brand-dark-green/80 sm:mb-4">
            También nos encontrás y podés dejar tu opinión en estas plataformas.
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
          {/* Tarjeta Instagram */}
          <a
            href="https://www.instagram.com/arcangelesbariloche"
            target="_blank"
            rel="noopener noreferrer"
            className="group mt-6 flex flex-col items-center gap-3 rounded-xl border border-brand-dark-green/15 bg-white p-6 shadow-sm transition-all hover:shadow-md hover:border-brand-dark-green/25 focus:outline-none focus:ring-2 focus:ring-brand-dark-green focus:ring-offset-2"
          >
            <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br from-[#f09433] via-[#e1306c] to-[#833ab4] p-2.5 shadow-sm sm:h-14 sm:w-14">
              <svg className="h-full w-full text-white" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                <path fillRule="evenodd" d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.048-1.024-.06-1.379-.06-3.808v-.63c0-2.43.012-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z" clipRule="evenodd" />
              </svg>
            </div>
            <p className="font-display text-center text-lg text-brand-dark-green/80">
              Seguinos en Instagram
            </p>
            <span className="inline-flex items-center gap-1.5 font-display text-base font-semibold text-brand-dark-green group-hover:text-[#e1306c] transition-colors">
              @arcangelesbariloche
              <ExternalLink className="h-4 w-4 shrink-0 opacity-70 group-hover:opacity-100 transition-opacity" aria-hidden />
            </span>
          </a>

        </motion.div>
      </div>
    </section>
  );
}

export default AboutSection;
