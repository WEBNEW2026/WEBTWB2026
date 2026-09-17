import React, { useState, useEffect, useCallback } from 'react';

const WHATSAPP_NUMBER = '628119102003';
const WHATSAPP_MESSAGE = encodeURIComponent(
  'Halo Taman Wisata Bougenville! Saya tertarik dengan penawaran/promo villa. Boleh saya mendapatkan informasi lebih lanjut?'
);
const POPUP_IMAGE = '/images/popup-promo.webp';
const DURATION = 10;

export const PromoPopup: React.FC = () => {
  const [isVisible, setIsVisible] = useState(true);
  const [countdown, setCountdown] = useState(DURATION);

  // Popup langsung muncul tanpa delay setiap kunjungan

  // Countdown — tutup otomatis setelah 10 detik
  useEffect(() => {
    if (!isVisible) return;
    if (countdown <= 0) { setIsVisible(false); return; }
    const t = setTimeout(() => setCountdown((p) => p - 1), 1000);
    return () => clearTimeout(t);
  }, [isVisible, countdown]);

  const handleClose = useCallback((e: React.MouseEvent) => {
    e.stopPropagation();
    setIsVisible(false);
  }, []);

  const handleImageClick = useCallback(() => {
    window.open(`https://wa.me/${WHATSAPP_NUMBER}?text=${WHATSAPP_MESSAGE}`, '_blank', 'noopener,noreferrer');
  }, []);

  const handleOverlayClick = useCallback((e: React.MouseEvent) => {
    if ((e.target as HTMLElement).id === 'promo-overlay') setIsVisible(false);
  }, []);

  if (!isVisible) return null;

  const progressPct = (countdown / DURATION) * 100;

  return (
    <div
      id="promo-overlay"
      onClick={handleOverlayClick}
      style={{
        position: 'fixed',
        inset: 0,
        zIndex: 9999,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: 'rgba(0,0,0,0.70)',
        backdropFilter: 'blur(4px)',
        WebkitBackdropFilter: 'blur(4px)',
        padding: '16px',
        animation: 'promoFadeIn 0.3s ease',
      }}
    >
      <style>{`
        @keyframes promoFadeIn {
          from { opacity: 0; }
          to   { opacity: 1; }
        }
        @keyframes promoSlideUp {
          from { opacity: 0; transform: scale(0.90) translateY(20px); }
          to   { opacity: 1; transform: scale(1) translateY(0); }
        }
        #promo-card { animation: promoSlideUp 0.38s cubic-bezier(0.34,1.46,0.64,1); }
        #promo-img:hover { opacity: 0.95; }
        #promo-x:hover { background: rgba(0,0,0,0.75) !important; }
      `}</style>

      <div id="promo-card" style={{ position: 'relative', maxWidth: '480px', width: '100%' }}>

        {/* Gambar — klik → WhatsApp */}
        <img
          id="promo-img"
          src={POPUP_IMAGE}
          alt="Promo Taman Wisata Bougenville"
          onClick={handleImageClick}
          style={{
            display: 'block',
            width: '100%',
            height: 'auto',
            borderRadius: '6px 6px 0 0',
            cursor: 'pointer',
            transition: 'opacity 0.2s ease',
            boxShadow: '0 20px 60px rgba(0,0,0,0.5)',
          }}
          draggable={false}
        />

        {/* Tombol X — di dalam foto pojok kanan atas, tanpa bulat */}
        <button
          id="promo-x"
          onClick={handleClose}
          aria-label="Tutup"
          style={{
            position: 'absolute',
            top: '10px',
            right: '10px',
            background: 'rgba(0,0,0,0.45)',
            border: 'none',
            color: '#fff',
            fontSize: '18px',
            fontWeight: 700,
            width: '30px',
            height: '30px',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            cursor: 'pointer',
            transition: 'background 0.2s',
            borderRadius: '3px',
            lineHeight: 1,
            padding: 0,
          }}
        >
          ✕
        </button>

        {/* Progress bar waktu — di bawah gambar, tanpa angka */}
        <div
          style={{
            width: '100%',
            height: '3px',
            backgroundColor: 'rgba(255,255,255,0.2)',
            borderRadius: '0 0 6px 6px',
            overflow: 'hidden',
          }}
        >
          <div
            style={{
              height: '100%',
              width: `${progressPct}%`,
              backgroundColor: '#D4AF37',
              transition: 'width 1s linear',
              borderRadius: '0 0 6px 6px',
            }}
          />
        </div>

      </div>
    </div>
  );
};

export default PromoPopup;
