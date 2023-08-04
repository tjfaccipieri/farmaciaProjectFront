import { useContext, useEffect } from "react";
import { Link, Outlet } from "react-router-dom";
import { AuthContext } from "../../context/AuthContext";

export function AdminLayout() {
  const { usuario } = useContext(AuthContext);

  const addr = window.location.href;

  console.log(addr);

  useEffect(() => {
    if (usuario.tipo !== "admin") {
      alert("Você não tem permissão para acessar essa página");
    }
  }, []);
  return (
    <div className="flex flex-col">
      <nav className="flex w-full items-center justify-between">
        <h2 className="text-2xl font-semibold">Bem vindo Thiago</h2>
        <div className="space-x-4 text-xl font-semibold">
          <Link to="categorias">
            <span>Categorias</span>
          </Link>
          <Link to="marcas">
            <span>Marcas</span>
          </Link>
          <Link to="produtos">
            <span>Produtos</span>
          </Link>
          <Link to="usuarios">
            <span>Usuários</span>
          </Link>
        </div>
      </nav>
      <div className="mt-8">
        <Outlet />
      </div>
    </div>
  );
}
