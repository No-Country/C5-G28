import React from 'react';
import "../styles/login.css";
import bgOrange from '../assets/img/imageOrange-bg.png';
import guyImg from '../assets/img/veri-guy.svg';
import bell from '../assets/img/campana.png';
import axios from 'axios';
import { Link } from 'react-router-dom';
import { useParams } from 'react-router-dom';
const VerificationConfirm = () => {

    const userConfirmKey = useParams()
    const url = `http://localhost:3001/api/auth/confirm-account/`
    const sendConfirm = async() =>{
        try{
            await axios
            .get(url+userConfirmKey.confirm)
            .then(res=>{console.log('llamo')})
        }catch(error){
            console.log(error)
        }
    }
    sendConfirm();

    return(
        <div className="my-containter verificacion-container">
            <div className="verificacion-layer">
                <img src={bell} alt="campana" className="img-responsive bell" />
                <img src={bgOrange} alt="bg-orange" className="bg-orange img-responsive" />
                <img src={guyImg} alt="sujeto parado" className="img-responsive guy" />
                <p className="verification-paragraph">Tu cuenta esta confirmada, gracias por registrarte en <span className="jcb">JuniorCoderBook</span> <br />
                Ahora ya podes loguearte
                </p>
            </div>
            <Link to={"/"}>
                <span className="nav-text" style={{fontWeight:'bold',fontSize:'20px',marginBottom:'50px',color:'black'}}>Volver</span>
            </Link>
        </div>
    )
}

export default VerificationConfirm;