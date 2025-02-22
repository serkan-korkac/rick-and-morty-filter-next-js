// /app/store/useFilterStore.ts
import {create} from 'zustand';

interface FilterStore {
  status: string;
  gender: string;
  setFilter: (key: 'status' | 'gender', value: string) => void;
}

export const useFilterStore = create<FilterStore>((set) => ({
  status: '',
  gender: '',
  setFilter: (key, value) => set((state) => ({ ...state, [key]: value })),
}));
