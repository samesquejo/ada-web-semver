// LIBRARIES
import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import useCookieHook from "@/hooks/useCookieHook";

const { setCookie, deleteCookie } = useCookieHook();

interface AuthState {
  token: string | null;
  isAuthenticated: Boolean | null;
  role: string | null;
}

const initialState: AuthState = {
  token: null,
  isAuthenticated: null,
  role: null,
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    setToken: (state, action: PayloadAction<string>) => {
      state.token = action.payload;
      // "at" cookie name for access token
      setCookie("at", action.payload);
    },
    setIsAuthenticated: (state, action: PayloadAction<Boolean>) => {
      state.isAuthenticated = action.payload;
    },
    setRole: (state, action: PayloadAction<string>) => {
      state.role = action.payload;
    },
    clearAuth: (state) => {
      state.token = null;
      state.role = null;
      state.isAuthenticated = false;

      deleteCookie("at");
    },
  },
});

export const { setToken, setIsAuthenticated, setRole, clearAuth } = authSlice.actions;
export default authSlice.reducer;
