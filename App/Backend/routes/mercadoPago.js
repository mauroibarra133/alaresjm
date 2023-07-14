import {Router} from 'express'
const router = Router() //Creo el router
const mercadopago = require("mercadopago");
import config from "../config";


mercadopago.configure({
  access_token: config.mp_access_token,
});


router.post("/create_preference", (req, res) => {
    let preference = {
      items: [
        {
          title: req.body.title,
          currency_id: "ARS",
          unit_price: Number(req.body.price),
          quantity: Number(req.body.quantity),
        }
      ],
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
      total_amount: req.body.price,
      auto_return: "approved"    };
    
  
    mercadopago.preferences
      .create(preference)
      .then(function (response) {
        res.json({
          id: response.body.id,
          response: response
        });
      })
      .catch(function (error) {
        console.log(error);
      });
    // ...
});

export default router