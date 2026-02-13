import { create } from 'zustand';

interface PromtStore {
  results: string;
  prompt: string;
  setResults: (results: string) => void;
  setPrompt: (prompt: string) => void;
}

const usePromptStore = create<PromtStore>((set) => ({
  results: '',
  prompt: '',

  setResults: (results: string) => set(() => ({ results: results})),
  setPrompt: (prompt: string) => set(() => ({prompt: prompt })),
}));
