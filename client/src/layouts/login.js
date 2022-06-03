import React,{useContext} from 'react';
import { Link, Navigate } from "react-router-dom";
import LoginImage from '../assets/img/loginImg.png';
import BGPattern from '../assets/img/pattern_BGLogin.png';
import GoogleBtn from '../components/SocialButtons/googleBtn';
import FacebookBtn from '../components/SocialButtons/facebookBtn';
import { useNavigate } from 'react-router-dom';
import '../components/SocialButtons/social.css';
import { UserContext } from '../hooks/UserContext';

function Login() {
    let Navigate = useNavigate();
    const {setUser} = useContext(UserContext);
    const handleSubmit = e => {
        e.preventDefault();
        let email = e.target.email.value;
        let password = e.target.password.value;

        if(email === '1' && password ==='1'){
            console.log('funka')
            setUser(true)
            Navigate('/home')
        }
    }

    return (
        <section className="form-section">
            <div className="container" style={{ backgroundImage: `url(${BGPattern})`}}>            
                <div className="row justify-content-center">
                    <div className="col-md-12 col-lg-10 bg-color mt-5">
                        <div className="wrap d-md-flex">
                            <div className="img " style={{backgroundImage: `url(${LoginImage})`}}>
                            </div>
                        <div className="login-wrap p-4 p-md-5">
                            <div className="d-flex">
                                <div className="w-100 justify-content-center">
                                    <h3 className="mb-4">&#161; Bienvenido/a &#33;</h3>
                                </div>
                            </div>
                        <form onSubmit={handleSubmit}className="signin-form">
                        <div className="form-group mb-3">
                               <input className="form-control" type="text" name="email" required />
                            </div>
                            <div className="form-group mb-3">
                               <input className="form-control" type="password" name="password" required />
                            </div>
                            <div className="form-group">
                                <button type="submit" className="form-control btn btn-primary submit px-3">Ingresar</button>
                            </div>                        
                                
                            <div className="w-100 text-md-right mb-3">
                                <a href="#" className='link'>Has Olvidado tu contraseña</a>
                            </div>
                            
                            <div className='form-group mb-3 d-flex'>
                                <p>Otras opciones</p>
                                <hr></hr>
                            </div>
                            <div className="form-group">
                                <GoogleBtn props="Ingresar" />
                            </div>
                            <div className="form-group">
                                <FacebookBtn props="Ingresar" />
                            </div>
                        </form>
                        <div className="w-100 text-center">
                            <p className="text-center">Aun no tienes Cuenta? </p>
                            <Link data-toggle="tab" to="/registrarse" className="text-center link">Registrate aqui.</Link>
                        </div>
                        </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Login;