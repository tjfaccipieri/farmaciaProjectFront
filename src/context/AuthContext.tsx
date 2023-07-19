import { ReactNode, createContext, useState } from "react";
import { UserLogin } from "../models/UserLogin";
import { auth } from "../service/service";

interface AuthProviderProps {
  children: ReactNode;
}

interface AuthContextProps {
  usuario: UserLogin;
  isLoading: boolean;
  handleLogin(user: UserLogin): Promise<void>;
}

export const AuthContext = createContext({} as AuthContextProps);

export function AuthProvider({ children }: AuthProviderProps) {
  const [usuario, setUsuario] = useState<UserLogin>({
    id: 0,
    nome: "",
    senha: "",
    email: "",
    tipo: "",
    token: "",
  });

  const [isLoading, setIsLoading] = useState(false);

  async function handleLogin(userLogin: UserLogin) {
    setIsLoading(true);
    try {
      await auth("/usuarios/logar", userLogin, setUsuario);
      alert("Usuário logado com sucesso!");
      setIsLoading(false);
    } catch (error) {
      // console.log(error.toString());
      if (error.message.includes("401")) {
        alert("Usuário ou senha inválidos!");
        setIsLoading(false);
        return;
      }
      if (error.message.includes("403")) {
        alert("Usuário não cadastrado!");
        setIsLoading(false);
        return;
      }
      alert("Erro interno, por favor tente novamente");
      setIsLoading(false);
    }
  }
  return (
    <AuthContext.Provider value={{ handleLogin, usuario, isLoading }}>
      {children}
    </AuthContext.Provider>
  );
}
