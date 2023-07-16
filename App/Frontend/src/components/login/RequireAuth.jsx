/* eslint-disable react/prop-types */
import AuthService from '../../services/auth.services'
import {Navigate} from 'react-router-dom'

function RequireAuth({ children }) {
    let usuarioLogueado = AuthService.getUsuarioLogueado();
  console.log("Usuario logueado",usuarioLogueado);
  
    // verificar la autenticacion
    if (!usuarioLogueado) {
      return <Navigate to={"/login/" + children.type.name} />;
    }
    // un nivel mas de seguridad seria verificar la autorizacion...
    return children;
  }
  
  
  export  {RequireAuth};
  