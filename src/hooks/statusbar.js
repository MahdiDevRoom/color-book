import { useEffect } from 'react';

export default (cssVar, theme)=> {
  useEffect(() => {
    if (!cssVar) return;

    const probe = document.createElement('div');
    probe.style.color = `var(${cssVar})`;
    probe.style.display = 'none';
    document.body.appendChild(probe);

    const color = getComputedStyle(probe).color;
    document.body.removeChild(probe);

    if (!color) return;

    let meta = document.querySelector('meta[name="theme-color"]');
    if (!meta) {
      meta = document.createElement('meta');
      meta.setAttribute('name', 'theme-color');
      document.head.appendChild(meta);
    }

    meta.setAttribute('content', color);
  }, [cssVar, theme]);
}