import React, { createContext, useState, useEffect, useContext } from "react";
import { useHistory } from "react-router";
import * as auth from "../services/auth";



interface request {
 
}

interface StateContextData {
  signed: boolean;
  loading: boolean;
  signIn({ login, senha }:any): Promise<void>;
  signOut(): void;
}

const StateContext = createContext<StateContextData>({} as StateContextData);

const StateProvider: React.FC = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(false);
  const history = useHistory();

  async function signIn({ login, senha }: any) {
    setLoading(true);
    const response = await auth.signIn({ login, senha });
    if(response){
      history.push("/pages/home");
    }
    setLoading(false);
  }
  async function signOut() {
    setUser(null);
  }
  return (
    <StateContext.Provider
      value={{ signed: !!user, loading, signIn, signOut }}
    >
      {children}
    </StateContext.Provider>
  );
};

function useAuthh() {
  const context = useContext(StateContext);

  if (!context) {
    throw new Error("useAuth must be used within an AuthProvider.");
  }

  return context;
}

export { StateProvider, useAuthh };
