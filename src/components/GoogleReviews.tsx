import { useEffect, useRef, useState } from 'react';
import { ChevronLeft, ChevronRight, ExternalLink, Star } from 'lucide-react';

const MOBILE_BREAKPOINT = 640;

function useIsMobile() {
  const [isMobile, setIsMobile] = useState(false);
  useEffect(() => {
    const mq = window.matchMedia(`(max-width: ${MOBILE_BREAKPOINT - 1}px)`);
    const handler = () => setIsMobile(mq.matches);
    handler();
    mq.addEventListener('change', handler);
    return () => mq.removeEventListener('change', handler);
  }, []);
  return isMobile;
}
import googleLogo from '../assets/icons/google.svg';

const TRUNCATE_LENGTH = 220;
const getApiUrl = (): string => {
  try {
    const env = (import.meta as unknown as { env?: Record<string, string> }).env;
    if (env?.VITE_GOOGLE_REVIEWS_API_URL) return env.VITE_GOOGLE_REVIEWS_API_URL;
  } catch {
    // ignore
  }
  return '/api/google-reviews.php';
};
const API_URL = getApiUrl();

type ViteEnv = { env?: Record<string, string> & { DEV?: boolean } };
const viteEnv = (import.meta as unknown as ViteEnv).env;
/** En desarrollo: usar mock si VITE_GOOGLE_REVIEWS_MOCK=true (en .env.local) para ver las tarjetas sin API. */
const USE_MOCK = viteEnv?.DEV && viteEnv?.VITE_GOOGLE_REVIEWS_MOCK === 'true';

const MOCK_REVIEWS_DATA: GoogleReviewsData = {
  name: 'Cabañas Arcángeles',
  ratingAvg: 4.7,
  total: 81,
  googleMapsUri: 'https://maps.google.com/?cid=123',
  reviews: [
    {
      author: 'María González',
      profileUri: null,
      photoUri: 'https://i.pravatar.cc/100?img=32',
      rating: 5,
      relativeTime: 'hace 2 semanas',
      text: 'Excelente estadía. Las cabañas están impecables, con una vista increíble al lago. El personal muy atento y el desayuno riquísimo. Volveremos sin dudas.',
    },
    {
      author: 'Carlos Rodríguez',
      profileUri: null,
      photoUri: null,
      rating: 5,
      relativeTime: 'hace 1 mes',
      text: 'Lugar soñado para descansar. Muy recomendable.',
    },
    {
      author: 'Ana Martínez',
      profileUri: null,
      photoUri: 'https://i.pravatar.cc/100?img=47',
      rating: 4,
      relativeTime: 'hace 2 meses',
      text: 'Las cabañas están muy bien equipadas y limpias. La zona es tranquila y segura. Lo único que nos hubiera gustado es que el desayuno tuviera más variedad de frutas. Por lo demás todo perfecto: la atención, la ubicación y las instalaciones. Repetiremos en invierno para ver la nieve. Muy recomendable para familias y parejas.',
    },
  ],
};

export interface GoogleReviewItem {
  author: string | null;
  profileUri: string | null;
  photoUri: string | null;
  rating: number | null;
  relativeTime: string | null;
  text: string | null;
}

export interface GoogleReviewsData {
  name: string | null;
  ratingAvg: number | null;
  total: number | null;
  googleMapsUri: string | null;
  reviews: GoogleReviewItem[];
}

const INITIAL_COLORS = ['#15301f', '#cd6718', '#969b4c', '#5e4a30', '#5e9fe1'] as const;

