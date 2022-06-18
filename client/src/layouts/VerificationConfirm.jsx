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
    console.log(userConfirmKey)
    const URL = process.env.REACT_APP_API_URL+"auth/confirm-account/"+userConfirmKey.confirm;
    console.log(URL)
    const sendConfirm = async() =>{
        try{
            await axios
            .get(URL)
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