import Path from '../Path'
import '../../styles/ranking/ranking.css'
import burgerImg from '../../assets/images/burger-deco.png'
import { useEffect, useState } from 'react';
import { getRanking } from '../../services/rankings.services';
import {meses} from '../../utils/constants.js';

function RankingClientes() {
    const [ranking, setRanking] = useState([]);
    const actualDate = new Date();

    useEffect(()=>{
        async function buscarRanking(){
            const response = await getRanking()
            console.log(response.data);
            setRanking(response.data)
        }
        buscarRanking()
    },[]);
    return ( 
        <div className="ranking__container">
            <Path pathPrev={'Home'} pathActual={'Ranking de Clientes'} goTo={'Home'}/>
            <div className="ranking__title">
                <p className='mes'>{`${meses[actualDate.getMonth()].toUpperCase()}   `}<span className='año'>{` ${actualDate.getFullYear()}`}</span></p>
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
                    {ranking && ranking.slice(0,10).map((fila,index) => (
                    <div className="ranking__table-row" key={fila.id_usuario}>
                        <div>
                            <div className="ranking__position">{`${index+1}º`}</div>
                            <div className="ranking__cliente">{`${fila.nombre} ${fila.apellido}`}</div>
                        </div>

                        <div className="ranking__puntos">{`${fila.Puntos} pts`}</div>
                    </div>
  ))}
</div>

            </div>
        </div>
     );
}

export default RankingClientes;