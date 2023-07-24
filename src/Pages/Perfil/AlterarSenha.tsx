import { useEffect, useState } from "react";
import { useOutletContext } from "react-router-dom";
import { User } from "../../models/User";

export function AlterarSenha() {
  const [confirmarSenha, setConfirmarSenha] = useState("");

  const user: User = useOutletContext();

  console.log(user);

  return (
    <div>
      <form className="mx-auto flex w-1/2 flex-col gap-4 px-8 py-4">
        <div className="flex flex-col">
          <label htmlFor="senha">Senha:</label>
          <input
            className="h-10 rounded border-2 border-teal-800 px-4 text-slate-600 outline-teal-600"
            type="text"
            name="senha"
            id="senha"
            value={user.senha}
          />
        </div>
        <div className="flex flex-col">
          <label htmlFor="confirmarsenha">Confirmar senha:</label>
          <input
            className="h-10 rounded border-2 border-teal-800 px-4 text-slate-600 outline-teal-600"
            type="password"
            name="confirmarSenha"
            id="confirmarsenha"
            onChange={(event) => setConfirmarSenha(event.target.value)}
          />
        </div>
        <button className="h-10 rounded border-2 border-teal-800 px-4 transition-colors duration-200 hover:bg-teal-800 hover:text-white">
          Alterar Senha
        </button>
      </form>
    </div>
  );
}
