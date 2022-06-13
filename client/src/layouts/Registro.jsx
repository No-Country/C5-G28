import React from 'react';
import axios from 'axios';
import { Link } from "react-router-dom";
import { useNavigate } from 'react-router-dom';
import Swal from 'sweetalert2';
import withReactContent from 'sweetalert2-react-content';
import { useFormik } from 'formik';
import * as Yup from 'yup';

import RegistroBG from '../assets/img/registroImgBG.png';
import "../styles/register.css";
import '../components/SocialButtons/social.css';

function Registro() {
    const MySwal = withReactContent(Swal)
    let Navigate = useNavigate();
    const {handleSubmit,errors,touched,getFieldProps} = useFormik({
        initialValues:{
            username:'',
            email:'',
            date:'',
            urlProfile:'',
            password:'',
            passwordConfirm:''
        },
        onSubmit:values => {
            console.log(values)

            try{
                axios.post(
                    'http://localhost:3001/api/auth/signup',
                    {username: values.username,
                    email: values.email,
                    bornDate: values.date,
                    urlProfile: values.urlProfile,
                    password: values.password,
                    passwordConfirm: values.passwordConfirm}
                    ).then(res => {
                        Navigate('/verificacion')
                    }).catch(error => MySwal.fire({title:<h2> Credenciales erroneas </h2>}))
            }catch(error){
                console.log(error)
            } 

        },
        validationSchema:Yup.object({
            username:Yup.string().max(15,'debe tener 15 caracteres o menos').required('required'),
            email:Yup.string().email('formato no valido').required('required'),
            password:Yup.string().max(14,'hasta 15 caracteres').min(8,'mas de 8 caracteres'),
            passwordConfirm:Yup.string().max(14,'hasta 15 caracteres').min(8,'mas de 8 caracteres').oneOf([Yup.ref('password')], 'Contraseñas distintas')
        })
    }) 
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
                        <form className="signin-form" onSubmit={handleSubmit}>
                            <div className="form-group mb-3">
                                {/* input con clase form-control  */}
                               <input className="form-control" {...getFieldProps('username')} type="text" placeholder="Ingresa tu nombre"/>
                            </div>
{/* 
                            <div className="form-group mb-3">
                                { input con clase form-control  }
                               <input className="form-control" {...getFieldProps('lastName')} type="text" placeholder="Ingresa tu apellido"/>
                            </div>
 */}
                            <div className="form-group mb-3">
                               {/* input clase form-control tipo email */}
                               <input className="form-control" {...getFieldProps('date')} type="date" placeholder="Ingresa tu fecha de nacimento"/>                              
                            </div>

                            <div className="form-group mb-3">
                               {/* input clase form-control tipo email */}
                               <input className="form-control" {...getFieldProps('email')} type="email" placeholder="Ingresa tu Email"/>
                               {touched.email && errors.email && <span>{errors.email}</span>}                              
                            </div>

                            <div className="form-group mb-3">
 
                               <input className="form-control" {...getFieldProps('urlProfile')} type="text" placeholder="url foto de perfil *op"/>
                            </div>
                           

                            <div className="form-group mb-3">
                               {/* input clase form-control tipo password */}
                               <input className="form-control" {...getFieldProps('password')} type="password" placeholder="Ingresa una contraseña"/>                              
                            </div>
    
                            <div className="form-group mb-3">
                                {/* input para repetir la clave */}
                               <input className="form-control" {...getFieldProps('passwordConfirm')} type="password" placeholder="Repetir tu contraseña"/>
                               {touched.passwordConfirm && errors.passwordConfirm && <span>{errors.passwordConfirm}</span>}
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