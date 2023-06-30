import app from '../app';

//Controlar rutas
app.get('/',(req,res)=>{
    res.send('Backend Iniciado')
})



app.listen(app.get('port'),()=>{
 console.log('Sitio escuchando en el puerto', app.get('port'));
})
