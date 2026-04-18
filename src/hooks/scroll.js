import { useCallback, useEffect, useState } from 'react';

export function useScroll() {
  const [scrollY, setScrollY] = useState(0);
  useEffect(() => {
    let raf;
    const onScroll = () => {
      if (raf) return;
      raf = requestAnimationFrame(() => {
        setScrollY(window.scrollY);
        raf = null;
      });
    };
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);
  return { scrollY };
}

export function useReveal() {
  useEffect(() => {
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) e.target.classList.add('in');
        });
      },
      { threshold: 0.12, rootMargin: '0px 0px -60px 0px' }
    );
    document.querySelectorAll('.reveal').forEach((el) => io.observe(el));
    return () => io.disconnect();
  }, []);
}

export function useActivePage() {
  const [active, setActive] = useState(0);
  useEffect(() => {
    const sections = Array.from(document.querySelectorAll('[data-page]'));
    const onScroll = () => {
      const y = window.scrollY + window.innerHeight * 0.35;
      let idx = 0;
      sections.forEach((s, i) => {
        if (s.offsetTop <= y) idx = i;
      });
      setActive(idx);
    };
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);
  return active;
}

// Chapters that are NEVER collapsible — always fully visible.
const NON_COLLAPSIBLE = new Set(['hem', 'kontakt']);

// One open at a time. Returns { openChapter } to wire to nav clicks.
// Also wires header clicks (any .page__head inside a [data-page]) to toggle.
export function useCollapsibleChapters() {
  const [openId, setOpenId] = useState(null);

  // Apply is-collapsible / is-open classes to every chapter
  useEffect(() => {
    document.querySelectorAll('[data-page]').forEach((el) => {
      const id = el.getAttribute('data-page');
      if (NON_COLLAPSIBLE.has(id)) {
        el.classList.add('is-open');
        el.classList.remove('is-collapsible');
        return;
      }
      el.classList.add('is-collapsible');
      el.classList.toggle('is-open', openId === id);
    });
  }, [openId]);

  // Click a header → toggle that chapter
  useEffect(() => {
    const onClick = (e) => {
      const head = e.target.closest('.page__head');
      if (!head) return;
      const page = head.closest('[data-page]');
      if (!page) return;
      const id = page.getAttribute('data-page');
      if (NON_COLLAPSIBLE.has(id)) return;
      setOpenId((prev) => (prev === id ? null : id));
      setTimeout(() => {
        page.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }, 50);
    };
    document.addEventListener('click', onClick);
    return () => document.removeEventListener('click', onClick);
  }, []);

  const openChapter = useCallback((id) => {
    if (NON_COLLAPSIBLE.has(id)) {
      document.querySelector(`[data-page="${id}"]`)?.scrollIntoView({ behavior: 'smooth' });
      return;
    }
    setOpenId(id);
    setTimeout(() => {
      document.querySelector(`[data-page="${id}"]`)?.scrollIntoView({ behavior: 'smooth' });
    }, 50);
  }, []);

  return { openChapter, openId };
}
