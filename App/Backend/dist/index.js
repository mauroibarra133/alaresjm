"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
var _app = _interopRequireDefault(require("../app"));
//Controlar rutas
_app["default"].get('/', function (req, res) {
  res.send('Backend Iniciado');
});
_app["default"].listen(_app["default"].get('port'), function () {
  console.log('Sitio escuchando en el puerto', _app["default"].get('port'));
});