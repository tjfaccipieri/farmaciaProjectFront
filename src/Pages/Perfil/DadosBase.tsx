import { useOutletContext } from "react-router-dom";
import { User } from "../../models/User";
import { ChangeEvent } from "react";

export function DadosBase() {
  const {user, setUser} = useOutletContext();

  function handleUpdateForm(event: ChangeEvent<HTMLInputElement>) {
    setUser({
      ...user,
      [event.target.name]: event.target.value,
    });
  }

  return (
    <>
      <form className="mx-auto flex w-1/2 flex-col gap-4 px-8 py-4">
        <div className="flex flex-col">
          <label htmlFor="nome">Nome:</label>
          <input
            className="h-10 rounded border-2 border-teal-800 px-4 text-slate-600 outline-teal-600"
            type="text"
            name="nome"
            id="nome"
            value={user.nome}
            onChange={(event) => handleUpdateForm(event)}
          />
        </div>
        <div className="flex flex-col">
          <label htmlFor="nome">E-mail:</label>
          <input
            className="h-10 rounded border-2 border-teal-800 px-4 text-slate-600 outline-teal-600"
            type="text"
            name="email"
            id="nome"
            value={user.email}
            disabled
          />
        </div>
        <div className="flex flex-col">
          <label htmlFor="cpf">CPF:</label>
          <input
            className="h-10 rounded border-2 border-teal-800 px-4 text-slate-600 outline-teal-600"
            type="text"
            name="cpf"
            id="cpf"
            value={user.cpf}
            onChange={(event) => handleUpdateForm(event)}
          />
        </div>
        <div className="flex flex-col">
          <label htmlFor="contato1">Contato 1:</label>
          <input
            className="h-10 rounded border-2 border-teal-800 px-4 text-slate-600 outline-teal-600"
            type="text"
            name="contato1"
            id="contato1"
            value={user.contato1}
            onChange={(event) => handleUpdateForm(event)}
          />
        </div>
        <div className="flex flex-col">
          <label htmlFor="contato2">Contato 2:</label>
          <input
            className="h-10 rounded border-2 border-teal-800 px-4 text-slate-600 outline-teal-600"
            type="text"
            name="contato2"
            id="contato2"
            value={user.contato2}
            onChange={(event) => handleUpdateForm(event)}
          />
        </div>
        <div className="flex flex-col">
          <label htmlFor="dataNascimento">Data de nascimento:</label>
          <input
            className="h-10 rounded border-2 border-teal-800 px-4 text-slate-600 outline-teal-600"
            type="date"
            name="dataNascimento"
            id="dataNascimento"
            value={user.dataNascimento}
            onChange={(event) => handleUpdateForm(event)}
          />
        </div>
        <div className="flex gap-4">
          <button
            type="submit"
            className="mx-auto h-10 w-full rounded-lg border-2 border-red-800 hover:bg-red-800 hover:text-white duration-200 transition-colors bg-transparent text-red-800"
          >
            Cancelar
          </button>
          <button
            type="submit"
            className="mx-auto h-10 w-full rounded-lg border-2 border-teal-800 hover:bg-teal-800 hover:text-white duration-200 transition-colors bg-transparent text-teal-800"
          >
            Alterar dados
          </button>
        </div>
      </form>
    </>
  );
}
