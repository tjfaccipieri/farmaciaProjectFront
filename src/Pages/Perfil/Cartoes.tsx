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
  },
  {
    id: 2,
    bandeira: <FaCcMastercard />,
    numero: "1234 5678 9012 3456",
    cvv: "123",
    validade: "12/23",
  },
  {
    id: 3,
    bandeira: <FaCcVisa />,
    numero: "1234 5678 9012 3456",
    cvv: "123",
    validade: "12/23",
  },
  {
    id: 4,
    bandeira: <FaCcApplePay />,
    numero: "1234 5678 9012 3456",
    cvv: "123",
    validade: "12/23",
  },
  {
    id: 5,
    bandeira: <FaCcMastercard />,
    numero: "1234 5678 9012 3456",
    cvv: "123",
    validade: "12/23",
  },
];

export function Cartoes() {
  return (
    <div className="flex flex-col gap-4 px-8 py-4">
      <h1 className="text-center text-3xl font-black">Meus cartões</h1>
      <div className="grid grid-cols-3 gap-4">
        {cards.map((card) => (
          <div className="flex items-center rounded-xl border-2 bg-sky-200 p-4">
            <div className="text-3xl">{card.bandeira}</div>
          </div>
        ))}
        <div className="rounded-xl border-2 bg-sky-200 p-4">
          <div className="text-5xl">
            <FaRegSquarePlus />
          </div>
        </div>
      </div>
    </div>
  );
}
