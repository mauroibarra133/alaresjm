import mercadopago from "mercadopago"
import { addOrder, searchIdPedido } from "./pedidos.controller";
import { addDescOrderTransf } from "./desc_pedidos";

export const receiveWebHook = async (req,res)=>{
  let items;
  let fecha,id_pago,id_usuario,direccion,nota,total,id_tipo_pago,id_estado,id_tipo_entrega;
    try {
        const payment = req.query
        if(payment.type === 'payment'){
            const data = await mercadopago.payment.findById(payment['data.id'])
            const fullData = data.body
            
            //Guardar en la base de datos;
            res.sendStatus(204)

            //Pedido
            fecha = fullData.date_approved
            id_usuario = 1
            id_pago = fullData.id
            direccion = fullData.additional_info.payer.address.street_name
            nota = fullData.metadata.nota_pedido
            total = fullData.transaction_amount
            id_tipo_pago = fullData.metadata.tipo_pago
            id_tipo_entrega = fullData.metadata.tipo_entrega
            id_estado = fullData.status === 'approved' ? 1 : null
           await addOrder(fecha,parseInt(id_pago),id_usuario,direccion,nota,parseInt(total),parseInt(id_tipo_pago),parseInt(id_tipo_entrega))

            //Desc Pedido
            const id_pedido = await searchIdPedido(parseInt(id_pago))
            items = fullData.additional_info.items
            await addDescOrderTransf(items,id_pedido)
        }
    } catch (error) {
        console.log(error);
        return res.sendStatus(500).json({error: error.message})
    }
}   

export const create_preference =(req, res) => {
    let preference = {
      items: req.body.items,
      metadata: req.body.extra,
      payer: {
        name: req.body.name,
        address: {
            street_name: req.body.address || ''}
        },
      back_urls: {
        success: "http://localhost:5173/delivery",
        failure: "http://localhost:5173",
        pending: "",
      },
      notification_url:"https://ca7a-190-122-76-4.ngrok.io/webhook",
      auto_return: "approved"};
    
  
    mercadopago.preferences
      .create(preference)
      .then(function (response) {
        res.json({
          response: response.body
        });
      })
      .catch(function (error) {
        console.log(error);
      });
}