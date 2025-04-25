import { createContext, PropsWithChildren, useContext } from "react";

interface AuthState {
    isActive:string
}

export const AuthContext = createContext({} as AuthState);
export const useAuthContext = () => useContext(AuthContext);

export const AuthProvider = ({ children }: PropsWithChildren) => {
    return <AuthContext.Provider value={{isActive:"mundo"}}>{children}</AuthContext.Provider>;
}
      

