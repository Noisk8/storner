import Image from "next/image";
import { Description } from "app/componentes/home/Description";
 import { Hero } from "app/componentes/home/Hero";
 import { MainProducts } from "app/componentes/home/MainProducts";

export default function Home() {
  return (
    <main >
     <h1> </h1>
     <Hero />
     <Description />
     <MainProducts />
    </main>
  );
}
