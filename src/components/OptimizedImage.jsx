import React from 'react';

/**
 * Imagen optimizada para LCP, CLS y lazy loading.
 * - priority: true → fetchpriority="high", loading="eager" (solo para LCP, ej. hero)
 * - priority: false → loading="lazy" (below the fold)
 * - aspectRatio evita CLS reservando espacio antes de cargar
 */
function OptimizedImage({
  src,
  alt,
  priority = false,
  loading: loadingProp,
  aspectRatio = null,
  width,
  height,
  className = '',
  sizes,
  srcSet,
  ...props
}) {
  const isLcp = priority;
  const loading = loadingProp ?? (isLcp ? 'eager' : 'lazy');

  return (
    <img
      src={src}
      alt={alt}
      loading={loading}
      fetchPriority={isLcp ? 'high' : undefined}
      decoding={isLcp ? 'sync' : 'async'}
      width={width}
      height={height}
      sizes={sizes}
      srcSet={srcSet}
      className={className}
      style={
        aspectRatio
          ? { aspectRatio: typeof aspectRatio === 'number' ? aspectRatio : aspectRatio }
          : undefined
      }
      {...props}
    />
  );
}

export default React.memo(OptimizedImage);
