import React from 'react';
import axios from 'axios';

import { useNavigate, useParams } from 'react-router-dom';
import Swal from 'sweetalert2';
import withReactContent from 'sweetalert2-react-content';
import { useFormik } from 'formik';
import * as Yup from 'yup';

import RegistroBG from '../assets/img/registroImgBG.png';
import "../styles/register.css";
import '../components/SocialButtons/social.css';

function NuevaPassword() {
    const {confirm} = useParams()
    const MySwal = withReactContent(Swal)
    let Navigate = useNavigate();
    const URL = process.env.REACT_APP_API_URL + "auth/new-password"
    const {handleSubmit,errors,touched,getFieldProps} = useFormik({
        initialValues:{
            password:'',
            passwordConfirm:''
        },
        onSubmit:values => {

            try{

                axios.put(
                    URL,
                    {newPassword: values.password},
                    {headers:{'Content-Type': 'application/json','reset-token':confirm}}  
                    ).then(res => {
                        Navigate('/verificacion')
                    }).catch(error =>  MySwal.fire({customClass: {confirmButton: 'swalBtnColor'},title:" surgio un problema, intenta nuevamente "}))
            }catch(error){
                MySwal.fire({customClass: {confirmButton: 'swalBtnColor'},title:" surgio un problema "})
            } 

        },
        validationSchema:Yup.object({
            password:Yup.string().max(14,'hasta 15 caracteres').min(5,'mas de 8 caracteres'),
            passwordConfirm:Yup.string().max(14,'hasta 15 caracteres').min(5,'mas de 8 caracteres').oneOf([Yup.ref('password')], 'Contraseñas distintas')
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
                                    <h3 className="mb-4">&#161;Ingresa tu nueva contraseña &#33;</h3>
                                </div>
                            </div>
                        <form className="signin-form" onSubmit={handleSubmit}>
                           

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