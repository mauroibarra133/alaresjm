import Header from './Header';
import HeroHome from './home/hero/HeroHome';
import HeroQuienesSomos from './home/hero/HeroQuienesSomos';
import HeroHorarios from './home/hero/HeroHorarios';
import HeroFoodTruck from './home/hero/HeroFoodTruck';
import HeroContactanos from './home/hero/HeroContactanos';
import Footer from './Footer';
import '../styles/home.css';

function Home() {
    return ( 
        <div className="home__container">
            <Header/>
            <HeroHome/>      
            <HeroQuienesSomos/>      
            <HeroHorarios/>     
            <HeroFoodTruck/>      
            <HeroContactanos/> 
            <Footer/>
        </div>
     );
}

export default Home;