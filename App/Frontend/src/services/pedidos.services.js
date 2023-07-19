import axios from "axios"
export async function crearPedido(fecha_ISO, id_usuario,direccionCliente, notaPedido, total, id_tipo_pago,tipoEntrega, monto_cambio,items){
    const response = await axios.post("http://localhost:4000/pedidos",{
        fecha: fecha_ISO,
        id_usuario: id_usuario,
        direccion: direccionCliente,
        nota: notaPedido,
        total: parseInt(total),
        id_tipo_pago: parseInt(id_tipo_pago),
        id_estado: 28,
        id_tipo_entrega: parseInt(tipoEntrega),
        monto_cambio: parseInt(monto_cambio),
        items: items
      })
      return response
}