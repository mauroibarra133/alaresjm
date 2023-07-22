export function generateUniqueKey() {
    return Math.random().toString(36).substr(2, 9);
  }

export function updateLocalStorage(state){
  window.localStorage.setItem("cart",JSON.stringify(state))
}

export function convertirHoraADate(hora) {
  const [horas, minutos] = hora.split(":");
  const fechaActual = new Date();
  fechaActual.setHours(horas);
  fechaActual.setMinutes(minutos);
  return fechaActual;
}
export function calcularTiempoRestante(horaReserva){
  const timeHoy = new Date().getTime();
  const timeReserva = horaReserva.getTime()

  const horaRestante = (timeHoy - timeReserva)/3600000
  return Math.abs(horaRestante)
}