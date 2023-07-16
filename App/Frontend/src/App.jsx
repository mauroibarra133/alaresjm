import './App.css'
import Header from './components/Header'
import Home from './components/Home'
import Carta from './components/carta/Carta'
import ErrorPage from './components/ErrorPage'
import {BrowserRouter, Route, Routes} from 'react-router-dom'
import Delivery from './components/delivery/Delivery'
import Footer from './components/Footer'
import {CartProvider} from './context/cart';
import ScrollToTop from './components/helpers/ScrollToTop'
import Login from './components/login/Login'

function App() {

  return (
    <BrowserRouter>
    <CartProvider>
      <ScrollToTop />
      <Header/>
      <Routes>
        <Route path='/' element={<Home/>}></Route>
        <Route path='/carta' element={<Carta/>}> </Route>
        <Route path='/reservas' element={<div>Reservas</div>}></Route>
        <Route path='/delivery' element={<Delivery/>}> </Route>  
        <Route path='/api/login' element={<Login/>}> </Route>  
        <Route path='*' element={<ErrorPage/>}> </Route>
      </Routes>
      <Footer/>
    </CartProvider>

    </BrowserRouter>
  )
}

export default App
