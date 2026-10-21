import { useEffect, useLayoutEffect, useState } from 'react';
import { useThemeStore } from '@/stores';

export default ()=> {
  const theme = useThemeStore((s)=> s.theme);

  const getSysTheme = ()=> {
    if (typeof window == 'undefined') return null;
    return window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
  }

  const [sysTheme, setSysTheme] = useState(getSysTheme);
  const resolvedTheme = theme === 'auto' ? sysTheme : theme;
  
  let link = document.querySelector('link[rel="icon"]');
  if (!link) {
    link = document.createElement('link');
    link.setAttribute('rel', 'icon');
    link.setAttribute('type', 'image/svg+xml');
    document.head.appendChild(link);
  }

  link.setAttribute('href', `favicon.${sysTheme}.svg`);

  useEffect(()=> {
    if (typeof window == 'undefined') return;

    const mql = window.matchMedia('(prefers-color-scheme: dark)');
    const handler = (e)=> setSysTheme(e.matches ? 'dark' : 'light');

    mql.addEventListener('change', handler);

    return ()=> mql.removeEventListener('change', handler);
  }, []);

  useLayoutEffect(() => {
    document.documentElement.setAttribute('data-theme', resolvedTheme);
  }, [resolvedTheme]);

  useLayoutEffect(() => {
    const root = document.documentElement;
    root.classList.add("freeze");

    const id = requestAnimationFrame(() => requestAnimationFrame(() => root.classList.remove("freeze")));
    
    return () => { cancelAnimationFrame(id); root.classList.remove("freeze") };
  }, [resolvedTheme]);

  return resolvedTheme;
}