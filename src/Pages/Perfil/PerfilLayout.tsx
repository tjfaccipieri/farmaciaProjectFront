import { useContext, useEffect, useState } from "react";
import {
  FaCreditCard,
  FaLock,
  FaMapLocationDot,
  FaRegHospital,
  FaUserLarge,
  FaJediOrder
} from "react-icons/fa6";
import { Link, Outlet } from "react-router-dom";
import { AuthContext } from "../../context/AuthContext";
import { User } from "../../models/User";
import { getWithToken } from "../../service/service";

export function PerfilLayout() {
  const [user, setUser] = useState<User>({} as User);
  const { usuario } = useContext(AuthContext);
  async function getUserById() {
    try {
      await getWithToken(`/usuarios/${usuario.id}`, setUser, {
        headers: {
          Authorization: usuario.token,
        },
      });

    } catch (error) {
      console.log(error);
    }
  }

  useEffect(() => {
    // eslint-disable-next-line @typescript-eslint/no-floating-promises
    getUserById()
  }, []);

  return (
    <div className="grid grid-cols-5">
      <aside className="flex flex-col gap-8 p-4">
        <div className="flex items-center gap-4 ">
          <div className="flex h-10 w-10 items-end justify-center overflow-hidden rounded-full bg-neutral-300">
            <FaUserLarge className="text-3xl text-teal-600" />
          </div>
          <h3 className="font-semibold text-slate-900">Olá, {usuario.nome}</h3>
        </div>
        <ul className="flex flex-col gap-6">
          <Link to="">
            <li className="group flex w-fit cursor-pointer items-center gap-4">
              <FaUserLarge className="text-xl text-teal-600 group-hover:text-teal-800" />
              Dados pessoais
            </li>
          </Link>
         <Link to='alterarsenha'>
         <li className="group flex w-fit cursor-pointer items-center gap-4">
            <FaLock className="text-xl text-teal-600 group-hover:text-teal-800" />
            Alterar senha
          </li>
         </Link>
          <Link to='cartoes'>
            <li className="group flex w-fit cursor-pointer items-center gap-4">
              <FaCreditCard className="text-xl text-teal-600 group-hover:text-teal-800" />
              Meus cartões
            </li>
          </Link>
          <li className="group flex w-fit cursor-pointer items-center gap-4">
            <FaMapLocationDot className="text-xl text-teal-600 group-hover:text-teal-800" />
            Meus endereços
          </li>
          <li className="group flex w-fit cursor-pointer items-center gap-4">
            <FaRegHospital className="text-xl text-teal-600 group-hover:text-teal-800" />
            Convênios
          </li>
          {usuario.tipo === 'admin' && (
            <Link to='/adminPage'>
              <li className="group flex w-fit cursor-pointer items-center gap-4">
                <FaJediOrder className="text-xl text-teal-600 group-hover:text-teal-800" />
                Área Administrativa
              </li>
            </Link>
          )}
        </ul>
      </aside>
      <div className="col-span-4 flex flex-col">
        <Outlet context={[user, setUser]} />
      </div>
    </div>
  );
}
