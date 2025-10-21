// src/store/useAuthStore.ts
import { create } from "zustand";
import * as SecureStore from 'expo-secure-store';
import { User } from '@/src/types/User';

type AuthState = {
  token: string | null;
  user: User | null;
  setToken: (token: string | null) => void;
  setUser: (user: User | null) => void;
  logout: () => void;
};

const saveToken = async (token: string | null) => {
  if (token) {
    await SecureStore.setItemAsync('userToken', token);
  } else {
    await SecureStore.deleteItemAsync('userToken');
  }
};

export const useAuthStore = create<AuthState>((set) => ({
  token: null,
  user: null,

  setToken: (token: any) => {
    saveToken(token); 
    set({ token });
  },
  setUser: (user) => set({ user }),

  logout: () => {
    saveToken(null);
    set({ token: null, user: null });
  },
}));