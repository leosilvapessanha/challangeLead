import { createContext, useCallback, useContext, useState } from 'react';
import api from '../services/api';

interface UserProps {
  id: string;
  mail: string;
  password: string;
}

interface SignCredentials {
  email: string;
  password: string;
}

interface AuthState {
  token: string;
  // eslint-disable-next-line @typescript-eslint/ban-types
  allowedFields: UserProps;
}

interface AuthContextProps {
  // eslint-disable-next-line @typescript-eslint/ban-types
  allowedFields: UserProps;
  signIn(credentials: SignCredentials): Promise<void>;
  logOut(): void;
}

export const AuthContext = createContext<AuthContextProps>(
  {} as AuthContextProps,
);

export const AuthProvider: React.FC = ({ children }) => {
  const [data, setData] = useState<AuthState>(() => {
    const token = localStorage.getItem('@lead:token');
    const allowedFields = localStorage.getItem('@lead:email');

    if (token && allowedFields) {
      return { token, allowedFields: JSON.parse(allowedFields) };
    }

    return {} as AuthState;
  });

  const signIn = useCallback(async ({ email, password }) => {
    const response = await api.post('/sessions', {
      email,
      password,
    });
    const { token, allowedFields } = response.data;

    localStorage.setItem('@lead:token', token);
    localStorage.setItem('@lead:user', JSON.stringify(allowedFields));

    setData({ token, allowedFields });
  }, []);

  const logOut = useCallback(() => {
    localStorage.RemoveItem('@lead:token');
    localStorage.RemoveItem('@lead:user');
    setData({} as AuthState);
  }, []);

  return (
    // eslint-disable-next-line react/react-in-jsx-scope
    <AuthContext.Provider
      value={{ allowedFields: data.allowedFields, signIn, logOut }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export function useAuth(): AuthContextProps {
  const context = useContext(AuthContext);

  if (!context) {
    throw new Error('useAuth não deve funcionar sem AuthContext');
  }
  return context;
}
