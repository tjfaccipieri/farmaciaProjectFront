import { Link, Outlet } from "react-router-dom";

export function AdminLayout() {
  return (
    <div className="flex flex-col">
      <nav className="flex w-full items-center justify-between">
        <h2 className="text-2xl font-semibold">Bem vindo Thiago</h2>
        <div className="space-x-4 text-xl font-semibold">
          <span>Categorias</span>
          <Link to='marcas'>
            <span>Marcas</span>
          </Link>
          <span>Produtos</span>
          <span>Usuários</span>
        </div>
      </nav>
      <div className="mt-8">
        <Outlet />
      </div>
    </div>
  );
}
