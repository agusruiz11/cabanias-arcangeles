import React from 'react';

/**
 * Icono Kayak (no disponible en lucide-react < 0.538).
 * SVG de Lucide: https://lucide.dev/icons/kayak
 */
export function KayakIcon({ className, size = 24, strokeWidth = 2, ...props }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={strokeWidth}
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
      {...props}
    >
      <path d="M18 17a1 1 0 0 0-1 1v1a2 2 0 1 0 2-2z" />
      <path d="M20.97 3.61a.45.45 0 0 0-.58-.58C10.2 6.6 6.6 10.2 3.03 20.39a.45.45 0 0 0 .58.58C13.8 17.4 17.4 13.8 20.97 3.61" />
      <path d="m6.707 6.707 10.586 10.586" />
      <path d="M7 5a2 2 0 1 0-2 2h1a1 1 0 0 0 1-1z" />
    </svg>
  );
}

export default KayakIcon;
