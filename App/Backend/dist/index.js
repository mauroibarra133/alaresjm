import app from '../app';

// Controlar rutas
app.get('/', function (req, res) {
  res.send('Backend Iniciado');
});

app.listen(app.get('port'), function () {
  console.log('Sitio escuchando en el puerto', app.get('port'));
});
