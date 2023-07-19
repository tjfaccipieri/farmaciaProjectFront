import {
  FaBasketShopping,
} from 'react-icons/fa6';

export function ProductCard({item}: any) {
  return(
    <div className="flex flex-col gap-1 rounded-2xl shadow-md shadow-gray-600/40  w-64 p-5 justify-center items-center bg-white">
      <img src={item.imagem} alt="" className="w-36 aspect-square " />
      <p className="line-clamp-2 text-ellipsis text-center text-sm">{item.nome}</p>
      <span className="text-xs text-gray-600">{item.fabricante}</span>
      <div className="flex text-2xl items-center justify-between w-full">
        <p>{item.preco.toLocaleString('pt-br', {
          style: 'currency',
          currency: 'brl',
          currencyDisplay: "symbol",
        })}</p>
        <button className="h-11 bg-red-600 hover:bg-red-700 transition duration-200 text-white px-4 rounded-lg w-20 flex justify-center items-center">
          <FaBasketShopping />
        </button>
      </div>
    </div>
  )
}