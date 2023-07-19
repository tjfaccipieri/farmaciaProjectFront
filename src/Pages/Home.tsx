import { Carousel } from "../components/Carousel";
import { MarcasCarousel } from "../components/Marcas/MarcasCarousel";
import { PromoCards } from "../components/PromoCards";
import { PromoList } from "../components/PromoList";

export function Home() {
  return (
    <>
      <Carousel />
      <PromoCards />
      <PromoList />
      <MarcasCarousel />
    </>
  );
}
