/* eslint-disable react/prop-types */
import {  useId, useState } from "react";
import { addDoubt as updateDoubt } from "../../services/dudas.services";
import '../../styles/dashboard/modalDashboard.css'
import cruzIcon from '../../assets/images/xmark-solid.svg'
import userIcon from '../../assets/images/usuario.webp'
import blueMail from '../../assets/images/bluemail.webp'
import phoneImg from '../../assets/images/llamada-telefonica.webp'
import { useAuth } from "../../hooks/useAuth";

function Duda({modalDuda, closeModal}) {
    //Constants and states
    const duda = modalDuda.duda
    const stateId = useId()
    const [state, setEstado] = useState(duda.estado)
    const {auth} = useAuth()



    //functions
    async function handleState(event){
        if(auth.data.rol !== "Guest"){
            if(event.target.value != duda.estado){
                try {
                    await updateDoubt({
                        ...duda,
                        estado: event.target.value
                    })
                        setEstado(event.target.value)
                        duda.estado = event.target.value
                } catch (error) {
                    console.log(error);
                }  
            }
        }

    }

    return ( 
        <div className="dashboard__modal verduda__modal">
            <div className={`verpedido__modal-top dashboard__modal-top`}>
                <p className="verpedido__top-id dashboard__modal-top-id ">{`Duda nº ${duda.id}`}</p>
                <div className="verpedido__top-cruz dashboard__top-cruz">
                <img src={cruzIcon} alt="Cerrar"  onClick={closeModal}/>
                </div>
            </div>
            <div className="verpedido__estado dashboard__estado-modal">
                <select name={stateId} id={stateId} defaultValue={state} className="input"  onChange={handleState} disabled={auth.data.rol == "Guest" ? true : false}>
                    <option value="No Leido">No Leido</option>
                    <option value="Leido">Leido</option>
                    <option value="Respondido">Respondido</option>
                </select>
                {/* {errorDuda && ( <p className="error-status form-error">Error en el servidor</p>)} */}
            </div>
            <div className="verduda__info-wrapper">
                <div className="verduda__contact">
                    <div className="dashboard__dato verduda__dato">
                            <img src={userIcon} alt="Nombre Completo" className="dashboard-icon"/>
                            <div>{duda.nombreCompleto}</div>
                    </div>
                    <div className="dashboard__dato verduda__dato">
                            <img src={phoneImg} alt="Telefono" className="dashboard-icon"/>
                            <div>{'+'+duda.telefono}</div>
                    </div>
                    <div className="dashboard__dato verduda__dato">
                            <img src={blueMail} alt="Mail" className="dashboard-icon"/>
                            <div>{duda.mail}</div>
                    </div>
                </div>
                <div className="verduda__duda-wrapper">
                    <label >Duda</label>
                    <div><p>{duda.duda}</p></div>
                </div>
            </div>
    </div>
    )}


export default Duda;