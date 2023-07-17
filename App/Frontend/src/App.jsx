import './App.css'
import Header from './components/Header'
import Home from './components/Home'
import Carta from './components/carta/Carta'
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

function App() {

  return (
    <BrowserRouter>
    <AuthProvider>
    <CartProvider>
      <ScrollToTop />
      <Header/>
      <Routes>
        <Route path='/' element={<Home/>}></Route>
        <Route path='/carta' element={<Carta/>}> </Route>
        <Route path='/reservas' element={<div>Reservas</div>}></Route>
        <Route path='/delivery' element={
          <RequireAuth>
              <Delivery/>
          </RequireAuth>}/>
        <Route path='/api/login' element={<Login/>}> </Route>  
        <Route path='/signup' element={<SignUp/>}> </Route>  
        <Route path='*' element={<ErrorPage/>}> </Route>
      </Routes>
      <Footer/>
    </CartProvider>
    </AuthProvider>
    </BrowserRouter>
  )
}

export default App
