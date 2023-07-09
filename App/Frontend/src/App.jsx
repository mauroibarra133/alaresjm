import './App.css'
import Header from './components/Header'
import Home from './components/Home'
import Carta from './components/carta/carta'
import ErrorPage from './components/ErrorPage'
import {BrowserRouter, Route, Routes} from 'react-router-dom'
function App() {

  return (
    <BrowserRouter>
      <Header/>
      <Routes>
        <Route path='/' element={<Home/>}></Route>
        <Route path='/carta' element={<Carta/>}> </Route>
        <Route path='/reservas' element={<div>Reservas</div>}> </Route>
        <Route path='/delivery' element={<div>Delivery</div>}> </Route>  
        <Route path='*' element={<ErrorPage/>}> </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App
