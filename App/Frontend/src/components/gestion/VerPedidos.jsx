/* eslint-disable react-hooks/exhaustive-deps */
import "../../styles/dashboard/veritems.css";
import { useEffect, useId, useState } from "react";
import { getOrders } from "../../services/pedidos.services";
import { getStatusImage } from "../../utils/functions";
import Pedido from "./Pedido";
import Overlay from "../Overlay";
import VerPedidosVacio from "../FormVacio";
import io from "socket.io-client";
const socket = io("/");
import Modal from "../Modal";
import LoaderComponent from "../LoaderComponent";
import { DATE_REGEX } from "../../utils/constants";

function VerPedidos() {
  //Constants
  const dateId = useId();
  const filterCancelId = useId();
  const filterDeliveredId = useId();

  const options = { timeZone: "America/Argentina/Buenos_Aires" };
  const argentineDate = new Date()
    .toLocaleString("en-US", options)
    .split(" ")[0];

  // Convertir la fecha actual a un objeto Date
  const today = new Date(argentineDate);
  const todayDate = today.toISOString().split("T")[0];
  // Crear una nueva fecha que representa el día de ayer
  const yesterday = new Date(today.getTime() - 24 * 60 * 60 * 1000);
  // Obtener la fecha del día de ayer en formato ISO (yyyy-mm-dd)
  const yesterdayDate = yesterday.toISOString().split("T")[0];

  //States
  const [orders, setOrders] = useState([]);
  const [loading, setLoading] = useState(true);

  const [filterDate, setFilterDate] = useState(todayDate);
  const [isLargeScreen, setIsLargeScreen] = useState(window.innerWidth > 768);
  const [isFilterActive, setIsFilterActive] = useState({
    entregado: true,
    cancelado: true,
  });
  const [showModal, setShowModal] = useState({
    isSubmitted: false,
    isGood: false,
    msg: "",
  });
  const [modalOrder, setModalOrder] = useState({
    isSubmitted: false,
    pedido: {},
  });

  //USe effects

  useEffect(() => {
    document.title = "Alares | Dashboard ";
  }, []);

  useEffect(() => {
    async function searchOrders() {
      try {
        const result = await getOrders({ date: filterDate });
        setLoading(false);
        setOrders(result.data.data);
      } catch (error) {
        setLoading(false);
        setShowModal({
          isSubmitted: true,
          isGood: false,
          msg: error.message,
        });
      }
    }
    searchOrders();
  }, [filterDate]);

  useEffect(() => {
    const handleResize = () => {
      setIsLargeScreen(window.innerWidth > 768);
    };

    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  useEffect(() => {
    socket.on("connect", () => {
      // Escuchar el evento 'pedidoAdmin' emitido por el servidor
      socket.on("adminOrder", (newOrder) => {
        // Actualizar el estado de pedidos con el nuevo pedido recibido
        // Usamos el callback en setPedidos para asegurar que siempre estamos
        // actualizando el estado basado en el estado anterior
        setOrders((prevOrders) => [newOrder, ...prevOrders]);

        const tablaPedidos = document.getElementById("verpedidos__body");
        const nuevoPedidoRow = document.getElementById(`pedido-${newOrder.id}`);
        tablaPedidos.classList.add("animate-slide-down");
        nuevoPedidoRow.classList.add("animate-fade-in");

        setTimeout(() => {
          tablaPedidos.classList.remove("animate-slide-down");
          nuevoPedidoRow.classList.remove("animate-fade-in");
        }, 1000);
      });
    });
    // Desuscribirse del evento 'pedidoAdmin' cuando el componente se desmonte
    return () => {
      socket.off("adminOrder");
    };
  }, []);

  async function searchOrders() {
    try {
      const result = await getOrders({ date: filterDate });
      setOrders(filterOrders(result.data.data));
    } catch (error) {
      setShowModal({
        isSubmitted: true,
        isGood: false,
        msg: error.message,
      });
    }
  }

  function handleDate(data) {
    if (DATE_REGEX.test(data.target.value)) {
      setFilterDate(data.target.value);
    }
  }

  function filterOrders(orders) {
    if (!isFilterActive.entregado && !isFilterActive.cancelado) {
      return orders;
    }
    if (isFilterActive.entregado && isFilterActive.cancelado) {
      return orders.filter((order) => {
        if (
          order.estado_pedido != "Cancelado" &&
          order.estado_pedido != "Entregado"
        ) {
          return order;
        }
      });
    }
    //Filtrar entregados
    if (isFilterActive.entregado) {
      return orders.filter((order) => order.estado_pedido != "Entregado");
    }
    if (isFilterActive.cancelado) {
      return orders.filter((order) => order.estado_pedido != "Cancelado");
    }
  }
  function openModalOrder(order) {
    setModalOrder({
      isSubmitted: true,
      pedido: order,
    });
    document.body.classList.add("disable-scroll");
  }
  function closeModalOrder() {
    setModalOrder({
      isSubmitted: false,
      pedido: {},
    });
    document.body.classList.remove("disable-scroll");

    searchOrders();
  }
  function closeModal() {
    setShowModal({
      isSubmitted: false,
      isGood: false,
      msg: "",
    });
  }
  return (
    <div className="veritems verpedidos">
      <div className="verpedidos__fechas veritems__fechas">
        <div
          className="verpedidos__fecha-ayer button veritems__fechas-button"
          onClick={() => setFilterDate(yesterdayDate)}
        >
          Ayer
        </div>
        <input
          id={dateId}
          className="verpedidos__fecha-input"
          type="date"
          onChange={handleDate}
          value={filterDate}
        ></input>
        <div
          className="verpedidos__fecha-hoy button veritems__fechas-button"
          onClick={() => setFilterDate(todayDate)}
        >
          Hoy
        </div>
      </div>
      <div className="veritems__filters verpedidos__filters">
        <div className="veritems__filter verpedidos__filter">
          <img
            src={getStatusImage("Entregado")}
            alt="Entregado"
            className="verpedidos__icon"
          />
          <label htmlFor={filterDeliveredId}>
            {isFilterActive.entregado
              ? "Mostrar entregados"
              : "Ocultar entregados"}
          </label>
          <input
            id={filterDeliveredId}
            type="checkbox"
            onClick={() =>
              setIsFilterActive({
                entregado: !isFilterActive.entregado,
                cancelado: isFilterActive.cancelado,
              })
            }
          />
        </div>
        <div className="veritems__filter verpedidos__filter">
          <img
            src={getStatusImage("Cancelado")}
            alt="Cancelado"
            className="verpedidos__icon"
          />
          <label htmlFor={filterCancelId}>
            {isFilterActive.cancelado
              ? "Mostrar cancelados"
              : "Ocultar cancelados"}
          </label>
          <input
            id={filterCancelId}
            type="checkbox"
            onClick={() =>
              setIsFilterActive({
                entregado: isFilterActive.entregado,
                cancelado: !isFilterActive.cancelado,
              })
            }
          />
        </div>
      </div>
      <div className="verpedidos__pedidos veritems__lista">
        <div className="verpedidos__header veritems__header">
          <div className="veritems__header-column verpedidos__header-column">
            Hora
          </div>
          <div className=" veritems__header-column  verpedidos__header-column">
            Cliente
          </div>
          <div className="veritems__header-column  verpedidos__header-column">
            Estado
          </div>
        </div>
        <div className="veritems__body verpedidos__body" id="verpedidos__body">
          {loading ? (
            <LoaderComponent size={"small"} color={"blue"} />
          ) : filterOrders(orders).length <= 0 ? (
            <VerPedidosVacio
              msg={"No hay pedidos el día de hoy"}
              msgButton={":("}
            ></VerPedidosVacio>
          ) : (
            filterOrders(orders).map((pedido) => (
              <div
                className={`veritems__row verpedidos__body-row`}
                id={`pedido-${pedido.id}`}
                key={pedido.id}
                onClick={() => openModalOrder(pedido)}
              >
                <div className="veritems__dato verpedidos__dato ver-lista__dato">
                  {pedido.hora}
                </div>
                <div className="veritems__dato verpedidos__dato ver-lista__dato">
                  {pedido.nombre_completo}
                </div>
                <div className="veritems__dato verpedidos__dato ver-lista__dato">
                  <img
                    src={getStatusImage(pedido.estado_pedido)}
                    alt={pedido.estado_pedido}
                  />
                  {isLargeScreen && <p>{pedido.estado_pedido}</p>}
                </div>
              </div>
            ))
          )}
        </div>
      </div>
      {modalOrder.isSubmitted && (
        <Overlay comp={"verpedidos"}>
          <Pedido
            modalPedido={modalOrder}
            closeModal={closeModalOrder}
          ></Pedido>
        </Overlay>
      )}
      {showModal.isSubmitted && (
        <Modal
          isSubmitted={showModal.isSubmitted}
          isGoodStatus={showModal.isGood}
          msg={showModal.msg}
          handleSubmit={closeModal}
        ></Modal>
      )}
    </div>
  );
}

export default VerPedidos;
