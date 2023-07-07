import Header from './Header';
import HeroHome from './home/HeroHome';
import HeroQuienesSomos from './home/HeroQuienesSomos';
import HeroHorarios from './home/HeroHorarios';
import HeroFoodTruck from './home/HeroFoodTruck';
import HeroContactanos from './home/HeroContactanos';
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