import './App.css'
import Header from './components/Header'
import Home from './components/Home'
import Menu from './components/menu/Menu'
import ErrorPage from './components/ErrorPage'
import {BrowserRouter, Route, Routes} from 'react-router-dom'
import Delivery from './components/delivery/Delivery'
import Footer from './components/Footer'
import {CartProvider} from './context/cart';
import {AuthProvider} from './context/auth';
import ScrollToTop from './components/helpers/ScrollToTop'
import Login from './components/login/Login'
import RequireAuth from './components/login/RequireAuth'
import SignUp from './components/login/SignUp'
import Reservas from './components/reserva/Reservas'
import RankingClientes from './components/ranking/RankingClientes'
import MiCuenta from './components/login/MiCuenta'
import MisReservas from './components/reserva/MisReservas'
import MisPedidos from './components/pedidos/MisPedidos'
import DashBoard from './components/gestion/DashBoard'
import VerPedidos from './components/gestion/VerPedidos'

function App() {

  return (
    <BrowserRouter>
    <AuthProvider>
    <CartProvider>
      <ScrollToTop />
      <Header/>
      <Routes>
        <Route path='/' element={<Home/>}></Route>
        <Route path='/home' element={<Home/>}></Route>
        <Route path='/carta' element={<Menu/>}> </Route>
        <Route path='/ranking' element={<RankingClientes/>}> </Route>
        <Route path='/reservas' element={
          <RequireAuth>
              <Reservas/>
          </RequireAuth>
        }></Route>
        <Route path='/delivery' element={
          <RequireAuth>
              <Delivery/>
          </RequireAuth>}/>
        <Route path='/api/login' element={<Login/>}> </Route>  
        <Route path='/signup' element={<SignUp/>}> </Route>  
        <Route path='/mi-cuenta' element={
          <RequireAuth>
              <MiCuenta/>
          </RequireAuth>}> 
        </Route>  
        <Route path='/mis-reservas' element={
          <RequireAuth>
              <MisReservas/>
          </RequireAuth>}>
        </Route>  
        <Route path='/mis-pedidos' element={
          <RequireAuth>
              <MisPedidos/>
          </RequireAuth>}> 
        </Route>  
        <Route path='/dashboard' element={
          <RequireAuth>
              <DashBoard/>
          </RequireAuth>}> 
        </Route> 
        <Route path='/dashboard/ver-pedidos' element={<VerPedidos/>}></Route> 
        <Route path='*' element={<ErrorPage/>}> </Route>
      </Routes>
      <Footer/>
    </CartProvider>
    </AuthProvider>
    </BrowserRouter>
  )
}

export default App
