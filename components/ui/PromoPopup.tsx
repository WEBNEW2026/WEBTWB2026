import React, { useState, useEffect, useCallback, useRef } from 'react';

const WHATSAPP_NUMBER = '628119102003';

// ── Konfigurasi setiap slide popup ──────────────────────────────
const SLIDES = [
  {
    image: '/images/popup-october-privilege.webp',
    alt: 'October Privilege Disc 20% – Taman Wisata Bougenville',
    message:
      'Halo Taman Wisata Bougenville! Saya tertarik dengan penawaran/promo October Privilege Disc 20%. Boleh saya mendapatkan informasi lebih lanjut? Saya mendapatkan informasi ini dari website.',
  },
  {
    image: '/images/popup-promo.webp',
    alt: 'Corporate Group Escape – Taman Wisata Bougenville',
    message:
      'Halo Taman Wisata Bougenville! Saya tertarik dengan penawaran/promo Corporate Group Escape. Boleh saya mendapatkan informasi lebih lanjut? Saya mendapatkan informasi ini dari website.',
  },
];

const SLIDE_DURATION = 5; // detik per slide

export const PromoPopup: React.FC = () => {
  const [isVisible, setIsVisible]   = useState(true);
  const [current, setCurrent]       = useState(0);
  const [progress, setProgress]     = useState(0);

  const intervalRef   = useRef<ReturnType<typeof setInterval> | null>(null);
  const startTimeRef  = useRef<number>(Date.now());
  const touchStartX   = useRef<number | null>(null);

  const total = SLIDES.length;

  // ── Timer progress ───────────────────────────────────────────
  const startTimer = useCallback(() => {
    if (intervalRef.current) clearInterval(intervalRef.current);
    setProgress(0);
    startTimeRef.current = Date.now();

    intervalRef.current = setInterval(() => {
      const elapsed = (Date.now() - startTimeRef.current) / 1000;
      const pct = Math.min((elapsed / SLIDE_DURATION) * 100, 100);
      setProgress(pct);

      if (pct >= 100) {
        clearInterval(intervalRef.current!);
        setCurrent((prev) => {
          if (prev + 1 >= total) { setIsVisible(false); return prev; }
          return prev + 1;
        });
      }
    }, 50);
  }, [total]);

  useEffect(() => {
    if (!isVisible) return;
    startTimer();
    return () => { if (intervalRef.current) clearInterval(intervalRef.current); };
  }, [current, isVisible, startTimer]);

  // ── Navigasi ─────────────────────────────────────────────────
  const goTo = useCallback((idx: number) => setCurrent(idx), []);

  const goPrev = useCallback((e: React.MouseEvent) => {
    e.stopPropagation();
    goTo((current - 1 + total) % total);
  }, [current, total, goTo]);

  const goNext = useCallback((e: React.MouseEvent) => {
    e.stopPropagation();
    goTo((current + 1) % total);
  }, [current, total, goTo]);

  // ── Touch / Swipe ─────────────────────────────────────────────
  const handleTouchStart = useCallback((e: React.TouchEvent) => {
    touchStartX.current = e.touches[0].clientX;
  }, []);

  const handleTouchEnd = useCallback((e: React.TouchEvent) => {
    if (touchStartX.current === null) return;
    const delta = e.changedTouches[0].clientX - touchStartX.current;
    if (delta > 50)  goTo((current - 1 + total) % total); // swipe kanan → prev
    if (delta < -50) goTo((current + 1) % total);          // swipe kiri  → next
    touchStartX.current = null;
  }, [current, total, goTo]);

  // ── Event lain ───────────────────────────────────────────────
  const handleClose = useCallback((e: React.MouseEvent) => {
    e.stopPropagation();
    setIsVisible(false);
  }, []);

  const handleImageClick = useCallback(() => {
    // Hanya buka WA jika bukan swipe (delta kecil)
    const msg = encodeURIComponent(SLIDES[current].message);
    window.open(`https://wa.me/${WHATSAPP_NUMBER}?text=${msg}`, '_blank', 'noopener,noreferrer');
  }, [current]);

  const handleOverlayClick = useCallback((e: React.MouseEvent) => {
    if ((e.target as HTMLElement).id === 'promo-overlay') setIsVisible(false);
  }, []);

  if (!isVisible) return null;

  return (
    <div
      id="promo-overlay"
      onClick={handleOverlayClick}
      style={{
        position: 'fixed', inset: 0, zIndex: 9999,
        display: 'flex', alignItems: 'center', justifyContent: 'center',
        backgroundColor: 'rgba(0,0,0,0.72)',
        backdropFilter: 'blur(5px)', WebkitBackdropFilter: 'blur(5px)',
        padding: '16px',
        animation: 'promoFadeIn 0.3s ease',
      }}
    >
      <style>{`
        @keyframes promoFadeIn  { from{opacity:0} to{opacity:1} }
        @keyframes promoSlideUp {
          from { opacity:0; transform:scale(0.90) translateY(20px); }
          to   { opacity:1; transform:scale(1) translateY(0); }
        }
        #promo-card { animation: promoSlideUp 0.38s cubic-bezier(0.34,1.46,0.64,1); }
        #promo-img  { transition: opacity 0.2s ease; }
        #promo-img:hover { opacity:0.92; }
        .promo-nav-btn:hover { background:rgba(255,255,255,0.28) !important; }
        #promo-x:hover { background:rgba(0,0,0,0.78) !important; }

        /* Sembunyikan tombol panah di mobile – ganti dengan swipe */
        @media (max-width: 600px) {
          .promo-nav-btn { display:none !important; }
          #promo-swipe-hint { display:flex !important; }
        }
      `}</style>

      <div id="promo-card" style={{ position:'relative', maxWidth:'480px', width:'100%' }}>

        {/* ── Progress bars ─────────────────────────────────────── */}
        <div style={{ display:'flex', gap:'5px', marginBottom:'6px', padding:'0 2px' }}>
          {SLIDES.map((_, i) => (
            <div
              key={i}
              onClick={() => goTo(i)}
              style={{
                flex:1, height:'4px', borderRadius:'4px',
                backgroundColor:'rgba(255,255,255,0.25)',
                overflow:'hidden', cursor:'pointer',
              }}
            >
              <div style={{
                height:'100%', borderRadius:'4px',
                backgroundColor:'#FFD700',
                transition:'width 0.05s linear',
                width: i < current ? '100%' : i === current ? `${progress}%` : '0%',
              }} />
            </div>
          ))}
        </div>

        {/* ── Gambar + nav buttons ──────────────────────────────── */}
        <div
          style={{ position:'relative', touchAction:'pan-y', userSelect:'none' }}
          onTouchStart={handleTouchStart}
          onTouchEnd={handleTouchEnd}
        >
          <img
            id="promo-img"
            key={current}
            src={SLIDES[current].image}
            alt={SLIDES[current].alt}
            onClick={handleImageClick}
            style={{
              display:'block', width:'100%', height:'auto',
              maxHeight:'70vh', objectFit:'cover',
              borderRadius:'8px', cursor:'pointer',
              boxShadow:'0 24px 64px rgba(0,0,0,0.55)',
              animation:'promoSlideUp 0.3s ease',
            }}
            draggable={false}
          />

          {/* Tombol X */}
          <button
            id="promo-x"
            onClick={handleClose}
            aria-label="Tutup"
            style={{
              position:'absolute', top:'10px', right:'10px',
              background:'rgba(0,0,0,0.48)', border:'none',
              color:'#fff', fontSize:'17px', fontWeight:700,
              width:'30px', height:'30px',
              display:'flex', alignItems:'center', justifyContent:'center',
              cursor:'pointer', borderRadius:'4px', lineHeight:1, padding:0,
            }}
          >✕</button>

          {/* Tombol Prev – desktop only */}
          <button
            className="promo-nav-btn"
            onClick={goPrev}
            aria-label="Sebelumnya"
            style={{
              position:'absolute', top:'50%', left:'-58px',
              transform:'translateY(-50%)',
              background:'rgba(255,255,255,0.15)',
              backdropFilter:'blur(4px)',
              border:'2px solid rgba(255,255,255,0.55)',
              color:'#fff', borderRadius:'50%',
              width:'44px', height:'44px',
              display:'flex', alignItems:'center', justifyContent:'center',
              cursor:'pointer', fontSize:'20px', fontWeight:700,
              boxShadow:'0 4px 16px rgba(0,0,0,0.35)',
              transition:'background 0.2s', zIndex:10,
            }}
          >‹</button>

          {/* Tombol Next – desktop only */}
          <button
            className="promo-nav-btn"
            onClick={goNext}
            aria-label="Berikutnya"
            style={{
              position:'absolute', top:'50%', right:'-58px',
              transform:'translateY(-50%)',
              background:'rgba(255,255,255,0.15)',
              backdropFilter:'blur(4px)',
              border:'2px solid rgba(255,255,255,0.55)',
              color:'#fff', borderRadius:'50%',
              width:'44px', height:'44px',
              display:'flex', alignItems:'center', justifyContent:'center',
              cursor:'pointer', fontSize:'20px', fontWeight:700,
              boxShadow:'0 4px 16px rgba(0,0,0,0.35)',
              transition:'background 0.2s', zIndex:10,
            }}
          >›</button>
        </div>

        {/* ── Swipe hint – mobile only ──────────────────────────── */}
        <div
          id="promo-swipe-hint"
          style={{
            display: 'none',          // default hidden, tampil via CSS media query
            alignItems: 'center',
            justifyContent: 'center',
            gap: '6px',
            marginTop: '8px',
            color: 'rgba(255,255,255,0.55)',
            fontSize: '11px',
            letterSpacing: '0.05em',
          }}
        >
          <span>←</span>
          <span>Geser untuk slide</span>
          <span>→</span>
        </div>

      </div>
    </div>
  );
};

export default PromoPopup;
