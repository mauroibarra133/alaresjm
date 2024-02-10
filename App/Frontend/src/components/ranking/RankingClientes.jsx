import "../../styles/ranking/ranking.css";
import Path from "../Path";
import burgerImg from "../../assets/images/burger-deco.webp";
import { useEffect, useState } from "react";
import { getRanking } from "../../services/rankings.services";
import { meses } from "../../utils/constants.js";
import ClientesVacio from "../FormVacio";
import LoaderComponent from "../LoaderComponent";

function RankingClientes() {
  //Constants
  const actualDate = new Date();

  //Stattes
  const [loading, setLoading] = useState(true);
  const [ranking, setRanking] = useState([]);

  //Use effects
  useEffect(() => {
    document.title = "Alares | Ranking ";
  }, []);

  useEffect(() => {
    async function buscarRanking() {
      try {
        const response = await getRanking();
        setRanking(response.data);
        setLoading(false);
      } catch (error) {
        setLoading(false);
        console.log(error);
      }
    }
    buscarRanking();
  }, []);

  return (
    <div className="ranking__container">
      <Path
        pathPrev={"Home"}
        pathActual={"Ranking de Clientes"}
        goTo={"Home"}
      />
      <div className="ranking__title">
        <p className="mes">
          {`${meses[actualDate.getMonth()].toUpperCase()}   `}
          <span className="año">{` ${actualDate.getFullYear()}`}</span>
        </p>
      </div>
      <div className="ranking__desc">
        <p>El primero de cada mes se llevara una burger a eleccion!</p>
        <img src={burgerImg} alt="Imagen de Hamburguesa" />
      </div>
      <div className="ranking__table-container">
        <div className="ranking__table-header">
          <div className="ranking__header-position ranking__header-column">
            <p>#</p>
          </div>
          <div className=" ranking__header-column ranking__header-client">
            <p>Clientes</p>
          </div>
          <div className=" ranking__header-column ranking__header-points">
            <p>Puntos</p>
          </div>
        </div>
        <div
          className={`ranking__table-body ${
            ranking.length <= 0 ? "center" : ""
          }`}
        >
          {loading ? (
            <LoaderComponent color={"orange"} size={"small"} />
          ) : ranking.length <= 0 ? (
            <ClientesVacio
              goTo="carta"
              msg="Se el primer cliente de este mes!"
              msgButton={"PEDIR"}
            />
          ) : (
            ranking.slice(0, 10).map((fila, index) => (
              <div className="ranking__table-row" key={fila.id_usuario}>
                <div>
                  <div className="ranking__position">{`${index + 1}º`}</div>
                  <div className="ranking__client">{`${fila.nombre} ${fila.apellido}`}</div>
                </div>
                <div className="ranking__points">{`${fila.puntos} pts`}</div>
              </div>
            ))
          )}
        </div>
      </div>
    </div>
  );
}

export default RankingClientes;
