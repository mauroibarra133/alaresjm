import '../../styles/dashboard/verpedidos.css'

function VerPedidos() {
    return ( 
        <div className="verpedidos">
            <div className="verpedidos__fechas">
                <div className="verpedidos__fecha-ayer button ">Ayer</div>
                <input className="verpedidos__fecha-input" type="date"></input>
                <div className="verpedidos__fecha-hoy button">Hoy</div>
            </div>
            <div className="verpedidos__pedidos">
                <div className="verpedidos__header">
                    <div className="verpedidos__header-column">Hora</div>
                    <div className="verpedidos__header-column">Cliente</div>
                    <div className="verpedidos__header-column">Direccion</div>
                    <div className="verpedidos__header-column">Tipo Pago</div>
                    <div className="verpedidos__header-column">Tipo Entrega</div>
                    <div className="verpedidos__header-column">Nota</div>
                    <div className="verpedidos__header-column">Total</div>
                    <div className="verpedidos__header-column">Estado</div>
                </div>
                <div className="verpedidos__body">
                    <div className="verpedidos__body-row">
                        <div className="verpedidos__dato">14:00</div>
                        <div className="verpedidos__dato">Mauro Ibarra</div>
                        <div className="verpedidos__dato">Calle 170 BIS 893</div>
                        <div className="verpedidos__dato">Transferencia</div>
                        <div className="verpedidos__dato">Delivery</div>
                        <div className="verpedidos__dato">Con muchas papas porfa</div>
                        <div className="verpedidos__dato">$4680</div>
                        <div className="verpedidos__dato">
                            <select name="" id="" className='verpedidos__dato-estado'>
                                <option value="A confirmar">A confirmar</option>
                                <option value="Confirmado">Confirmado</option>
                                <option value="En Preparacion">En Preparacion</option>
                            </select>
                        </div>




                    </div>
                    <div className="verpedidos__body-row">
                        <div className="verpedidos__dato">14:00</div>
                        <div className="verpedidos__dato">Mauro Ibarra</div>
                        <div className="verpedidos__dato">Calle 170 BIS 893 </div>
                        <div className="verpedidos__dato">Transferencia</div>
                        <div className="verpedidos__dato">Delivery</div>
                        <div className="verpedidos__dato">Con muchas papas porfa</div>
                        <div className="verpedidos__dato">$4680</div>
                        <div className="verpedidos__dato">
                            <select name="" id="" className='verpedidos__dato-estado'>
                                <option value="A confirmar">A confirmar</option>
                                <option value="Confirmado">Confirmado</option>
                                <option value="En Preparacion">En Preparacion</option>
                            </select>
                        </div>




                    </div>
                </div>
            </div>
        </div>
     );
}

export default VerPedidos;