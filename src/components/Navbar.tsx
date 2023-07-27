import {
  FaBars,
  FaBasketShopping,
  FaMagnifyingGlass,
  FaUserLarge,
} from "react-icons/fa6";
import { Link } from "react-router-dom";
import logo from "../assets/Logotipo Colorido.png";
import { useContext } from "react";
import { AuthContext } from "../context/AuthContext";
import { talert } from "../utils/alert";

export function Navbar() {
  const categorias = [
    {
      id: 1,
      name: "medicamentos",
      link: "medicamentos",
    },
    {
      id: 2,
      name: "genéricos",
      link: "genericos",
    },
    {
      id: 3,
      name: "dermocosméticos",
      link: "dermocosmeticos",
    },
    {
      id: 4,
      name: "perfumaria",
      link: "perfumaria",
    },
    {
      id: 5,
      name: "promoções",
      link: "promocoes",
    },
  ];

  const {usuario} = useContext(AuthContext);

  return (
    <>
      <nav className=" py-4">
        <div className="container mx-auto flex items-center justify-between ">
          <Link to="/">
            <img className="h-12" src={logo} alt="logotipo" />
          </Link>
          <div className="flex h-12 w-2/4 items-center rounded-full bg-gray-200 px-4">
            <input
              className="h-10 w-full bg-transparent outline-none"
              type="text"
              id="searchbar"
              placeholder="Pesquise seu item aqui..."
            />
            <label htmlFor="searchbar">
              <FaMagnifyingGlass className="text-xl text-neutral-700" />
            </label>
          </div>
          <div className="flex space-x-4 text-xl text-neutral-700">
            <Link to={usuario.token !== '' ? '/perfil' : '/login'} className="hover:text-teal-600">
              <FaUserLarge />
            </Link>
            <FaBasketShopping />
          </div>
        </div>
      </nav>
      <div className="container mx-auto mt-2 flex h-[70px] w-full items-center rounded-3xl bg-gray-800 px-12 text-lg text-gray-200">
        <div className="flex items-center space-x-7">
          <FaBars className="h-5 text-gray-600" />
          <span className="font-semibold uppercase">Ver todas</span>
          <div className="h-9 w-[3px] rounded bg-gray-600"></div>
        </div>
        <ul className="mx-20 flex flex-1 justify-between">
          {categorias.map((item) => (
            <li key={item.id}>
              <Link to={`/${item.link}`} className="capitalize">
                {item.name}
              </Link>
            </li>
          ))}
        </ul>
        <button onClick={() => {
          talert('teste','')
        }}>testando</button>
      </div>
    </>
  );
}
