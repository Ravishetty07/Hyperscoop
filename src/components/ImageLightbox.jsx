import React, { useEffect, useMemo, useRef, useState } from 'react';
import { createPortal } from 'react-dom';
import { AnimatePresence, motion } from 'framer-motion';
import { ChevronLeft, ChevronRight, X } from 'lucide-react';

const overlayVariants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { duration: 0.35, ease: 'easeInOut' } },
};

const modalVariants = {
  hidden: { opacity: 0, scale: 0.92 },
  visible: { opacity: 1, scale: 1, transition: { duration: 0.35, ease: 'easeInOut' } },
};

const buttonBase =
  'flex h-12 w-12 md:h-14 md:w-14 items-center justify-center rounded-full bg-white shadow-[0_10px_30px_rgba(15,23,42,0.18)] text-slate-900 transition-transform duration-200';

const ImageLightbox = ({ slides, initialIndex, onClose }) => {
  const [currentIndex, setCurrentIndex] = useState(initialIndex ?? 0);
  const [touchStartX, setTouchStartX] = useState(null);
  const modalRef = useRef(null);
  const closeButtonRef = useRef(null);

  const currentSlide = slides[currentIndex];

  const prevIndex = (currentIndex - 1 + slides.length) % slides.length;
  const nextIndex = (currentIndex + 1) % slides.length;

  const focusableSelectors = 'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])';

  const slideImages = useMemo(() => slides.map((item) => item.image), [slides]);

  useEffect(() => {
    if (initialIndex !== null) {
      setCurrentIndex(initialIndex);
    }
  }, [initialIndex]);

  useEffect(() => {
    const previousFocus = document.activeElement;
    document.body.style.overflow = 'hidden';
    document.body.style.touchAction = 'none';

    const handleKeyDown = (event) => {
      if (event.key === 'Escape') {
        event.preventDefault();
        onClose();
      }
      if (event.key === 'ArrowLeft') {
        event.preventDefault();
        setCurrentIndex((index) => (index - 1 + slides.length) % slides.length);
      }
      if (event.key === 'ArrowRight') {
        event.preventDefault();
        setCurrentIndex((index) => (index + 1) % slides.length);
      }
      if (event.key === 'Tab') {
        if (!modalRef.current) return;
        const focusableElements = Array.from(modalRef.current.querySelectorAll(focusableSelectors));
        if (focusableElements.length === 0) return;
        const firstElement = focusableElements[0];
        const lastElement = focusableElements[focusableElements.length - 1];

        if (event.shiftKey) {
          if (document.activeElement === firstElement) {
            event.preventDefault();
            lastElement.focus();
          }
        } else {
          if (document.activeElement === lastElement) {
            event.preventDefault();
            firstElement.focus();
          }
        }
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    closeButtonRef.current?.focus();

    return () => {
      window.removeEventListener('keydown', handleKeyDown);
      document.body.style.overflow = '';
      document.body.style.touchAction = '';
      previousFocus?.focus?.();
    };
  }, [onClose, slides.length]);

  useEffect(() => {
    const preloadImage = (src) => {
      const image = new Image();
      image.src = src;
    };

    preloadImage(slideImages[prevIndex]);
    preloadImage(slideImages[nextIndex]);
  }, [prevIndex, nextIndex, slideImages]);

  if (typeof document === 'undefined') return null;

  const handleBackdropClick = (event) => {
    if (event.target === event.currentTarget) {
      onClose();
    }
  };

  const handleTouchStart = (event) => {
    setTouchStartX(event.changedTouches[0].clientX);
  };

  const handleTouchEnd = (event) => {
    setTouchEndX(event.changedTouches[0].clientX);
    if (touchStartX === null) return;
    const deltaX = touchStartX - event.changedTouches[0].clientX;
    const threshold = 50;
    if (deltaX > threshold) {
      setCurrentIndex(nextIndex);
    } else if (deltaX < -threshold) {
      setCurrentIndex(prevIndex);
    }
    setTouchStartX(null);
  };

  return createPortal(
    <AnimatePresence>
      <motion.div
        className="fixed inset-0 z-50 flex items-center justify-center px-4 md:px-8"
        initial="hidden"
        animate="visible"
        exit="hidden"
        variants={overlayVariants}
        style={{ backgroundColor: 'rgba(0,0,0,0.75)', backdropFilter: 'blur(12px)' }}
        onClick={handleBackdropClick}
      >
        <motion.div
          ref={modalRef}
          className="relative w-full max-w-[80vw] max-h-[85vh]"
          variants={modalVariants}
          initial="hidden"
          animate="visible"
          exit="hidden"
          onTouchStart={handleTouchStart}
          onTouchEnd={handleTouchEnd}
        >
          <motion.img
            layoutId={currentSlide.id}
            src={currentSlide.image}
            alt={currentSlide.name}
            className="w-full h-full max-h-[85vh] rounded-[20px] object-contain bg-slate-950/5"
            style={{ boxShadow: '0 40px 120px rgba(15, 23, 42, 0.35)' }}
          />

          <button
            ref={closeButtonRef}
            type="button"
            aria-label="Close lightbox"
            onClick={onClose}
            className="absolute right-4 top-4 md:right-6 md:top-6 z-20"
          >
            <motion.div
              whileHover={{ scale: 1.08, backgroundColor: '#f8fafc' }}
              className={`${buttonBase}`}
            >
              <X size={20} />
            </motion.div>
          </button>

          <button
            type="button"
            aria-label="Previous image"
            onClick={() => setCurrentIndex(prevIndex)}
            className="absolute left-4 top-1/2 z-20 -translate-y-1/2"
          >
            <motion.div
              whileHover={{ scale: 1.08, backgroundColor: '#f1f5f9' }}
              className={buttonBase}
            >
              <ChevronLeft size={24} />
            </motion.div>
          </button>

          <button
            type="button"
            aria-label="Next image"
            onClick={() => setCurrentIndex(nextIndex)}
            className="absolute right-4 top-1/2 z-20 -translate-y-1/2"
          >
            <motion.div
              whileHover={{ scale: 1.08, backgroundColor: '#f1f5f9' }}
              className={buttonBase}
            >
              <ChevronRight size={24} />
            </motion.div>
          </button>

          <div className="absolute left-1/2 bottom-4 z-20 flex -translate-x-1/2 gap-2">
            {slides.map((slide, index) => (
              <motion.button
                key={slide.id}
                type="button"
                aria-label={`Go to image ${index + 1}`}
                onClick={() => setCurrentIndex(index)}
                className="h-2 rounded-full bg-white/60"
                initial={false}
                animate={index === currentIndex ? { width: 32, backgroundColor: 'rgba(255,255,255,0.95)' } : { width: 10, backgroundColor: 'rgba(255,255,255,0.55)' }}
                transition={{ duration: 0.25, ease: 'easeInOut' }}
              />
            ))}
          </div>
        </motion.div>
      </motion.div>
    </AnimatePresence>,
    document.body,
  );
};

export default ImageLightbox;
