import logo from '../../assets/pfizer-transformed.png'

export function MarcasCard(){
  return(
    <div className="shadow shadow-gray-600/80 h-36 w-36 bg-white rounded-full flex items-center justify-center my-4">
      <img src={logo} alt="" />
    </div>
  )
}