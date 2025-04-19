
import { create } from 'zustand';
import { Breed, Cat } from '@/types/cat';

interface CatState {
  cats: Cat[];
  breeds: Breed[];
  selectedBreed: string | null;
  selectedCat: Cat | null;
  isLoading: boolean;
  setSelectedBreed: (breedId: string | null) => void;
  setSelectedCat: (cat: Cat | null) => void;
  setCats: (cats: Cat[]) => void;
  setBreeds: (breeds: Breed[]) => void;
  setIsLoading: (isLoading: boolean) => void;
}

const useCatStore = create<CatState>((set) => ({
  cats: [],
  breeds: [],
  selectedBreed: null,
  selectedCat: null,
  isLoading: false,
  setSelectedBreed: (breedId) => set({ selectedBreed: breedId }),
  setSelectedCat: (cat) => set({ selectedCat: cat }),
  setCats: (cats) => set({ cats }),
  setBreeds: (breeds) => set({ breeds }),
  setIsLoading: (isLoading) => set({ isLoading }),
}));

export default useCatStore;
