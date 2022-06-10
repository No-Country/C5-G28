import React,{useContext} from 'react';
import { Link } from "react-router-dom";
import LoginImage from '../assets/img/loginImg.png';
import GoogleBtn from '../components/SocialButtons/GoogleBtn';
import FacebookBtn from '../components/SocialButtons/FacebookBtn';

import '../components/SocialButtons/social.css';

import { StoreContext } from '../store/storeProvider';
import "../styles/login.css";
import { types } from '../store/storeReducer';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import Swal from 'sweetalert2';
import withReactContent from 'sweetalert2-react-content';

function Login() {
        const MySwal = withReactContent(Swal)
        const { user,dispatch } = useContext(StoreContext);
  
        let Navigate = useNavigate();

        const handleSubmit = e =>{
            e.preventDefault();
            let email = e.target.email.value;
            let password = e.target.password.value;
            
            try{
                axios.post(
                    'http://localhost:3001/api/auth/signin',
                    {email:email,password:password}
                    ).then(res => {
                        console.log(res)
                        let {id,token,userName,urlProfile} = res.data;
                        dispatch(loginState(id,token,userName,urlProfile));
                        //MySwal.fire({title:<h2> Logueado </h2>}).then(()=>{})
                        Navigate('/home')
                    }).catch(error => MySwal.fire({title:<h2> Credenciales erroneas </h2>}))
            }catch(error){
                console.log(error)
            } 
        }

        const loginState = (id,token,userName,urlProfile) =>{
            return{
                type:types.authLogIn,
                payload:{id:id,token:token,userName:userName,urlProfile:urlProfile}
            }
        }
    console.log(user.user.id)
    if (user.user.id !== null){
        Navigate('/home')

    }
    return (
        <section className="form-section my-containter">
            <div className="container" style={{display:'grid'}}>            
                <div className="row justify-content-center">

                    
                    <div className="col-md-12 col-lg-10 bg-color mt-4 ">

                        <div className="wrap d-md-flex">

                            {/* CONTAINER IMÁGEN */}
                            <div className="img" style={{backgroundImage: `url(${LoginImage})`}}></div>
                            {/* ***************/}


                            <div className="login-wrap myp-4">

                                <div className="d-flex">
                                    <div className="w-100 justify-content-center">
                                        <h3 className="mb-4">&#161;Bienvenido/a&#33;</h3>
                                    </div>
                                </div>

                                <form onSubmit={handleSubmit} className="signin-form">

                                    <div className="form-group mb-2">
                                        <input className="form-control" type="text" name="email" placeholder="Ingresa tu e-mail" required />
                                    </div>

                                    <div className="form-group mb-2">
                                        <input className="form-control" type="password" name="password" placeholder="Ingresa tu contraseña" required />
                                    </div>
                                    <div className="w-100 text-md-right">
                                        <a href="/" className='link contrasena-olvidada'>¿Has olvidado tu contraseña?</a>
                                    </div>
                                    <div>
                                        <button type="submit" className="submit-btn form-control btn my-btn-primary submit">Ingresar</button>
                                    </div>                        
                                        
                                    
                                    
                                    <div className='form-group mb-3 d-flex my-fkg-margin'>
                                        <p>Otras opciones</p>
                                        <hr className='my-hr'></hr>
                                    </div>

                                    <div className="form-group my-fkg-margin">
                                        <GoogleBtn props="Ingresar" />
                                    </div>

                                    <div className="form-group my-fkg-margin">
                                        <FacebookBtn props="Ingresar" />
                                    </div>

                                </form>

                                <div className="w-100">
                                    <p className="text-center my-fkg-margin2">¿Aún no tienes una cuenta? </p>
                                    <Link data-toggle="tab" to="/registrarse" className="text-center link ">Registrate aquí</Link>
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