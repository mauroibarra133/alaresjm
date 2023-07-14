import mercadopago from "mercadopago"

export const receiveWebHook = async (req,res)=>{
  console.log(req.query);
    try {
        const payment = req.query
        if(payment.type === 'payment'){
            const data = await mercadopago.payment.findById(payment['data.id'])
            console.log(data);
            //Guardar en la base de datos;
            res.sendStatus(204)
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
      notification_url:"https://7833-190-122-76-4.ngrok.io/webhook",
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