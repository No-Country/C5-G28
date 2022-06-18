import React from 'react';
import axios from 'axios';

import { useNavigate } from 'react-router-dom';
import Swal from 'sweetalert2';
import withReactContent from 'sweetalert2-react-content';
import { useFormik } from 'formik';
import * as Yup from 'yup';

import RegistroBG from '../assets/img/registroImgBG.png';
import "../styles/register.css";
import '../components/SocialButtons/social.css';

function NuevaPassword() {
    const MySwal = withReactContent(Swal)
    let Navigate = useNavigate();
    const URL = process.env.REACT_APP_API_URL + "auth/forgot-password";
    const {handleSubmit,errors,touched,getFieldProps} = useFormik({
        initialValues:{
            username:''
        },
        onSubmit:values => {

            try{
                axios.put(
                    URL,
                    {
                        username: values.username
                    }
                    ).then(res => {
                        Navigate('/verificacion')
                    }).catch(error => MySwal.fire({title:<h2> Credenciales erroneas </h2>}))
            }catch(error){
                console.log(error)
            } 

        },
        validationSchema:Yup.object({
            username:Yup.string().max(25,'hasta 15 caracteres').min(4,'mas de 8 caracteres')
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
                                    <h3 className="mb-4">Recuperar password </h3>
                                </div>
                            </div>
                        <form className="signin-form" onSubmit={handleSubmit}>
                           

                            <div className="form-group mb-3">
                               {/* input clase form-control tipo password */}
                               <input className="form-control" {...getFieldProps('username')} type="username" placeholder="Ingrese su nombre de usuario"/>                              
                            </div>
                            {touched.username && errors.username && (
                                <span> {errors.username} </span>
                            )}
                            <div className="form-group">
                                <button type="submit" className="form-control btn btn-primary submit px-3">Enviar</button>
                            </div>                                                   
                            
                        </form>
                      
                        </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default NuevaPassword;