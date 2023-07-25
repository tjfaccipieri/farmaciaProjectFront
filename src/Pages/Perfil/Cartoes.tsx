import { useState } from "react";
import {
  FaCcApplePay,
  FaCcMastercard,
  FaCcVisa,
  FaRegSquarePlus,
} from "react-icons/fa6";

const cards = [
  {
    id: 1,
    bandeira: <FaCcVisa />,
    numero: "1234 5678 9012 3456",
    cvv: "123",
    validade: "12/23",
    titular: 'Thiago Faccipieri'
  },
  {
    id: 2,
    bandeira: <FaCcMastercard />,
    numero: "1234 5678 9012 3456",
    cvv: "123",
    validade: "12/23",
    titular: 'Thiago Faccipieri'
  },
  {
    id: 3,
    bandeira: <FaCcVisa />,
    numero: "1234 5678 9012 3456",
    cvv: "123",
    validade: "12/23",
    titular: 'Thiago Faccipieri'
  },
  {
    id: 4,
    bandeira: <FaCcApplePay />,
    numero: "1234 5678 9012 3456",
    cvv: "123",
    validade: "12/23",
    titular: 'Thiago Faccipieri'
  },
  {
    id: 5,
    bandeira: <FaCcMastercard />,
    numero: "1234 5678 9012 3456",
    cvv: "123",
    validade: "12/23",
    titular: 'Thiago Faccipieri'
  },
];

export function Cartoes() {
  const [isOpen, setIsOpen] = useState(false)

  function CartaoModal() {
    return(
      <div className="w-screen h-screen bg-neutral-600/60 fixed top-0 left-0 z-10 flex items-center justify-center">
        <div className="bg-white w-1/3 p-4 rounded-lg border-2 shadow-md shadow-teal-700/40 border-neutral-700">
          <form className="flex flex-col gap-4">
          <div className="flex flex-col gap-1">
            <label htmlFor="email" className="flex items-center gap-2 font-bold text-teal-600">
              Titular do cartão
            </label>
            <input type="text" placeholder="Nome completo" className="h-10 rounded-lg border border-neutral-700 px-3 outline-teal-800" id="email" name="email" />
          </div>
          <div className="flex flex-col gap-1">
            <label htmlFor="email" className="flex items-center gap-2 font-bold text-teal-600">
              Número do cartão 
            </label>
            <input type="text" placeholder="1234-1234-1234-1234" className="h-10 rounded-lg border border-neutral-700 px-3 outline-teal-800" id="email" name="email" />
          </div>
          <div className="flex gap-14">
            <div className="flex flex-col gap-1 w-full">
              <label htmlFor="email" className="flex items-center gap-2 font-bold text-teal-600">
                CVV
              </label>
              <input type="text" placeholder="CVV" className="h-10 rounded-lg border border-neutral-700 px-3 outline-teal-800" id="email" name="email" />
            </div>
            <div className="flex flex-col gap-1 w-full">
              <label htmlFor="email" className="flex items-center gap-2 font-bold text-teal-600">
                Validade
              </label>
              <input type="text" placeholder="MM/AA" className="h-10 rounded-lg border border-neutral-700 px-3 outline-teal-800" id="email" name="email" />
            </div>
          </div>
          <button
              type="button"
              onClick={() => setIsOpen(!isOpen)}
              className="mx-auto h-10 w-full rounded-lg border-2 border-red-800 hover:bg-red-800 hover:text-white duration-200 transition-colors bg-transparent text-red-800"
            >
              Cancelar
            </button>
            <button
              type="submit"
              className="mx-auto h-10 w-full rounded-lg border-2 border-teal-800 hover:bg-teal-800 hover:text-white duration-200 transition-colors bg-transparent text-teal-800"
            >
              Gravar cartão
            </button>
          </form>
  
        </div>
      </div>
    )
  }


  return (
    <div className="flex flex-col gap-4 px-8 py-4">
      <h1 className="text-center text-3xl font-black">Meus cartões</h1>
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-4">
        {cards.map((card) => (
          <div className="flex items-center gap-6 rounded-xl border-2 bg-neutral-100 hover:bg-neutral-200 p-4">
            <div className="text-3xl">{card.bandeira}</div>
            <div className="flex flex-col gap-2">
              <span className="font-light text-sm">Titular: {card.titular}</span>
              <span className="font-light text-sm">Número: {card.numero}</span>
              <span className="font-light text-sm">CVV: {card.cvv}</span>
              <span className="font-light text-sm">Validade: {card.validade}</span>
            </div>
          </div>
        ))}
        <div className="group rounded-xl flex flex-col items-center gap-2 border-2 border-neutral-600 hover:border-teal-700 bg-neutral-200 p-4" onClick={() => setIsOpen(!isOpen)}>
            <FaRegSquarePlus className="group-hover:text-teal-700 text-5xl" />
          
            <p className="group-hover:text-teal-700 text-center text-lg font-semibold">Adicionar novo cartão</p>
          
        </div>
      </div>
      {isOpen && <CartaoModal />}
    </div>
  );
}


