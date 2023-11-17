import {
  createContext,
  ReactNode,
  useState,
  useEffect,
  useContext,
} from "react";
import { userLogin, verifyAuthStatus } from "./Requests.js";

type User = {
  name: string;
  email: string;
};
type UserAuth = {
  isLoggedIn: boolean;
  user: User | null;
  login: (email: string, password: string) => Promise<void>;
  signup: (name: string, email: string, password: string) => Promise<void>;
  logout: () => Promise<void>;
};

const AuthContext = createContext<UserAuth | null>(null);

export const AuthProvider = ({ children }: { children: ReactNode }) => {
  const [user, setUSer] = useState<User | null>(null);
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  // verify is user's cookie is valid, then user's login should be persisted.
  useEffect(() => {
    async function AuthStatus() {
      const data = await verifyAuthStatus();
      if (data) {
        setUSer({ name: data.name, email: data.email });
        setIsLoggedIn(true);
      }
    }
    AuthStatus();
  }, []);

  // reducers or state functions
  const login = async (email: string, password: string) => {
    const data = await userLogin(email, password);
    if (data) {
      setUSer({ name: data.name, email: data.email });
      setIsLoggedIn(true);
    }
  };

  const signup = async (name: string, email: string, password: string) => {};

  const logout = async () => {};

  // context value definition

  const value = {
    user,
    isLoggedIn,
    login,
    logout,
    signup,
  };

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};

export const useAuth = () => useContext(AuthContext);
