import React from 'react';

const MapIframe = ({ 
  src, 
  title = "Mapa", 
  width = "100%", 
  height = "300",
  className = "rounded-xl"
}) => {
  return (
    <div className="relative">
      <iframe
        src={src}
        width={width}
        height={height}
        style={{ border: 0 }}
        allowFullScreen=""
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
        className={className}
        title={title}
        onLoad={() => console.log('El iframe ha cargado')}
      />
      <div className="absolute bottom-2 right-2 bg-white px-2 py-1 rounded text-xs text-gray-600 shadow-sm">
        <a 
          href={src.replace('/embed', '')} 
          target="_blank" 
          rel="noopener noreferrer" 
          className="text-blue-600 hover:underline"
        >
          Ver mapa más grande
        </a>
      </div>
    </div>
  );
};

export default MapIframe;