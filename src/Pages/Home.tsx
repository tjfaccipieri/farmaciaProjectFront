import { Carousel } from "../components/Carousel";
import { MarcasCarousel } from "../components/Marcas/MarcasCarousel";
import { PromoCards } from "../components/PromoCards";
import { PromoList } from "../components/PromoList";

import logo from '../assets/logo.png'

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
