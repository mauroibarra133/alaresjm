export default function generatePaymentID() {
    const timestamp = Date.now(); // Obtiene el timestamp actual
    const randomNum = Math.floor(Math.random() * 1000000); // Genera un número aleatorio de 6 dígitos
    const paymentID = `${timestamp}${randomNum}`.slice(0,9); // Combina el timestamp y el número aleatorio
  
    return paymentID;
  }
  