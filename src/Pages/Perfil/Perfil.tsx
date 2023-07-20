import { useContext, useEffect, useState } from "react";
import {
  FaCreditCard,
  FaLock,
  FaMapLocationDot,
  FaRegHospital,
  FaUserLarge,
} from "react-icons/fa6";
import { AuthContext } from "../../context/AuthContext";
import { User } from "../../models/User";
import { getWithToken } from "../../service/service";

export function Perfil() {
  const [user, setUser] = useState<User>({} as User);
  const { usuario } = useContext(AuthContext);
  const [isLocked, setIsLocked] = useState(true);
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
          <li className="group flex w-fit cursor-pointer items-center gap-4">
            <FaUserLarge className="text-xl text-teal-600 group-hover:text-teal-800" />
            Dados pessoais
          </li>
          <li className="group flex w-fit cursor-pointer items-center gap-4">
            <FaLock className="text-xl text-teal-600 group-hover:text-teal-800" />
            Alterar senha
          </li>
          <li className="group flex w-fit cursor-pointer items-center gap-4">
            <FaCreditCard className="text-xl text-teal-600 group-hover:text-teal-800" />
            Meus cartões
          </li>
          <li className="group flex w-fit cursor-pointer items-center gap-4">
            <FaMapLocationDot className="text-xl text-teal-600 group-hover:text-teal-800" />
            Meus endereços
          </li>
          <li className="group flex w-fit cursor-pointer items-center gap-4">
            <FaRegHospital className="text-xl text-teal-600 group-hover:text-teal-800" />
            Convênios
          </li>
        </ul>
      </aside>
      <div className="col-span-4 flex flex-col">
        <form className="grid w-full grid-cols-2 gap-4 py-4 px-8">
          <div className="flex flex-col">
            <label htmlFor="nome">Nome:</label>
            <input className="h-10 px-4 text-slate-600 rounded border-teal-800 border-2 outline-teal-600" disabled={isLocked} type="text" name="nome" id="nome" value={user.nome} />
          </div>
          <div className="flex flex-col">
            <label htmlFor="nome">Nome:</label>
            <input className="h-10 px-4 text-slate-600 rounded border-teal-800 border-2 outline-teal-600" disabled={isLocked} type="text" name="nome" id="nome" value={user.nome} />
          </div>
          <div className="flex flex-col">
            <label htmlFor="nome">Nome:</label>
            <input className="h-10 px-4 text-slate-600 rounded border-teal-800 border-2 outline-teal-600" disabled={isLocked} type="text" name="nome" id="nome" value={user.nome} />
          </div>
          <div className="flex flex-col">
            <label htmlFor="nome">Nome:</label>
            <input className="h-10 px-4 text-slate-600 rounded border-teal-800 border-2 outline-teal-600" disabled={isLocked} type="text" name="nome" id="nome" value={user.nome} />
          </div>
          <div className="flex flex-col">
            <label htmlFor="nome">Nome:</label>
            <input className="h-10 px-4 text-slate-600 rounded border-teal-800 border-2 outline-teal-600" disabled={isLocked} type="text" name="nome" id="nome" value={user.nome} />
          </div>
        </form>
          <button type={isLocked ? "button" : "submit"} onClick={isLocked ? () => setIsLocked(false) : () => setIsLocked(true)} className={isLocked ? 'bg-transparent text-teal-800 h-10 w-56 rounded-lg mx-auto border-2 border-teal-800' : "bg-teal-800 text-white h-10 w-56 rounded-lg mx-auto"}>{isLocked ? "Editar" : "Salvar"}</button>
      </div>
    </div>
  );
}
