import { useEffect } from 'react';
import { useLocation } from 'react-router';
import { useLangStore, useTitleStore } from '@/stores';
import { String } from '@/langs';

export default (config) => {
  const { pathname } = useLocation();
  const setTitle = useTitleStore((s) => s.setTitle);
  const lang = useLangStore((s) => s.lang);

  useEffect(() => {
    let title = config[pathname];

    if (!title) {
      const matchedKey = Object.keys(config).find((key)=> key !== '/' && key !== '*' && pathname.startsWith(key));
      if (matchedKey) title = config[matchedKey];
    }

    const finalTitle = title ?? config['*'] ?? '';
    setTitle(String(lang, finalTitle, '[!]'));
  }, [pathname, length]);
}