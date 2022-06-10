import React from 'react';
import { Link } from "react-router-dom";
import RegistroBG from '../assets/img/registroImgBG.png';
import "../styles/register.css";

import '../components/SocialButtons/social.css';


function Registro() {
/*     const url = 'http://localhost:3001/api/auth';
    handleSubmit = ( ) => {
        e.preventDefault();

        try{
            axios.post(
                url + '/signup',
                {email:email,password:password}
                ).then(res => {

                    MySwal.fire({title:<h2> Registrado </h2>}).then(()=>{})
                    Navigate('/verificacion')

                }).catch(error => MySwal.fire({title:<h2> Credenciales erroneas </h2>}))
        }catch(error){
            console.log(error)
        } 
    } */
    return (
        <section className="ftco-section my-containter">
            <div className="container" style={{display:'grid'}}>            
                <div className="row justify-content-center">
                    <div className="col-md-12 col-lg-10 bg-color mt-3">
                        <div className="wrap d-md-flex">
                            <div className="img " style={{backgroundImage: `url(${RegistroBG})`}}>
                            </div>
                        <div className="login-wrap p-4 p-md-5">
                            <div className="d-flex">
                                <div className="w-100 justify-content-center">
                                    <h3 className="mb-4">&#161; Bienvenido/a &#33;</h3>
                                </div>
                            </div>
                        <form className="signin-form" >
                            <div className="form-group mb-3">
                                {/* input con clase form-control  */}
                               <input className="form-control" type="text" placeholder="Ingresa tu nombre"/>
                            </div>

                            <div className="form-group mb-3">
                                {/* input con clase form-control  */}
                               <input className="form-control" type="text" placeholder="Ingresa tu apellido"/>
                            </div>

                            <div className="form-group mb-3">
                               {/* input clase form-control tipo email */}
                               <input className="form-control" type="date" placeholder="Ingresa tu fecha de nacimento"/>                              
                            </div>

                            <div className="form-group mb-3">
                               {/* input clase form-control tipo email */}
                               <input className="form-control" type="email" placeholder="Ingresa tu Email"/>                              
                            </div>

                           

                            <div className="form-group mb-3">
                               {/* input clase form-control tipo password */}
                               <input className="form-control" type="password" placeholder="Ingresa una contraseña"/>                              
                            </div>
    
                            <div className="form-group mb-3">
                                {/* input para repetir la clave */}
                               <input className="form-control" type="password" placeholder="Repetir tu contraseña"/>
                            </div>

                            <div className="form-group">
                                <button type="submit" className="form-control btn btn-primary submit px-3">Registrate</button>
                            </div>                                                   
                            
                        </form>
                        <div className="w-100 text-center">
                            <p className="text-center my-fkg-margin">¿Ya tienes una cuenta? </p>
                            <Link to="/" className="text-center link my-fkg-margin">Ingresa aqui</Link>
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