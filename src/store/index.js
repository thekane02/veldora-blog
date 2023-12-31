import { create } from "zustand";

export const useAuthStore = create((set) => ({
  user: null,
  setCurrentUser: (currentUser) => set({ user: currentUser }),
}));
