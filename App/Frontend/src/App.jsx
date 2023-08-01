import './App.css'
import { lazy, Suspense } from 'react'
import Header from './components/Header'
import Home from'./components/Home'
import Footer from'./components/Footer'
import Loading from './components/Loading'
const Menu = lazy(()=> import('./components/menu/Menu'))
const ErrorPage = lazy(()=> import('./components/ErrorPage'))
const Delivery = lazy(()=> import('./components/delivery/Delivery'))
const ScrollToTop = lazy(()=> import('./components/helpers/ScrollToTop'))
const Login = lazy(()=> import('./components/login/Login'))
import RequireAuth from './components/login/RequireAuth'
const SignUp = lazy(()=> import('./components/login/SignUp'))
const Reservas = lazy(()=> import('./components/reserva/Reservas'))
const RankingClientes = lazy(()=> import('./components/ranking/RankingClientes'))
const MyAccount = lazy(()=> import('./components/login/MyAccount'))
const MisReservas = lazy(()=> import('./components/reserva/MisReservas'))
const MisPedidos = lazy(()=> import('./components/pedidos/MisPedidos'))
const DashBoard = lazy(()=> import('./components/gestion/DashBoard'))
const VerPedidos = lazy(()=> import('./components/gestion/VerPedidos'))
import {AuthProvider} from './context/auth';
import {CartProvider} from './context/cart';
import {BrowserRouter, Route, Routes} from 'react-router-dom'
function App() {

  return (
    <BrowserRouter>
    <AuthProvider>
    <CartProvider>
      <ScrollToTop />
      <Header/>
        <Suspense fallback={<Loading/>}>
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
              <MyAccount/>
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
        </Suspense>
      <Footer/>
    </CartProvider>
    </AuthProvider>
    </BrowserRouter>
  )
}

export default App
