import { useContext, useEffect, useState } from "react";
import {
  FaCreditCard,
  FaLock,
  FaMapLocationDot,
  FaRegHospital,
  FaUserLarge,
} from "react-icons/fa6";
import { AuthContext } from "../context/AuthContext";
import { User } from "../models/User";
import { getWithToken } from "../service/service";

export function Perfil() {
  const [user, setUser] = useState<User>({} as User);
  const { usuario } = useContext(AuthContext);
  async function getUserById() {
    await getWithToken(`/usuarios/${usuario.id}`, setUser, {
      headers: {
        Authorization: usuario.token,
      },
    });
  }

  useEffect(() => {
    getUserById();
  }, []);

  return (
    <div className="grid grid-cols-5">
      <aside className="flex flex-col gap-8 p-4">
        <div className="flex items-center gap-4 ">
          <div className="flex h-10 w-10 items-end justify-center overflow-hidden rounded-full bg-neutral-300">
            <FaUserLarge className="text-3xl text-teal-600" />
          </div>
          <h3 className="font-semibold text-slate-900">Olá, {user.nome}</h3>
        </div>
        <ul className="flex flex-col gap-6">
          <li className="flex items-center gap-4 group w-fit cursor-pointer">
            <FaUserLarge className="text-teal-600 text-xl group-hover:text-teal-800" />
            Dados pessoais
          </li>
          <li className="flex items-center gap-4 group w-fit cursor-pointer">
            <FaLock className="text-teal-600 text-xl group-hover:text-teal-800" />
            Alterar senha
          </li>
          <li className="flex items-center gap-4 group w-fit cursor-pointer">
            <FaCreditCard className="text-teal-600 text-xl group-hover:text-teal-800" />
            Meus cartões
          </li>
          <li className="flex items-center gap-4 group w-fit cursor-pointer">
            <FaMapLocationDot className="text-teal-600 text-xl group-hover:text-teal-800" />
            Meus endereços
          </li>
          <li className="flex items-center gap-4 group w-fit cursor-pointer">
            <FaRegHospital className="text-teal-600 text-xl group-hover:text-teal-800" />
            Convênios
          </li>
        </ul>
      </aside>
      <div className="col-span-4 flex bg-teal-800"></div>
    </div>
  );
}
