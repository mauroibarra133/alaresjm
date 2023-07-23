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

export const validateDate = (value) => {
  const today = new Date().toISOString().split('T')[0];
  if (value < today) {
    return 'La fecha debe ser mayor o igual a hoy.';
  }
  return true;
};

export const validateTime = (value) => {
  const selectedTime = new Date(`1970-01-01T${value}`);
  const startTime = new Date(`1970-01-01T19:00`);
  const endTime = new Date(`1970-01-01T23:00`);

  if (selectedTime < startTime || selectedTime > endTime) {
    return 'La hora debe estar entre las 19:00 y las 23:00.';
  }
  return true;
};