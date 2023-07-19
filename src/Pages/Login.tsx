import { ChangeEvent, useContext, useEffect, useState } from "react";
import {
  FaArrowRightFromBracket,
  FaEnvelope,
  FaLock,
  FaRotateRight,
} from "react-icons/fa6";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../context/AuthContext";
import { UserLogin } from "../models/UserLogin";

export function Login() {
  const navigate = useNavigate();

  const [user, setUser] = useState<UserLogin>({} as UserLogin);

  const { usuario, handleLogin, isLoading } = useContext(AuthContext);

  function handleUserLogin(event: ChangeEvent<HTMLInputElement>) {
    setUser({
      ...user,
      [event.target.name]: event.target.value,
    });
  }

  function handleSubmit(event: ChangeEvent<HTMLFormElement>) {
    event.preventDefault();
    handleLogin(user);
  }

  useEffect(() => {
    if(usuario.token !== '') {
      navigate('/');
    }
  }, [usuario]);

  return (
    <div className="m-auto flex max-w-2xl flex-col gap-4">
      <form className="flex w-full flex-col gap-4" onSubmit={handleSubmit}>
        <h2 className="text-center text-2xl font-bold text-gray-600">Entrar</h2>
        <div className="flex flex-col gap-1">
          <label
            htmlFor="email"
            className="flex items-center gap-2 font-bold text-teal-600"
          >
            E-mail <FaEnvelope />
          </label>
          <input
            type="text"
            placeholder="email@email.com.br"
            className="h-10 rounded-lg border px-3 shadow outline-teal-800"
            id="email"
            name="email"
            autoComplete="email"
            onChange={(event) => handleUserLogin(event)}
          />
        </div>
        <div className="flex flex-col gap-1">
          <label
            htmlFor="senha"
            className="flex items-center gap-2 font-bold text-teal-600"
          >
            Senha <FaLock />
          </label>
          <input
            type="password"
            placeholder="********"
            className="h-10 rounded-lg border px-3 shadow outline-teal-800"
            id="senha"
            name="senha"
            autoComplete="current-password"
            onChange={(event) => handleUserLogin(event)}
          />
        </div>
        <button className="mx-auto flex w-3/4 items-center justify-center gap-2 rounded-full bg-teal-600 py-2 text-white">
          <span>Entrar</span>
          {isLoading ? (
            <FaRotateRight className="animate-spin" />
          ) : (
            <FaArrowRightFromBracket />
          )}
        </button>
      </form>

      <hr />

      <p className="text-center text-gray-600">
        Não tem uma conta ainda?{" "}
        <Link to="/cadastro" className="font-semibold">
          Cadastre-se
        </Link>{" "}
      </p>
    </div>
  );
}
