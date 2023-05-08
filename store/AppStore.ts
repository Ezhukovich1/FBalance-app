import AsyncStorage from "@react-native-async-storage/async-storage";
import {create} from "zustand";
import { User } from "../models/User";

const ACCESS_TOKEN_KEY = "@accessToken";
const REFRESH_TOKEN_KEY = "@refreshToken";


interface AppStore {
  isLoggedIn: () => boolean;

  onBeforeStart: () => Promise<void>;

  logout: () => Promise<void>;

  onAppActive: () => Promise<void>;

  onAppBackground: () => Promise<void>;

  accessToken?: string;

  user?: User;

  saveToken: (v: string) => void;
  saveUser: (u: User) => void;

  refreshToken?: string;

  fakeLogin: () => any;
}

export const useAppStore = create<AppStore>((set, get) => ({
  isLoggedIn: () => !!get().accessToken,

  onBeforeStart: async () => {
    set({
      accessToken: (await AsyncStorage.getItem(ACCESS_TOKEN_KEY)) || undefined,
      refreshToken: (await AsyncStorage.getItem(REFRESH_TOKEN_KEY)) || undefined,
    });
  },

  logout: async () => {
    set({
      accessToken: undefined,
      refreshToken: undefined,
    });
    await AsyncStorage.multiRemove([
      ACCESS_TOKEN_KEY,
      REFRESH_TOKEN_KEY,
    ]);
  },

  onAppActive: async () => {
    // 👉 Add stuff that will happen when app became active here, if any
  },

  onAppBackground: async () => {
    // 👉 Add stuff that will happen when app is about to be dismissed to background here, if any
  },

  fakeLogin: () => {
    const accessToken = "fake";
    const refreshToken = "fake";

    set({
      accessToken,
      refreshToken,
    });

    AsyncStorage.multiSet([
      [ACCESS_TOKEN_KEY, accessToken],
      [REFRESH_TOKEN_KEY, refreshToken],
    ]);
  },

  saveToken: (token: string) => {
    set({accessToken: token});

    AsyncStorage.setItem(ACCESS_TOKEN_KEY, token);
  },

  saveUser: (user) => {
    set({user});
  },

  
}));