function ReviewCard({
  review,
  defaultTruncate,
  initialColorIndex = 0,
}: {
  review: GoogleReviewItem;
  defaultTruncate: boolean;
  initialColorIndex?: number;
}) {
  const [expanded, setExpanded] = useState(!defaultTruncate);
  const text = review.text ?? '';
  const shouldTruncate = text.length > TRUNCATE_LENGTH;
  const displayText = shouldTruncate && !expanded
    ? text.slice(0, TRUNCATE_LENGTH).trim() + (text.length > TRUNCATE_LENGTH ? '…' : '')
    : text;

  const initials = review.author
    ? review.author
        .trim()
        .split(/\s+/)
        .map((w) => w[0])
        .slice(0, 2)
        .join('')
        .toUpperCase()
    : '?';

  const bgColor = INITIAL_COLORS[initialColorIndex % INITIAL_COLORS.length];
  const rating = review.rating ?? 0;

  return (
    <article
      className="font-google flex min-h-0 flex-col rounded-xl border border-gray-200 bg-white p-4 shadow-sm transition-shadow hover:shadow-md"
      aria-label={`Reseña de ${review.author ?? 'Anónimo'}`}
    >
      {/* Arriba: inicial + nombre + fecha */}
      <div className="mb-2 flex items-start gap-2">
        <div
          className="h-9 w-9 shrink-0 overflow-hidden rounded-full flex items-center justify-center text-white text-sm font-medium"
          style={{ backgroundColor: bgColor }}
          aria-hidden
        >
          {review.photoUri ? (
            <img
              src={review.photoUri}
              alt=""
              className="h-full w-full object-cover"
              loading="lazy"
            />
          ) : (
            initials
          )}
        </div>
        <div className="min-w-0 flex-1">
          {review.author && (
            <p className="text-sm font-medium text-gray-800">{review.author}</p>
          )}
          {review.relativeTime && (
            <p className="text-xs text-gray-500 mt-0.5">{review.relativeTime}</p>
          )}
        </div>
      </div>

      {/* Centro: texto de la reseña */}
      {text ? (
        <div className="min-w-0 text-gray-800">
          <p className="whitespace-pre-wrap text-sm leading-snug">{displayText}</p>
          {shouldTruncate && (
            <button
              type="button"
              onClick={() => setExpanded((e) => !e)}
              className="mt-1.5 text-sm font-medium text-gray-600 underline hover:text-gray-800 focus:outline-none focus:ring-2 focus:ring-gray-300 focus:ring-offset-1 rounded"
            >
              {expanded ? 'Leer menos' : 'Leer más'}
            </button>
          )}
        </div>
      ) : null}

      {/* Abajo: estrellas amarillas + logo Google */}
      <div className="mt-3 flex items-center justify-between border-t border-gray-100 pt-2">
        <div className="flex items-center gap-0.5" aria-label={`${rating} de 5 estrellas`}>
          {[1, 2, 3, 4, 5].map((i) => (
            <Star
              key={i}
              className="h-4 w-4 shrink-0"
              fill={i <= rating ? '#fbbc04' : 'none'}
              stroke={i <= rating ? '#fbbc04' : '#e0e0e0'}
              strokeWidth={1.5}
              aria-hidden
            />
          ))}
        </div>
        <img
          src={googleLogo}
          alt=""
          className="h-5 w-5 shrink-0 opacity-90"
          aria-hidden
        />
      </div>
    </article>
  );
}

function SkeletonCard() {
  return (
    <div className="rounded-xl border border-brand-dark-green/15 bg-white p-5 shadow-sm">
      <div className="mb-3 flex gap-2">
        <div className="h-4 w-12 animate-pulse rounded bg-brand-dark-green/20" />
        <div className="h-4 w-16 animate-pulse rounded bg-brand-dark-green/10" />
      </div>
      <div className="space-y-2">
        <div className="h-3 w-full animate-pulse rounded bg-brand-dark-green/10" />
        <div className="h-3 w-4/5 animate-pulse rounded bg-brand-dark-green/10" />
        <div className="h-3 w-3/5 animate-pulse rounded bg-brand-dark-green/10" />
      </div>
    </div>
  );
}

