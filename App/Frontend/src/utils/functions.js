import { ordersStatus } from "./constants";

export function generateUniqueKey() {
    return Math.random().toString(36).substr(2, 9);
  }

export function updateLocalStorage(state){
  window.localStorage.setItem("cart",JSON.stringify(state))
}

export function convertHourToDate(hour) {
  const [hours, minutes] = hour.split(":");
  const actualDate = new Date();
  actualDate.setHours(hours);
  actualDate.setMinutes(minutes);
  return actualDate;
}
export function calculateLeftTime(bookingHour){
  const todayTime = new Date().getTime();
  const bookingTime = bookingHour.getTime()

  const leftHour = (todayTime - bookingTime)/3600000
  return Math.abs(leftHour)
}

export const validateDate = (value) => {
  const today = new Date();
  const year = today.getFullYear();
  const month = (today.getMonth() + 1).toString().padStart(2, '0');
  const day = today.getDate().toString().padStart(2, '0');
  const formattedDateToday = `${year}-${month}-${day}`;
  if (value < formattedDateToday) {
    return false;
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

export function getStatusImage(status) {
  const orderStatus = ordersStatus.find(item => item.status === status);
  if (orderStatus) {
    return orderStatus.img;
  }
}

export function transformDate(date){
  const dateValue = new Date(date);
  const year = dateValue.getFullYear();
  const month = (dateValue.getMonth() + 1).toString().padStart(2, '0');
  const day = dateValue.getDate().toString().padStart(2, '0');
  const formattedDate = `${year}-${month}-${day}`;
  return formattedDate
}
export function validatePastHour(hour,date){
  const today = new Date()
  const formattedDate = transformDate(today)

  if(formattedDate == date){
    //Hora menor
    if(hour.substr(0,2)< today.getHours()){
      return false;
    }else{
      //Hora igual
      if(hour.substr(0,2)== today.getHours()){
        if(hour.substr(3,2) < today.getMinutes()){
          return false;
        }
      }
    }
  }
  if (formattedDate > date){
    return false
  }
  return true
}