import Header from '../Header'
import HeroHome from '../home/HeroHome'
import HeroQuienesSomos from '../home/HeroQuienesSomos'

import '../../styles/home.css'
function Home() {
    return ( 
        <div className="home-container">
            <Header/>
            <HeroHome/>      
            <HeroQuienesSomos/>      

            {/*
            <HeroQuienesSomos/>      
            <Hero_Horarios/>     
            <Hero_FoodTruck/>      
            <Hero_Contactanos/> 
    <Footer/> */}
        </div>
     );
}

export default Home;