import React, { createContext, useState, useEffect, useContext } from "react";
import { useHistory } from "react-router";
import * as auth from "../services/auth";

interface User {
  nome: string;
  login: string;
  senha: string;
  admin:boolean;
}

interface RequestSignIn {
  login: string;
  senha: string;
}

interface AuthContextData {
  signed: boolean;
  user: User | null;
  loading: boolean;
  signIn({ login, senha }: RequestSignIn): Promise<void>;
  signOut(): void;
}

const AuthContext = createContext<AuthContextData>({} as AuthContextData);

const AuthProvider: React.FC = ({ children }) => {
  const [user, setUser] = useState<User | null>(null);
  const [loading, setLoading] = useState(false);
  const history = useHistory();

  async function signIn({ login, senha }: RequestSignIn) {
    setLoading(true);
    const response = await auth.signIn({ login, senha });
    
    setUser(response.user);
    if(response){
      history.push("/pages/home");
    }
    setLoading(false);

  }
  async function signOut() {
    setUser(null);
  }
  return (
    <AuthContext.Provider
      value={{ signed: !!user, user, loading, signIn, signOut }}
    >
      {children}
    </AuthContext.Provider>
  );
};

function useAuth() {
  const context = useContext(AuthContext);

  if (!context) {
    throw new Error("useAuth must be used within an AuthProvider.");
  }

  return context;
}

export { AuthProvider, useAuth };
