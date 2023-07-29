import {  useState } from "react";
import { AgregarDuda as updateDuda } from "../../services/dudas.services";
import '../../styles/dashboard/pedido.css'
import cruzIcon from '../../assets/images/xmark-solid.svg'
import userIcon from '../../assets/images/usuario.png'
import blueMail from '../../assets/images/bluemail.png'
import phoneImg from '../../assets/images/llamada-telefonica.png'

/* eslint-disable react/prop-types */
function Duda({modalDuda, closeModal}) {
    const duda = modalDuda.duda
    const [estado, setEstado] = useState(duda.estado)

    async function handleState(event){
        if(event.target.value != duda.estado){
            const response = await updateDuda({
                ...duda,
                estado: event.target.value
            })
            console.log(response);
            if(response.status >= 200 && response.status < 300){
                setEstado(event.target.value)
                duda.estado = event.target.value
                
            }else{
                console.log('No se pudo wn');
            }
        }
    }
    return ( 
        <div className="dashboard__modal verduda__modal">
            <div className={`verpedido__modal-top dashboard__modal-top`}>
                <p className="verpedido__top-id dashboard__modal-top-id ">{`Duda nº ${duda.id}`}</p>
                <div className="verpedido__top-cruz dashboard__top-cruz">
                <img src={cruzIcon} alt=""  onClick={closeModal}/>
                </div>
            </div>
            <div className="verpedido__estado dashboard__estado-modal">
                <select name="" id="" defaultValue={estado}   onChange={handleState}>
                    <option value="No Leido">No Leido</option>
                    <option value="Leido">Leido</option>
                    <option value="Respondido">Respondido</option>
                </select>
            </div>
            <div className="verduda__info-wrapper">
                <div className="verduda__contact">
                    <div className="dashboard__dato verduda__dato">
                            <img src={userIcon} alt="" className="dashboard-icon"/>
                            <div>{duda.nombreCompleto}</div>
                    </div>
                    <div className="dashboard__dato verduda__dato">
                            <img src={phoneImg} alt="" className="dashboard-icon"/>
                            <div>{'+'+duda.telefono}</div>
                    </div>
                    <div className="dashboard__dato verduda__dato">
                            <img src={blueMail} alt="" className="dashboard-icon"/>
                            <div>{duda.mail}</div>
                    </div>
                </div>
                <div className="verduda__duda-wrapper">
                    <label htmlFor="">Duda</label>
                    <div><p>{duda.duda}</p></div>
                </div>
            </div>
    </div>
    )}


export default Duda;