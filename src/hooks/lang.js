import { LANGS } from '@/langs';
import { useLangStore } from '@/stores';
import { useEffect } from 'react';

export default ()=> {
  const lang = useLangStore((s)=> s.lang);
  const { dir } = LANGS[lang];

  useEffect(()=> {
    document.documentElement.lang = lang;
    document.documentElement.dir = dir;
  }, [lang])
}