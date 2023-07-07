import '../../styles/hero/heroContactanos.css'

function HeroContactanos() {
    return ( 
        <div className="hero-contactanos__container">
            <div className="hero-contactanos__title">
                <h2>Contactanos</h2>
                <p>Contrata nuestro servicio de Foodtrack o haznos tus preguntas!</p>
            </div>
            <div className="hero-contactanos__form">
                <div className="hero-contactanos__inputs">
                    <div className="hero-contactanos__input">
                        <label htmlFor="nombre">Nombre</label>
                        <input type="text" placeholder='Ej: Juan'/>
                    </div>
                    <div className="hero-contactanos__input">
                        <label htmlFor="apellido">Apellido</label>
                        <input type="text" placeholder='Ej: Gonzales'/>
                    </div>
                    <div className="hero-contactanos__input">
                        <label htmlFor="telefono" >Telefono</label>
                        <input type="tel" placeholder='Ej: 3525-6491324'/>
                    </div>
                    <div className="hero-contactanos__input">
                        <label htmlFor="mail">Mail</label>
                        <input type="email" placeholder='Ej: alares@gmail.com'/>
                    </div>
                    <div className="hero-contactanos__input">
                        <label htmlFor="duda">Tu duda</label>
                        <textarea name="duda" id="duda" cols="30" rows="10" placeholder='Ej: Como contrato el servicio de foodtruck?'></textarea>
                    </div>
                </div>
                <div className="hero-contactanos__button">
                    <p>Enviar</p>
                </div>
            </div>
        </div>
     );
}

export default HeroContactanos;