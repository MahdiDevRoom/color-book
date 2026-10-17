import en from './en.json';
import ko from './ko.json';
import fa from './fa.json';

export const DATA = { en, ko, fa };

export const LANGS = {
  fa: { label: 'فارسی', dir: 'rtl' },
  en: { label: 'English', dir: 'ltr' },
  ko: { label: '한국어', dir: 'ltr' },
}

export const String = (lang, label, callbak = undefined)=> {
  const value = DATA[lang][label];
  return value === undefined ? value : callbak;
}