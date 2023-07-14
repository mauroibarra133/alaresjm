import {Router} from 'express'
const router = Router() //Creo el router
const mercadopago = require("mercadopago");
import config from "../config";
import { receiveWebHook, create_preference } from '../controllers/payments.controller';


mercadopago.configure({
  access_token: config.mp_access_token,
});


router.post("/create_preference",create_preference);

router.post('/webhook',receiveWebHook)
export default router