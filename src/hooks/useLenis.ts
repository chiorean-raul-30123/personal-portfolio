import { useEffect } from 'react';
import Lenis from 'lenis';
import { subscribeToFrame } from '../lib/frame-loop';

export function useLenis() {
  useEffect(() => {
    const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)');
    if (reduceMotion.matches) return;

    const lenis = new Lenis({
      autoRaf: false,
      smoothWheel: true,
      syncTouch: false,
      wheelMultiplier: 0.92,
      lerp: 0.1,
    });

    const unsubscribeFrame = subscribeToFrame((time) => lenis.raf(time));

    const onAnchorClick = (event: MouseEvent) => {
      if (event.defaultPrevented || event.button !== 0 || event.metaKey || event.ctrlKey || event.shiftKey || event.altKey) return;
      const target = event.target instanceof Element ? event.target.closest<HTMLAnchorElement>('a[href^="#"]') : null;
      if (!target) return;
      const hash = target.getAttribute('href');
      const destination = hash ? document.querySelector(hash) : null;
      if (!destination) return;
      event.preventDefault();
      lenis.scrollTo(destination, { duration: 1.05, lock: true });
      window.history.pushState(null, '', hash);
    };

    document.addEventListener('click', onAnchorClick);
    return () => {
      document.removeEventListener('click', onAnchorClick);
      unsubscribeFrame();
      lenis.destroy();
    };
  }, []);
}
