import Path from "../Path";
import eyeImg from "../../assets/images/eye-slash.svg";
import MisReservasVacio from "../FormVacio";
import Booking from "./Booking";
import Modal from "../Modal";
import { useEffect, useState } from "react";
import { useAuth } from "../../hooks/useAuth";
import { getBookings } from "../../services/reservas.services";
import "../../styles/reserva/mis-reservas.css";
import { transformDate } from "../../utils/functions";
import LoaderComponent from "../LoaderComponent";

function MisReservas() {
  //Hooks
  const { auth } = useAuth();

  //states
  const [bookings, setBookings] = useState([]);
  const [isFilterActive, setFilterActive] = useState(true);
  const [errorStatus, setErrorStatus] = useState({
    isSubmitted: false,
    existError: false,
    msg: "",
  });
  const [page, setPage] = useState(1);
  const [offsett, setOffset] = useState(0);
  const [pages, setPages] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  //Constants
  const LIMIT = 6;
  const options = { timeZone: "America/Argentina/Buenos_Aires" };
  const fechaHoy = new Date().toLocaleString("en-US", options).split(" ")[0];

  //Use effects
  useEffect(() => {
    document.title = "Alares | Mis Reservas ";
  }, []);
  useEffect(() => {
    async function searchBookings() {
      setIsLoading(true);

      if (auth.data.user_id) {
        try {
          const response = await getBookings({ user_id: auth.data.user_id });
          setBookings(response.data.data);
        } catch (error) {
          // Maneja el error aquí si es necesario.
        } finally {
          setIsLoading(false);
        }
      }
    }
    searchBookings();
  }, [auth.data.user_id]);

  useEffect(() => {
    const arrPaginas = [];
    for (
      let i = 1;
      i <=
      Math.ceil(
        (filterBookings(bookings).length == 0
          ? 1
          : filterBookings(bookings).length) / LIMIT
      );
      i++
    ) {
      arrPaginas.push(i);
    }
    setPages(arrPaginas);
    handlePage(1);
  }, [bookings, isFilterActive]);

  function filterBookings() {
    if (bookings.length <= 0) return [];
    if (isFilterActive) {
      const filtered = bookings.filter((booking) => {
        if (transformDate(booking.fecha) >= transformDate(fechaHoy)) {
          return booking;
        }
      });
      if (filtered.length <= 0) return [];
      else return filtered;
    } else {
      return bookings;
    }
  }

  function handleBookings() {
    const today = new Date();
    const todayDate = transformDate(today);
    //Si no tenemos reservas
    if (bookings.length <= 0) {
      return (
        <MisReservasVacio
          msg={"Aun no tienes ninguna reserva hoy"}
          msgButton={"RESERVAR"}
          goTo={"reservas"}
        ></MisReservasVacio>
      );
    } else {
      const filteredBookings = filterBookings();
      if (filteredBookings.length <= 0) {
        return (
          <MisReservasVacio
            msg={"Aun no tienes ninguna reserva hoy"}
            msgButton={"RESERVAR"}
            goTo={"reservas"}
          ></MisReservasVacio>
        );
      } else {
        return filteredBookings
          .slice(offsett, LIMIT + offsett)
          .map((booking) => {
            const fechaString = booking.fecha;
            const fecha = new Date(fechaString);
            const fechaLegible = fecha.toLocaleDateString();

            return (
              <Booking
                fechaLegible={fechaLegible}
                booking={booking}
                key={booking.id}
                fechaHoy={todayDate}
              />
            );
          });
      }
    }
  }

  function handleCloseModal() {
    setErrorStatus({
      isSubmitted: false,
      existError: false,
      msg: "",
    });
    document.body.classList.remove("disable-scroll");
  }

  function handlePage(pageActual) {
    if (pageActual !== page) {
      window.scrollTo(0, 10);
      setPage(pageActual);
      setOffset((pageActual - 1) * LIMIT);
    }
  }

  return (
    <div className="misreservas__container">
      <Path pathPrev={"Home"} pathActual={"Mis Reservas"} goTo={"home"}></Path>
      <div className="misreservas__form">
        <div
          className="misreservas__filter"
          onClick={() => setFilterActive(!isFilterActive)}
        >
          <img src={eyeImg} alt="Icono de oculto" />
          <p>
            {!isFilterActive
              ? "Ocultar reservas antiguas"
              : "Mostrar reservas antiguas"}
          </p>
        </div>

        <div className="misreservas__datos">
          <div className="datos__header">
            <p className="datos__header-column">Fecha</p>
            <p className="datos__header-column">Hora</p>
            <p className="datos__header-column">Comens.</p>
            <p className="datos__header-column">Lugar</p>
            <p className="datos__header-column">Estado</p>
            <p className="datos__header-column">Acciones</p>
          </div>
          <div className="datos__body">
            {isLoading ? (
              <LoaderComponent size={"small"} color={"orange"} />
            ) : (
              handleBookings()
            )}
          </div>
        </div>
      </div>
      {filterBookings().length > 0 && <div className="button">RESERVAR</div>}
      {pages.length > 1 && (
        <div className="misreservas__paginacion-wrapper">
          <div className="misreservas__paginacion">
            <div className="misreservas__pagina--button">
              <p onClick={() => handlePage(page - 1 == 0 ? page : page - 1)}>
                Previo
              </p>
            </div>
            {bookings &&
              pages.map((pageAct) => (
                <div
                  className={`misreservas__pagina`}
                  key={pageAct}
                  onClick={() => handlePage(pageAct)}
                >
                  <p className={`${pageAct == page ? "active" : ""}`}>
                    {pageAct}
                  </p>
                </div>
              ))}
            <div className="misreservas__pagina--button">
              <p
                onClick={() =>
                  handlePage(page + 1 > pages.length ? page : page + 1)
                }
              >
                Siguiente
              </p>
            </div>
          </div>
        </div>
      )}
      {errorStatus.isSubmitted}
      <Modal
        isSubmitted={errorStatus.isSubmitted}
        isGoodStatus={!errorStatus.existError}
        msg={errorStatus.msg}
        handleSubmit={handleCloseModal}
      ></Modal>
    </div>
  );
}

export default MisReservas;
