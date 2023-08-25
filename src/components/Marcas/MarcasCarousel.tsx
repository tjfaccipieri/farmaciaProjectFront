import { useContext, useEffect, useState } from "react";
import "swiper/css";
import "swiper/css/navigation";
import { Navigation } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import { AuthContext } from "../../context/AuthContext";
import { Marca } from "../../models/Marca";
import { getWithToken } from "../../service/service";
import { MarcasCard } from "./MarcasCard";
export function MarcasCarousel() {

  const { usuario } = useContext(AuthContext);

  const [marcas, setMarcas] = useState<Marca[]>([]);
  
  async function getMarcas() {
    await getWithToken("/marcas", setMarcas, {
      headers: {
        Authorization: usuario.token,
      },
    });
  }

  useEffect(() => {
    getMarcas();
  }, []);

  return (
    <div className="my-6">
      <h3 className="text-2xl font-bold text-slate-700">Principais Marcas</h3>
      <Swiper
        spaceBetween={35}
        slidesPerView={8}
        navigation={true}
        modules={[Navigation]}
        loop={true}
        className="px-12"
      >
        {marcas.map((marca) => (
          <SwiperSlide key={marca.id}>
            <MarcasCard marca={marca} />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}
