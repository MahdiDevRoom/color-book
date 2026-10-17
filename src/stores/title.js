import { create } from 'zustand';

export default create((set) => ({
  title: null,
  setTitle: (title) => set({ title }),
}));