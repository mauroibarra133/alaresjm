import  { useState } from 'react';
import '../../styles/login/miCuenta.css'

const MiCuenta = () => {
  // Estado para almacenar los datos de la cuenta
  const [cuenta, setCuenta] = useState({
    nombre: 'John',
    apellido: 'Doe',
    mail: 'john.doe@example.com',
    contrasena: '********',
  });

  // Función para manejar los cambios en los campos
  const handleChange = (e) => {
    const { name, value } = e.target;
    setCuenta((prevCuenta) => ({ ...prevCuenta, [name]: value }));
  };

  return (
    <div className="micuenta__container">
      <h2>Mi Cuenta</h2>
      <div className="micuenta__info">
            <div className="micuenta__field">
                <label htmlFor="nombre">Nombre:</label>
                <input
                    type="text"
                    name="nombre"
                    value={cuenta.nombre}
                    onChange={handleChange}
            />
            </div>
            <div className="micuenta__field">
                <label htmlFor="apellido">Apellido:</label>
                <input
                    type="text"
                    name="apellido"
                    value={cuenta.apellido}
                    onChange={handleChange}
                />
            </div>
            <div className="micuenta__field">
                <label htmlFor="mail">Mail:</label>
                <input
                    type="email"
                    name="mail"
                    value={cuenta.mail}
                    onChange={handleChange}
                />
            </div>
            <div className="micuenta__field">
                <label htmlFor="contrasena">Contraseña:</label>
                <input
                    type="password"
                    name="contrasena"
                    value={cuenta.contrasena}
                    onChange={handleChange}
                />
            </div>
      </div>
    </div>
  );
};

export default MiCuenta;
