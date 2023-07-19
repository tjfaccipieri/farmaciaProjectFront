import {
  FaClock,
  FaRegCreditCard,
  FaTruckFast,
  FaWallet,
} from 'react-icons/fa6';

export function PromoCards() {
  const promos = [
    {
      id: 1,
      icon: <FaRegCreditCard />,
      color: 'text-teal-600',
      texto: 'Parcele em até',
      call: '6x sem juros',
    },
    {
      id: 2,
      icon: <FaWallet />,
      color: 'text-red-600',
      texto: '5% de desconto',
      call: 'no pix ou boleto',
    },
    {
      id: 3,
      icon: <FaTruckFast />,
      color: 'text-teal-600',
      texto: 'Acima de R$200',
      call: 'frete grátis',
    },
    {
      id: 4,
      icon: <FaClock />,
      color: 'text-red-600',
      texto: 'Entrega em',
      call: 'até 4 horas',
    },
  ];

  return (
    <div className="my-4 flex justify-between gap-5 text-xl">
      {promos.map((card) => (
        <div
          key={card.id}
          className="bg-gray-200 w-full rounded-lg p-11 flex items-center space-x-4 shadow-md shadow-gray-400/50"
        >
          <span className={`${card.color} text-5xl`}>{card.icon}</span>
          <div className="flex flex-col text-gray-700">
            <p>{card.texto}</p>
            <p className="font-bold">{card.call}</p>
          </div>
        </div>
      ))}
    </div>
  );
}
