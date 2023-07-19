import { ChangeEvent, useEffect, useState } from "react";
import {
  FaArrowRightFromBracket,
  FaEnvelope,
  FaLock,
  FaUserLarge,
} from "react-icons/fa6";
import { Link } from "react-router-dom";
import { User } from "../models/User";
import { auth } from "../service/service";

export function Cadastro() {
  const [user, setUser] = useState<User>({} as User);
  const [confirmarSenha, setConfirmarSenha] = useState("");
  const [isFormValid, setIsFormValid] = useState(false);

  function handleUpdateForm(event: ChangeEvent<HTMLInputElement>) {
    setUser({
      ...user,
      [event.target.name]: event.target.value,
    });
  }

  function handleConfirmSenha(event: ChangeEvent<HTMLInputElement>) {
    setConfirmarSenha(event.target.value);
  }

  useEffect(() => {
    if (
      user.nome !== "" &&
      user.email !== "" &&
      user.senha !== "" &&
      confirmarSenha !== ""
    ) {
      setIsFormValid(true);
    } else {
      setIsFormValid(false);
    }
  }, [user.nome, user.email, user.senha, confirmarSenha]);

  async function handleSubmit(event: ChangeEvent<HTMLFormElement>) {
    event.preventDefault();
    console.log(user);
    if (user.senha === confirmarSenha) {
      try {
        await auth("/usuarios/cadastrar", user, setUser);
        alert("Usuário cadastrado com sucesso!");
      } catch (error) {
        console.log(error);
      }
    } else {
      alert("As senhas não conferem");
    }
  }

  return (
    <div className="m-auto flex max-w-2xl  flex-col gap-4">
      <form className="flex w-full flex-col gap-4" onSubmit={handleSubmit}>
        <h2 className="text-center text-2xl font-bold text-gray-600">
          Cadastrar
        </h2>
        <div className="flex flex-col gap-1">
          <label
            htmlFor="nome"
            className="flex items-center gap-2 font-bold text-teal-600"
          >
            <FaUserLarge /> Nome completo
          </label>
          <input
            type="text"
            placeholder="Nome Sobrenome"
            className="h-10 rounded-lg border px-3 shadow outline-teal-800"
            id="nome"
            name="nome"
            onChange={(event) => handleUpdateForm(event)}
          />
        </div>
        <div className="flex flex-col gap-1">
          <label
            htmlFor="email"
            className="flex items-center gap-2 font-bold text-teal-600"
          >
            <FaEnvelope /> E-mail
          </label>
          <input
            type="text"
            placeholder="email@email.com.br"
            className="h-10 rounded-lg border px-3 shadow outline-teal-800"
            id="email"
            name="email"
            onChange={(event) => handleUpdateForm(event)}
          />
        </div>
        <div className="flex flex-col gap-1">
          <label
            htmlFor="senha"
            className="flex items-center gap-2 font-bold text-teal-600"
          >
            <FaLock /> Senha
          </label>
          <input
            type="password"
            placeholder="********"
            className="h-10 rounded-lg border px-3 shadow outline-teal-800"
            id="senha"
            name="senha"
            onChange={(event) => handleUpdateForm(event)}
          />
        </div>
        <div className="flex flex-col gap-1">
          <label
            htmlFor="confirmarsenha"
            className="flex items-center gap-2 font-bold text-teal-600"
          >
            <FaLock /> Confirmar senha
          </label>
          <input
            type="password"
            placeholder="********"
            className="h-10 rounded-lg border px-3 shadow outline-teal-800"
            id="confirmarsenha"
            name="confirmarsenha"
            onChange={(event) => handleConfirmSenha(event)}
          />
        </div>
        <button
          disabled={!isFormValid}
          className="mx-auto flex w-3/4 items-center justify-center gap-2 rounded-full bg-teal-600 py-2 text-white disabled:bg-teal-600/40"
        >
          <span>Cadastrar</span>
          <FaArrowRightFromBracket />
        </button>
      </form>

      <hr />

      <p className="text-center text-gray-600">
        Já tenho uma conta.{" "}
        <Link to="/login" className="font-semibold">
          Entrar
        </Link>{" "}
      </p>
    </div>
  );
}
