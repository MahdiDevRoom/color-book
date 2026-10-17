import { create } from 'zustand';
import { persist } from 'zustand/middleware';

export default create(
  persist(
    (set) => ({
      lang: 'en',
      setLang: (lang) => set({ lang }),
    }), {
    name: 'chromango-lang',
  }
  )
);