export function GoogleReviews() {
  const [state, setState] = useState<
    | { status: 'loading' }
    | { status: 'error'; message?: string }
    | { status: 'empty' }
    | { status: 'success'; data: GoogleReviewsData }
  >({ status: 'loading' });
  const [carouselPage, setCarouselPage] = useState(0);
  const isMobile = useIsMobile();
  const scrollRef = useRef<HTMLDivElement>(null);

  const fetchReviews = async () => {
    setState({ status: 'loading' });

    if (USE_MOCK) {
      await new Promise((r) => setTimeout(r, 400));
      setState({ status: 'success', data: MOCK_REVIEWS_DATA });
      setCarouselPage(0);
      return;
    }

    try {
      const res = await fetch(API_URL);
      const text = await res.text();
      let raw: unknown = null;
      try {
        raw = text ? JSON.parse(text) : null;
      } catch {
        raw = null;
      }

      if (!res.ok) {
        if (viteEnv?.DEV) {
          await new Promise((r) => setTimeout(r, 300));
          setState({ status: 'success', data: MOCK_REVIEWS_DATA });
          setCarouselPage(0);
          return;
        }
        const httpCode =
          raw && typeof raw === 'object' && 'httpCode' in raw && typeof (raw as { httpCode: unknown }).httpCode === 'number'
            ? (raw as { httpCode: number }).httpCode
            : res.status;
        const msg =
          (raw && typeof raw === 'object' && 'error' in raw && typeof (raw as { error: unknown }).error === 'string')
            ? (raw as { error: string }).error
            : `Error ${res.status}`;
        // 403 suele ser "billing not enabled" en Google Places API
        const friendlyMessage =
          httpCode === 403
            ? 'Las reseñas de Google requieren tener la facturación habilitada en el proyecto de Google Cloud. Revisá la consola de Google Cloud (Billing) para activarla.'
            : msg;
        setState({ status: 'error', message: friendlyMessage });
        return;
      }

      if (!raw || typeof raw !== 'object') {
        if (viteEnv?.DEV) {
          await new Promise((r) => setTimeout(r, 300));
          setState({ status: 'success', data: MOCK_REVIEWS_DATA });
          setCarouselPage(0);
          return;
        }
        const hint =
          text.slice(0, 50).trim().startsWith('<') ? ' (el servidor devolvió HTML; ¿la API está en /api/?)' : '';
        setState({ status: 'error', message: `Respuesta inválida${hint}` });
        return;
      }

      const data = raw as GoogleReviewsData;
      const reviews = Array.isArray(data.reviews) ? data.reviews : [];

      if (reviews.length === 0) {
        if (viteEnv?.DEV) {
          setState({ status: 'success', data: MOCK_REVIEWS_DATA });
          setCarouselPage(0);
          return;
        }
        setState({ status: 'empty' });
        return;
      }

      setState({
        status: 'success',
        data: {
          name: data.name ?? null,
          ratingAvg: data.ratingAvg ?? null,
          total: data.total ?? null,
          googleMapsUri: data.googleMapsUri ?? null,
          reviews,
        },
      });
      setCarouselPage(0);
    } catch (e) {
      if (viteEnv?.DEV) {
        await new Promise((r) => setTimeout(r, 300));
        setState({ status: 'success', data: MOCK_REVIEWS_DATA });
        setCarouselPage(0);
        return;
      }
      const message = e instanceof Error ? e.message : 'Error al cargar reseñas';
      setState({ status: 'error', message });
    }
  };

  useEffect(() => {
    fetchReviews();
  }, []);

  const isSuccess = state.status === 'success';
  const reviews = isSuccess ? state.data.reviews : [];
  const CARDS_PER_PAGE = isMobile ? 1 : 3;
  const totalPages = Math.max(1, Math.ceil(reviews.length / CARDS_PER_PAGE));
  const safePage = Math.min(carouselPage, Math.max(0, totalPages - 1));

  // Sincronizar scroll con carouselPage en mobile (siempre llamar el hook)
  useEffect(() => {
    if (!isSuccess || !isMobile || !scrollRef.current) return;
    const el = scrollRef.current;
    const cardWidth = el.offsetWidth;
    el.scrollTo({ left: safePage * cardWidth, behavior: 'smooth' });
  }, [safePage, isMobile, isSuccess]);

  // Actualizar carouselPage cuando el usuario hace scroll/swipe (siempre llamar el hook)
  useEffect(() => {
    if (!isMobile || !scrollRef.current || totalPages === 0) return;
    const el = scrollRef.current;
    const handleScroll = () => {
      const cardWidth = el.offsetWidth;
      if (cardWidth <= 0) return;
      const index = Math.round(el.scrollLeft / cardWidth);
      setCarouselPage(() => Math.min(totalPages - 1, Math.max(0, index)));
    };
    el.addEventListener('scroll', handleScroll, { passive: true });
    return () => el.removeEventListener('scroll', handleScroll);
  }, [isMobile, totalPages]);

  if (state.status === 'loading') {
    return (
      <section
        className="rounded-2xl border border-brand-dark-green/10 bg-brand-beige-pale/50 p-6 sm:p-8"
        aria-labelledby="google-reviews-heading"
      >
        <h2
          id="google-reviews-heading"
          className="font-display mb-4 text-xl font-medium text-brand-dark-green sm:text-2xl"
        >
          Reseñas de Google
        </h2>
        <div className="grid gap-4 grid-cols-1 sm:grid-cols-3">
          {[1, 2, 3].map((i) => (
            <SkeletonCard key={i} />
          ))}
        </div>
      </section>
    );
  }

  if (state.status === 'error') {
    return (
      <section
        className="rounded-2xl border border-brand-dark-green/10 bg-brand-beige-pale/50 p-6 sm:p-8"
        aria-labelledby="google-reviews-heading"
      >
        <h2
          id="google-reviews-heading"
          className="font-display mb-4 text-xl font-medium text-brand-dark-green sm:text-2xl"
        >
          Reseñas de Google
        </h2>
        <p className="mb-4 text-brand-dark-green/80">{state.message ?? 'No se pudieron cargar las reseñas.'}</p>
        <button
          type="button"
          onClick={fetchReviews}
          className="rounded-lg bg-brand-dark-green px-4 py-2 font-display text-sm font-medium text-white transition-colors hover:bg-brand-dark-green/90 focus:outline-none focus:ring-2 focus:ring-brand-dark-green focus:ring-offset-2"
        >
          Reintentar
        </button>
      </section>
    );
  }

  if (state.status === 'empty') {
    return (
      <section
        className="rounded-2xl border border-brand-dark-green/10 bg-brand-beige-pale/50 p-6 sm:p-8"
        aria-labelledby="google-reviews-heading"
      >
        <h2
          id="google-reviews-heading"
          className="font-display mb-4 text-xl font-medium text-brand-dark-green sm:text-2xl"
        >
          Reseñas de Google
        </h2>
        <p className="text-brand-dark-green/80">Aún no hay reseñas para mostrar.</p>
      </section>
    );
  }

  const { data } = state;
  const sliceStart = safePage * CARDS_PER_PAGE;
  const sliceEnd = sliceStart + CARDS_PER_PAGE;
  const visibleReviews = reviews.slice(sliceStart, sliceEnd);

  return (
    <section
      className="rounded-2xl border border-brand-dark-green/10 bg-brand-beige-pale/50 p-6 sm:p-8"
      aria-labelledby="google-reviews-heading"
    >
      <div className="mb-4 flex flex-wrap items-baseline justify-between gap-2">
        <h2
          id="google-reviews-heading"
          className="font-display text-xl font-medium text-brand-dark-green sm:text-2xl"
        >
          Reseñas de Google
        </h2>
        {(data.ratingAvg != null || data.total != null) && (
          <div className="flex items-baseline gap-2 text-brand-dark-green/80">
            {data.ratingAvg != null && (
              <span className="flex items-center gap-1 font-display font-medium text-brand-dark-green">
                <Star className="h-4 w-4 fill-current" aria-hidden />
                {data.ratingAvg}
              </span>
            )}
            {data.total != null && (
              <span className="text-sm">({data.total} reseñas)</span>
            )}
          </div>
        )}
      </div>

      {/* Carrusel: mobile 1 card + swipe / desktop 3 cards + flechas */}
      <div className="relative flex items-stretch gap-2">
        <button
          type="button"
          onClick={() => setCarouselPage((p) => Math.max(0, p - 1))}
          disabled={safePage === 0}
          className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-gray-200 text-gray-600 transition-colors hover:bg-gray-300 disabled:opacity-40 disabled:pointer-events-none self-center focus:outline-none focus:ring-2 focus:ring-brand-dark-green focus:ring-offset-2"
          aria-label="Reseñas anteriores"
        >
          <ChevronLeft className="h-5 w-5" aria-hidden />
        </button>

        {/* Mobile: scroll horizontal con snap, una card a la vez, swipe con el dedo */}
        {/* Desktop: grid de 3 cards */}
        <div
          ref={scrollRef}
          className={`min-w-0 flex-1 ${isMobile ? 'flex overflow-x-auto overflow-y-hidden snap-x snap-mandatory scroll-smooth [-webkit-overflow-scrolling:touch] [-ms-overflow-style:none] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden' : ''}`}
        >
          {isMobile ? (
            reviews.map((review, i) => (
              <div key={i} className="flex-[0_0_100%] shrink-0 snap-start">
                <ReviewCard
                  review={review}
                  defaultTruncate={(review.text?.length ?? 0) > TRUNCATE_LENGTH}
                  initialColorIndex={i}
                />
              </div>
            ))
          ) : (
            <div className="grid grid-cols-3 gap-4 items-start">
              {visibleReviews.map((review, i) => (
                <ReviewCard
                  key={sliceStart + i}
                  review={review}
                  defaultTruncate={(review.text?.length ?? 0) > TRUNCATE_LENGTH}
                  initialColorIndex={sliceStart + i}
                />
              ))}
            </div>
          )}
        </div>

        <button
          type="button"
          onClick={() => setCarouselPage((p) => Math.min(totalPages - 1, p + 1))}
          disabled={safePage >= totalPages - 1}
          className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-gray-200 text-gray-600 transition-colors hover:bg-gray-300 disabled:opacity-40 disabled:pointer-events-none self-center focus:outline-none focus:ring-2 focus:ring-brand-dark-green focus:ring-offset-2"
          aria-label="Más reseñas"
        >
          <ChevronRight className="h-5 w-5" aria-hidden />
        </button>
      </div>

      {/* Puntos de paginación */}
      {totalPages > 1 && (
        <div className="mt-4 flex justify-center gap-1.5" role="tablist" aria-label="Páginas del carrusel">
          {Array.from({ length: totalPages }, (_, i) => (
            <button
              key={i}
              type="button"
              onClick={() => setCarouselPage(i)}
              role="tab"
              aria-selected={i === safePage}
              aria-label={`Página ${i + 1}`}
              className={`h-2 rounded-full transition-colors focus:outline-none focus:ring-2 focus:ring-brand-dark-green focus:ring-offset-1 ${
                i === safePage ? 'w-6 bg-gray-700' : 'w-2 bg-gray-300 hover:bg-gray-400'
              }`}
            />
          ))}
        </div>
      )}

      {data.googleMapsUri && (
        <p className="mt-6 text-center">
          <a
            href={data.googleMapsUri}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 rounded-lg bg-brand-dark-green px-4 py-2.5 font-display text-sm font-medium text-white transition-colors hover:bg-brand-dark-green/90 focus:outline-none focus:ring-2 focus:ring-brand-dark-green focus:ring-offset-2"
          >
            Ver todas en Google
            <ExternalLink className="h-4 w-4 shrink-0" aria-hidden />
          </a>
        </p>
      )}
    </section>
  );
}

export default GoogleReviews;
