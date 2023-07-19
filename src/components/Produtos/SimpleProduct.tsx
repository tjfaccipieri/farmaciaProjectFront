import { FaBasketShopping } from "react-icons/fa6";

export function SimpleProduct() {
  return (
    <div className="flex w-full justify-center">
      <div className="grid max-w-7xl grid-cols-2 gap-4">
        <div>
          <img
            src="https://static.jetfarma.com.br/media/catalog/product/cache/928a8c279c399d896117ba62b5912c8a/b/u/buscopan.jpg"
            alt=""
            className="m-auto h-3/4"
          />
        </div>
        <div className="mt-8 flex h-full flex-col ">
          <h1 className="w-3/4 text-2xl font-bold text-gray-700">
            Buscopan composo 10/250mg com 20 comprimidos
          </h1>
          <div className="flex items-center justify-between">
            <p className="text-gray-500">
              Fabricante: <span className="font-bold">Boehringer</span>
            </p>
            <p className="text-3xl font-bold text-gray-700">R$: 88,88</p>
          </div>
          <hr className="my-4" />
          <h2 className="mb-2 text-2xl font-bold text-gray-700">Descrição:</h2>
          <p className="mb-8">
            Buscopan Composto possui ação antiespasmódica, agindo sobre as
            contrações dolorosas e aliviando de forma rápida e prolongada as
            cólicas, dores e desconfortos abdominais. Possui também importante
            propriedade analgésica, o que faz com que diminua a percepção da
            dor. O medicamento faz efeito logo depois de tomado e seu efeito
            dura por 6 a 8 horas.
          </p>
          <span className="font-semibold text-gray-800">
            Princípio Ativo: Com Butilbrometo De Escopolamina, Com Dipirona
          </span>

          <button className="mx-auto mt-8 flex h-12 w-10/12 items-center justify-center gap-4 rounded-full bg-red-600 text-2xl font-semibold text-white hover:bg-red-700">
            Comprar <FaBasketShopping />
          </button>
        </div>
      </div>
    </div>
  );
}
