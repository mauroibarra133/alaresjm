import Path from '../Path'
import '../../styles/ranking/ranking.css'
import burgerImg from '../../assets/images/burger-deco.png'

function RankingClientes() {
    return ( 
        <div className="ranking__container">
            <Path pathPrev={'Home'} pathActual={'Ranking de Clientes'}/>
            <div className="ranking__title">
                <p className='mes'>JULIO <span className='año'> 2023</span></p>
            </div>
            <div className="ranking__desc">
                <p>El primero de cada mes se llevara una burger a eleccion!</p>
                <img src={burgerImg} alt="Imagen de Hamburguesa" />
            </div>
            <div className="ranking__table-container">
                <div className="ranking__table-header">
                    <div className="ranking__header-client">
                        <p>Clientes</p>
                    </div>
                    <div className="ranking__header-points">
                        <p>Puntos</p>
                    </div>
                </div>
                <div className="ranking__table-body">
                    <div className="ranking__table-row">
                        <div className="ranking__cliente">Juan</div>
                        <div className="ranking__puntos">234 pts</div>
                    </div>
                    <div className="ranking__table-row">
                        <div className="ranking__cliente">Juan</div>
                        <div className="ranking__puntos">234 pts</div>
                    </div>
                    <div className="ranking__table-row">
                        <div className="ranking__cliente">Juan</div>
                        <div className="ranking__puntos">234 pts</div>
                    </div>
                    <div className="ranking__table-row">
                        <div className="ranking__cliente">Juan</div>
                        <div className="ranking__puntos">234 pts</div>
                    </div>
                    <div className="ranking__table-row">
                        <div className="ranking__cliente">Juan</div>
                        <div className="ranking__puntos">234 pts</div>
                    </div>

                </div>
            </div>
        </div>
     );
}

export default RankingClientes;