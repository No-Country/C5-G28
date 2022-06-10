import React from 'react';
import "../styles/login.css";
import bgOrange from '../assets/img/imageOrange-bg.png';
import guyImg from '../assets/img/veri-guy.svg';
import bell from '../assets/img/campana.png';

const Verification = () => {
    return(
        <div className="my-containter verificacion-container">
            <div className="verificacion-layer">
                <img src={bell} alt="campana" className="img-responsive bell" />
                <img src={bgOrange} alt="bg-orange" className="bg-orange img-responsive" />
                <img src={guyImg} alt="sujeto parado" className="img-responsive guy" />
                <p className="verification-paragraph">Te hemos enviado un correo para verificar tu registro en <span className="jcb">JuniorCoderBook</span> <br />
                Revisa tu bandeja de entrada.
                </p>
            </div>
        </div>
    )
}

export default Verification;