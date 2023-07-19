import {
  FaEnvelope,
  FaEnvelopesBulk,
  FaFacebookF,
  FaInstagram,
  FaPhone,
  FaRegPaperPlane,
  FaWhatsapp,
  FaYoutube,
} from 'react-icons/fa6';
import pagamentos from '../assets/Imagens.png';
import parceiro from '../assets/parceiro.png';

export function Footer() {
  return (
    <>
      <footer className="bg-slate-800 text-white flex justify-center">
        <div className="container my-14 grid grid-cols-4">
          <div className="flex flex-col gap-5">
            <h3 className="font-bold text-lg">Institucional</h3>
            <div className="flex flex-col gap-1 font-light">
              <span>Nossa história</span>
              <span>Trabalhe conosco</span>
              <span>Termos de uso</span>
              <span>Política de privacidade</span>
              <span>Responsabilidade</span>
              <span>Mapa do site</span>
            </div>
          </div>
          <div className="flex flex-col gap-5">
            <h3 className="font-bold text-lg">Serviços</h3>
            <div className="flex flex-col gap-1 font-light">
              <span>Bulário Anvisa</span>
              <span>Central de atendimento</span>
              <span>Como comprar</span>
              <span>Aplicação de vacinas</span>
              <span>Testes Covid-19</span>
              <span>Indique um amigo</span>
            </div>
          </div>
          <div className="col-span-2 p-4 flex flex-col gap-8">
            <div className="flex gap-4 text-gray-400">
              <div className="w-[400px] px-6 py-4 border-2 border-gray-600 rounded-lg flex items-center gap-4 text-sm cursor-pointer hover:bg-gray-600">
                <FaEnvelopesBulk className="text-6xl" />
                <div>
                  <p className="font-bold">
                    SAC: (11) 3000-0000 ou sac@farmagen.com.br
                  </p>
                  <p>Segunda à Sexta, das 8h às 18h.</p>
                </div>
              </div>

              <div className="w-[400px] px-6 py-4 border-2 border-gray-600 rounded-lg flex items-center gap-4 text-sm cursor-pointer hover:bg-gray-600">
                <FaPhone className="text-6xl" />
                <div>
                  <p className="font-bold">
                    Televendas: (11) 3111-1111 ou vendas@farmagen.com.br
                  </p>
                  <p>Segunda à Sexta, das 8h às 20h.</p>
                </div>
              </div>
            </div>
            <div className="flex space-x-16 items-center w-full">
              <h3 className="text-xl font-bold">Redes sociais:</h3>
              <div className="flex gap-5 text-red-600 flex-1">
                <div className="bg-slate-900 hover:bg-slate-950 cursor-pointer p-4 rounded-full">
                  <FaFacebookF className="text-xl" />
                </div>
                <div className="bg-slate-900 hover:bg-slate-950 cursor-pointer p-4 rounded-full">
                  <FaInstagram className="text-xl" />
                </div>
                <div className="bg-slate-900 hover:bg-slate-950 cursor-pointer p-4 rounded-full">
                  <FaYoutube className="text-xl" />
                </div>
                <div className="bg-slate-900 hover:bg-slate-950 cursor-pointer p-4 rounded-full">
                  <FaWhatsapp className="text-xl" />
                </div>
                <div className="bg-slate-900 hover:bg-slate-950 cursor-pointer p-4 rounded-full">
                  <FaRegPaperPlane className="text-xl" />
                </div>
                <div className="bg-slate-900 hover:bg-slate-950 cursor-pointer p-4 rounded-full">
                  <FaEnvelope className="text-xl" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </footer>
      <section className="bg-red-600 rounded-t-2xl -mt-5 text-white flex flex-col items-center justify-center py-8">
        <div className="container grid grid-cols-4 gap-2">
          <div>
            <h3 className="font-bold text-lg mb-5">Formas de pagamento</h3>
            <img src={pagamentos} alt="Formas de pagamento" />
          </div>
          <div className="flex flex-col items-center">
            <h3 className="font-bold text-lg mb-5">A FarmaGen apoia</h3>
            <img src={parceiro} alt="Formas de pagamento" />
          </div>
          <div className="flex flex-col items-center col-span-2">
            <h3 className="font-bold text-lg mb-5">Assine nossa newsletter</h3>
            <form className='flex gap-4'>
              <input type="text" placeholder='Digite seu nome' className='rounded-xl px-2 outline-none' />
              <div className='flex h-10'>
                <input type="email" placeholder='Digite seu e-mail' className='rounded-l-xl h-full px-2 outline-none' />
                <button className='bg-teal-600 rounded-r-xl h-full px-4'>Enviar</button>
              </div>
            </form>
          </div>
        </div>
        <div className='container flex flex-col gap-2 mt-12 '>
        <p>
          Todas as informações contidas neste site não devem ser usadas para
          auto medicação. Ao persistirem os sintomas o médico deverá ser
          consultado.
        </p>
        <p className='text-sm font-light'>
        O nome FarmaGen e o domínio www.farmagen.com.br são marcas registradas por Drogaria FarmaGen, fundada em 2022 sob o C.N.P.J: 40.0000.000/0001-10 – Inscrição Estadual: 100.000.000.000 - situada na Av. Não Existe no 10, Nemtem - Fictícia / FC - CEP: 01000-010 - Licença municipal para funcionamento: 000.000.000-1 – ANVISA Autorização / MS 0.10000.1 - COVISA Autorização 1.10101.1 - Farmacêuticos: Dra. Fulana C. Beltrana - CRF: 10101, Dra. Ciclana F. Beltrana - CRF 01010.. As receitas médicas devem ser apresentadas para o e-mail: farmaceutico@farmagen.com.br. Copyright 2022 Drogaria FarmaGen.
        </p>
        </div>
      </section>
    </>
  );
}
