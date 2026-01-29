import { useEffect, useState } from 'react';
import { ExternalLink, Star } from 'lucide-react';

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

export interface GoogleReviewItem {
  author: string | null;
  profileUri: string | null;
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

function ReviewCard({
  review,
  defaultTruncate,
}: {
  review: GoogleReviewItem;
  defaultTruncate: boolean;
}) {
  const [expanded, setExpanded] = useState(!defaultTruncate);
  const text = review.text ?? '';
  const shouldTruncate = text.length > TRUNCATE_LENGTH;
  const displayText = shouldTruncate && !expanded
    ? text.slice(0, TRUNCATE_LENGTH).trim() + (text.length > TRUNCATE_LENGTH ? '…' : '')
    : text;

  return (
    <article
      className="rounded-xl border border-brand-dark-green/15 bg-white p-5 shadow-sm transition-shadow hover:shadow-md"
      aria-label={`Reseña de ${review.author ?? 'Anónimo'}`}
    >
      <div className="mb-3 flex flex-wrap items-center gap-2">
        {review.rating != null && (
          <div className="flex items-center gap-1 text-brand-dark-green" aria-hidden>
            <Star className="h-4 w-4 fill-current" aria-hidden />
            <span className="font-display text-sm font-medium">{review.rating}</span>
          </div>
        )}
        {review.relativeTime && (
          <span className="text-sm text-brand-dark-green/70">{review.relativeTime}</span>
        )}
        {review.author && (
          <span className="font-display text-sm font-medium text-brand-dark-green">
            {review.author}
          </span>
        )}
      </div>
      {text ? (
        <div className="text-brand-dark-green/90">
          <p className="whitespace-pre-wrap text-sm leading-relaxed">{displayText}</p>
          {shouldTruncate && (
            <button
              type="button"
              onClick={() => setExpanded((e) => !e)}
              className="mt-2 font-display text-sm font-medium text-brand-dark-green underline focus:outline-none focus:ring-2 focus:ring-brand-dark-green focus:ring-offset-1"
            >
              {expanded ? 'Leer menos' : 'Leer más'}
            </button>
          )}
        </div>
      ) : null}
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

  const fetchReviews = async () => {
    setState({ status: 'loading' });
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
        const msg =
          (raw && typeof raw === 'object' && 'error' in raw && typeof (raw as { error: unknown }).error === 'string')
            ? (raw as { error: string }).error
            : `Error ${res.status}`;
        setState({ status: 'error', message: msg });
        return;
      }

      if (!raw || typeof raw !== 'object') {
        const hint =
          text.slice(0, 50).trim().startsWith('<') ? ' (el servidor devolvió HTML; ¿la API está en /api/?)' : '';
        setState({ status: 'error', message: `Respuesta inválida${hint}` });
        return;
      }

      const data = raw as GoogleReviewsData;
      const reviews = Array.isArray(data.reviews) ? data.reviews : [];

      if (reviews.length === 0) {
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
    } catch (e) {
      const message = e instanceof Error ? e.message : 'Error al cargar reseñas';
      setState({ status: 'error', message });
    }
  };

  useEffect(() => {
    fetchReviews();
  }, []);

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
          Reseñas en Google
        </h2>
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
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
          Reseñas en Google
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
          Reseñas en Google
        </h2>
        <p className="text-brand-dark-green/80">Aún no hay reseñas para mostrar.</p>
      </section>
    );
  }

  const { data } = state;

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
          Reseñas en Google
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

      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {data.reviews.slice(0, 5).map((review, i) => (
          <ReviewCard
            key={i}
            review={review}
            defaultTruncate={(review.text?.length ?? 0) > TRUNCATE_LENGTH}
          />
        ))}
      </div>

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
