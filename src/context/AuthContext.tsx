import React, { createContext, useContext, useReducer, useEffect } from 'react';
import { AuthState, User, UserRole } from '../types';
import { users } from '../data/mockData';

// Initial auth state
const initialState: AuthState = {
  user: null,
  token: localStorage.getItem('token'),
  isAuthenticated: false,
  isLoading: true,
  error: null,
};

// Auth action types
type AuthAction =
  | { type: 'LOGIN_SUCCESS'; payload: { user: User; token: string } }
  | { type: 'LOGIN_FAILURE'; payload: string }
  | { type: 'REGISTER_SUCCESS'; payload: { user: User; token: string } }
  | { type: 'REGISTER_FAILURE'; payload: string }
  | { type: 'LOGOUT' }
  | { type: 'CLEAR_ERROR' };

// Auth reducer
const authReducer = (state: AuthState, action: AuthAction): AuthState => {
  switch (action.type) {
    case 'LOGIN_SUCCESS':
    case 'REGISTER_SUCCESS':
      localStorage.setItem('token', action.payload.token);
      return {
        ...state,
        user: action.payload.user,
        token: action.payload.token,
        isAuthenticated: true,
        isLoading: false,
        error: null,
      };
    case 'LOGIN_FAILURE':
    case 'REGISTER_FAILURE':
      localStorage.removeItem('token');
      return {
        ...state,
        user: null,
        token: null,
        isAuthenticated: false,
        isLoading: false,
        error: action.payload,
      };
    case 'LOGOUT':
      localStorage.removeItem('token');
      return {
        ...state,
        user: null,
        token: null,
        isAuthenticated: false,
        isLoading: false,
        error: null,
      };
    case 'CLEAR_ERROR':
      return {
        ...state,
        error: null,
      };
    default:
      return state;
  }
};

// Auth context
interface AuthContextType extends AuthState {
  login: (email: string, password: string) => Promise<void>;
  register: (name: string, email: string, password: string, role: UserRole) => Promise<void>;
  logout: () => void;
  clearError: () => void;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

// Auth provider
export const AuthProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [state, dispatch] = useReducer(authReducer, initialState);

  // Check if user is logged in
  useEffect(() => {
    const token = localStorage.getItem('token');
    
    if (token) {
      // Simulate fetching user data
      // In a real app, you would verify the token with your backend
      setTimeout(() => {
        const user = users[0]; // Default to first user for demo
        dispatch({
          type: 'LOGIN_SUCCESS',
          payload: { user, token },
        });
      }, 1000);
    } else {
      dispatch({
        type: 'LOGIN_FAILURE',
        payload: 'Not authenticated',
      });
    }
  }, []);

  // Login function
  const login = async (email: string, password: string) => {
    try {
      // Simulate API call to login
      // In a real app, you would make an API request to your backend
      
      // For demo purposes, we'll just check the email
      const user = users.find(user => user.email === email);
      
      if (user && password === 'password') {
        const token = 'mock-jwt-token';
        dispatch({
          type: 'LOGIN_SUCCESS',
          payload: { user, token },
        });
      } else {
        dispatch({
          type: 'LOGIN_FAILURE',
          payload: 'Invalid credentials',
        });
      }
    } catch (error) {
      dispatch({
        type: 'LOGIN_FAILURE',
        payload: 'Failed to login',
      });
    }
  };

  // Register function
  const register = async (name: string, email: string, password: string, role: UserRole) => {
    try {
      // Simulate API call to register
      // In a real app, you would make an API request to your backend
      
      // Check if email is already registered
      const userExists = users.some(user => user.email === email);
      
      if (userExists) {
        dispatch({
          type: 'REGISTER_FAILURE',
          payload: 'Email already registered',
        });
        return;
      }
      
      // Create a new user
      const newUser: User = {
        id: (users.length + 1).toString(),
        name,
        email,
        role,
      };
      
      // Add user to mock data (in a real app, this would be handled by your backend)
      users.push(newUser);
      
      const token = 'mock-jwt-token';
      dispatch({
        type: 'REGISTER_SUCCESS',
        payload: { user: newUser, token },
      });
    } catch (error) {
      dispatch({
        type: 'REGISTER_FAILURE',
        payload: 'Failed to register',
      });
    }
  };

  // Logout function
  const logout = () => {
    dispatch({ type: 'LOGOUT' });
  };

  // Clear error function
  const clearError = () => {
    dispatch({ type: 'CLEAR_ERROR' });
  };

  return (
    <AuthContext.Provider
      value={{
        ...state,
        login,
        register,
        logout,
        clearError,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

// Custom hook to use auth context
export const useAuth = () => {
  const context = useContext(AuthContext);
  if (context === undefined) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
};