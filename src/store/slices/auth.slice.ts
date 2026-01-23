import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface User {
  id: string;
  email: string;
  name: string;
  avatar: string;
}

interface AuthState {
  user: User | null;
  isAuthenticated: boolean;
  token: string | null;
}

const loadAuthState = (): AuthState => {
  if (typeof window === 'undefined') {
    return {
      user: null,
      isAuthenticated: false,
      token: null,
    };
  }
  
  try {
    const storedState = localStorage.getItem('authState');
    if (storedState) {
      return JSON.parse(storedState);
    }
  } catch (error) {
    console.error('Error loading auth state from localStorage:', error);
  }
  
  return {
    user: null,
    isAuthenticated: false,
    token: null,
  };
};

const saveAuthState = (state: AuthState) => {
  try {
    localStorage.setItem('authState', JSON.stringify(state));
  } catch (error) {
    console.error('Error saving auth state to localStorage:', error);
  }
};

const clearAuthState = () => {
  try {
    localStorage.removeItem('authState');
  } catch (error) {
    console.error('Error clearing auth state from localStorage:', error);
  }
};

const initialState: AuthState = loadAuthState();

export const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    login: (state, action: PayloadAction<{ user: User; token: string }>) => {
      state.user = action.payload.user;
      state.isAuthenticated = true;
      state.token = action.payload.token;
      saveAuthState(state);
    },
    logout: (state) => {
      state.user = null;
      state.token = null;
      state.isAuthenticated = false;
      clearAuthState();
    },
    updateUser: (state, action: PayloadAction<Partial<User>>) => {
      if (state.user) {
        state.user = { ...state.user, ...action.payload };
        saveAuthState(state);
      }
    },
    initializeAuth: (state) => {
      const storedState = loadAuthState();
      state.user = storedState.user;
      state.isAuthenticated = storedState.isAuthenticated;
      state.token = storedState.token;
    },
  },
});

export const { login, logout, updateUser, initializeAuth } = authSlice.actions;
export default authSlice.reducer;