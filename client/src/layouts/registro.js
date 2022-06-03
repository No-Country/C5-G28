import React from 'react';
import { Link } from "react-router-dom";
import RegistroBG from '../assets/img/registroImgBG.png';
import BGPattern from '../assets/img/pattern_BGLogin.png';
import GoogleBtn from '../components/SocialButtons/googleBtn';
import FacebookBtn from '../components/SocialButtons/facebookBtn';

import '../components/SocialButtons/social.css';


function Registro() {
    return (
        <section className="ftco-section">
            <div className="container" style={{ backgroundImage: `url(${BGPattern})`}}>            
                <div className="row justify-content-center">
                    <div className="col-md-12 col-lg-10 bg-color mt-5">
                        <div className="wrap d-md-flex">
                            <div className="img " style={{backgroundImage: `url(${RegistroBG})`}}>
                            </div>
                        <div className="login-wrap p-4 p-md-5">
                            <div className="d-flex">
                                <div className="w-100 justify-content-center">
                                    <h3 className="mb-4">&#161; Bienvenido/a &#33;</h3>
                                </div>
                            </div>
                        <form className="signin-form">
                            <div className="form-group mb-3">
                                {/* input con clase form-control  */}
                               <input className="form-control" type="text" />
                            </div>
                            <div className="form-group mb-3">
                               {/* input clase form-control tipo password */}
                               <input className="form-control" type="password" />                              
                            </div>
                            <div className="form-group mb-3">
                                {/* input para repetir la clave */}
                               <input className="form-control" type="password" />
                            </div>
                            <div className="form-group">
                                <button type="submit" className="form-control btn btn-primary submit px-3">Registrate</button>
                            </div>                                                   
                            
                            <div className='form-group mb-3 d-flex'>
                                <p>Otras opciones</p>
                                <hr></hr>
                            </div>
                            <div className="form-group">
                               <FacebookBtn props="Registro" />
                            </div>
                            <div className="form-group">
                                <GoogleBtn props="Registro" />
                            </div>
                        </form>
                        <div className="w-100 text-center">
                            <p className="text-center">Ya tienes una Cuenta? </p>
                            <Link to="/login" className="text-center link">Ingresa aqui.</Link>
                        </div>
                        </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Registro;