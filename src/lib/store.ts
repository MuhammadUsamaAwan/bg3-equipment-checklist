import { create } from 'zustand';
import { persist } from 'zustand/middleware';

type StoreState = {
  completed: string[];
  toggleCompleted: (name: string) => void;
  isCompleted: (name: string) => boolean;
  hideCompleted: boolean;
  toggleHideCompleted: () => void;
};

export const useStore = create<StoreState>()(
  persist(
    (set, get) => ({
      completed: [],
      toggleCompleted: (name: string) =>
        set(state => ({
          completed: state.completed.includes(name)
            ? state.completed.filter(n => n !== name)
            : [...state.completed, name],
        })),
      isCompleted: (name: string) => get().completed.includes(name),
      hideCompleted: false,
      toggleHideCompleted: () => set(state => ({ hideCompleted: !state.hideCompleted })),
    }),
    {
      name: 'store',
    }
  )
);
