interface MarcaProps {
  id: number;
  marca: string;
  logo: string;
}

export function MarcasCard(marca: MarcaProps) {
  return (
    <div className="my-4 flex h-36 w-36 items-center justify-center overflow-hidden rounded-full bg-white shadow shadow-gray-600/80">
      <img src={marca.logo} alt="" className="w-8/12 object-contain" />
    </div>
  );
}
