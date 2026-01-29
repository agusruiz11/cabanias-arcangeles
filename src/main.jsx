import React, { Suspense, lazy } from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import App from '@/App';
import '@/index.css';

const Gallery = lazy(() => import('@/components/Gallery'));

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />} />
        <Route
          path="/gallery"
          element={
            <Suspense fallback={<div className="min-h-screen bg-brand-beige-pale flex items-center justify-center" aria-hidden />}>
              <Gallery />
            </Suspense>
          }
        />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);