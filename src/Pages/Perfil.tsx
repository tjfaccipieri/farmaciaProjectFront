import { useContext, useEffect, useState } from "react";
import { User } from "../models/User";
import { basicGet } from "../service/service"
import { AuthContext } from "../context/AuthContext";

export function Perfil(){

  const [user, setUser] = useState<User>({} as User);
  const {usuario} = useContext(AuthContext);
  async function getUserById() {
    await basicGet(`/usuarios/1`, setUser, {
      headers: {
        Authorization: usuario.token
      }
    });
  }

  useEffect(() => {
    getUserById();
  }, [])

  return(
    <h1>{user.nome}</h1>
  )
}