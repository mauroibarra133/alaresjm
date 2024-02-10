import { Suspense, lazy } from "react";
import HeroHome from "./home/hero/HeroHome";
import "../styles/home.css";
import Loading from "./Loading";
import { useEffect } from "react";

// Importa los otros componentes de forma dinámica usando lazy
const LazyHeroQuienesSomos = lazy(() => import("./home/hero/HeroQuienesSomos"));
const LazyHeroHorarios = lazy(() => import("./home/hero/HeroHorarios"));
const LazyHeroFoodTruck = lazy(() => import("./home/hero/HeroFoodTruck"));
const LazyHeroContactanos = lazy(() => import("./home/hero/HeroContactanos"));

function Home() {
  useEffect(() => {
    document.title = "Alares | Especialistas en Hamburguesas y Cervezas";
  }, []);
  return (
    <div className="home__container">
      <Suspense fallback={<Loading />}>
        <HeroHome />
        {/* Usa Suspense para manejar la carga de los componentes lazy */}
        {/* Renderiza cada componente lazy dentro de Suspense */}
        <LazyHeroQuienesSomos />
        <LazyHeroHorarios />
        <LazyHeroFoodTruck />
        <LazyHeroContactanos />
      </Suspense>
    </div>
  );
}

export default Home;
