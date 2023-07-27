import { ChangeEvent, useContext, useEffect, useRef, useState } from "react";
import { PropagateLoader } from "react-spinners";
import { AuthContext } from "../../context/AuthContext";
import { Marca } from "../../models/Marca";
import { getWithToken, post } from "../../service/service";

export function CadastroMarcas() {
  const { usuario } = useContext(AuthContext);

  const nomeMarca = useRef() as any;
  const logoMarca = useRef() as any;

  const [marcas, setMarcas] = useState<Marca[]>([]);

  async function getMarcas() {
    await getWithToken("/marcas", setMarcas, {
      headers: {
        Authorization: usuario.token,
      },
    });
  }

  useEffect(() => {
    setTimeout(() => {
      getMarcas();
    }, 1500);
  }, []);

  async function handleSubmit(event: ChangeEvent<HTMLFormElement>) {
    event.preventDefault();
    const data = {
      marca: nomeMarca.current?.value,
      logo: logoMarca.current?.value,
    };

    console.log(usuario.token);
    try {
      await post("/marcas", data, {
        headers: {
          Authorization: usuario.token,
        },
      });
    } catch (error) {
      console.log(error);
    }
  }

  return (
    <div className="flex flex-col">
      <h2 className="text-center text-3xl font-bold">Cadastro de nova marca</h2>
      <form
        className="mx-auto flex w-3/5 flex-col gap-4"
        onSubmit={handleSubmit}
      >
        <div className="flex flex-col gap-2">
          <label
            htmlFor="marca"
            className="flex items-center gap-2 font-bold text-teal-600"
          >
            Nome da marca:
          </label>
          <input
            ref={nomeMarca}
            type="text"
            placeholder="Nome da marca"
            className="h-10 rounded-lg border border-neutral-700 px-3 outline-teal-800"
          />
        </div>
        <div className="flex flex-col gap-2">
          <label
            htmlFor="marca"
            className="flex items-center gap-2 font-bold text-teal-600"
          >
            Logo da marca:
          </label>
          <input
            ref={logoMarca}
            type="text"
            placeholder="URL da imagem"
            className="h-10 rounded-lg border border-neutral-700 px-3 outline-teal-800"
          />
        </div>
        <button
          type="submit"
          className="rounded-lg bg-teal-600 px-4 py-2 text-white duration-200 hover:bg-teal-800"
        >
          Cadastrar marca
        </button>
      </form>

      <div className="mx-auto my-8 flex w-2/3 flex-col">
        <h2 className="text-center text-3xl font-bold">
          Lista de marcas cadastradas:
        </h2>

        {marcas.length === 0 && (
          <div className="mt-10 flex w-full justify-center">
            <PropagateLoader color="rgb(20 184 166)" size={25} />
          </div>
        )}
        <div className="mt-8 grid grid-cols-1 gap-4 md:grid-cols-3">
          {marcas.map((marca) => (
            <div
              key={marca.id}
              className="group flex items-center gap-6 rounded-lg border-2 border-neutral-700 bg-white p-4 shadow-md shadow-teal-700/40 hover:bg-neutral-200"
            >
              <img src={marca.logo} alt="" className="h-10 object-contain" />
              <h3 className="text-2xl font-semibold">{marca.marca}</h3>
              <span className="hidden group-hover:block">editar</span>
              <span className="hidden group-hover:block">apagar</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
