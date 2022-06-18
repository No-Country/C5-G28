
import "../styles/userProfile.css";

import React,{useContext} from 'react';
import axios from 'axios';
import Swal from 'sweetalert2';
import withReactContent from 'sweetalert2-react-content';
import { useFormik } from 'formik';
import * as Yup from 'yup';

import { StoreContext } from '../store/storeProvider';
import { types } from '../store/storeReducer';


const UserProfile = () => {
    const MySwal = withReactContent(Swal)
    const URL = process.env.REACT_APP_API_URL + "auth/editprofile";
    const { user,dispatch } = useContext(StoreContext);
    const {handleSubmit,errors,touched,getFieldProps} = useFormik({
    initialValues:{
        id:user.id,
        token:user.token,
        username:user.userName,
        email:user.email,
        urlProfile:user.urlProfile,
        bornDate:user.bornDate
    },
    onSubmit:values => {
        try{
            axios.put(
                URL,
                {   
                    id:values.id,
                    token:values.token,
                    username:values.username,
                    email:values.email,
                    urlProfile:values.urlProfile,
                    bornDate:values.bornDate
                }
                ).then(res => {
                    if(res.status === 200){
                        dispatch(updateProfile(
                            values.id,
                            values.token,
                            values.username,
                            values.urlProfile,
                            values.email,
                            values.bornDate
                            ));}})
                       .then(()=>{ MySwal.fire({customClass: {confirmButton: 'swalBtnColor'},title:" Cambios realizados "})})
                       .catch(error => MySwal.fire({
                        customClass: {confirmButton: 'swalBtnColor'},
                        title:"Credenciales erroneas"
                      }))
        }catch(error){
            console.log(error)
        } 
    },
    validationSchema:Yup.object({
        username:Yup.string().max(25,'debe tener 15 caracteres o menos').required(),
        email:Yup.string().email('formato no valido').required('email requerido'),
        urlProfile:Yup.string()
    })
})
        
    const updateProfile = (id,token,userName,urlProfile,email,bornDate) =>{

        return{
            type:types.updateProfile,
            payload:
            {
                id:id,
                token:token,
                userName:userName,
                urlProfile:urlProfile,
                email:email,
                bornDate:bornDate
            }
        }
    }

    return (
        <>
                <div className="wrapper mt-5 w-75 m-auto form-container animate__animated animate__fadeIn">
            <header>
                 <div className="col-md-12 d-flex justify-content-center d-xl-block">
                <img
                    src={user.urlProfile}
                    alt=""
                    
                    className=" mt-4 img-fluid rounded-circle mb-3 img-thumbnail shadow-sm"
                />
        </div>
               {/*  <img src={user.urlProfile} alt="Imagen de usuario" className="img-responsive userImg" />
                <hr /> */}
            </header>
            
            <form onSubmit={handleSubmit}>
            <div className="form-group row">
                <label htmlFor="nombre" className="col-sm-2 col-form-label">Nombre de usuario</label>
                <div className="col-sm-10">
                    <input type="text" {...getFieldProps('username')} /* readonly */ className="form-control" /* value="Menganito" */ />
                </div>
                 {/* Para Manejo de Errores en el Formulario  */}
                 {touched.username && errors.username && (
                    <span> {errors.username} </span>
                  )}
            </div>
             <div className="form-group row">
                <label htmlFor="apellido" className="col-sm-2 col-form-label">url foto de perfil</label>
                <div className="col-sm-10">
                    <input type="text" {...getFieldProps('urlProfile')} /* readonly */ className="form-control" /* value="Fulano"  *//>
                </div>
                {touched.urlProfile && errors.urlProfile && (
                    <span> {errors.urlProfile} </span>
                  )}
            </div> 
            <div className="form-group row">
                <label htmlFor="fechaNacimiento" className="col-sm-2 col-form-label">Fecha Nacimiento</label>
                <div className="col-sm-10">
                    <input type="date" /* readonly */ {...getFieldProps('bornDate')} className="form-control"    /* disabled */ />
                </div>
                {touched.bornDate && errors.bornDate && (
                    <span> {errors.bornDate} </span>
                  )}
            </div>
            <div className="form-group row">
                <label htmlFor="correo" className="col-sm-2 col-form-label">Correo Electronico</label>
                <div className="col-sm-10">
                    <input type="text" /* readonly */ {...getFieldProps('email')} className="form-control" /* value="meganitofulano@mail.com" */ />
                </div>
            </div>
            {touched.email && errors.email && (
                    <span> {errors.email} </span>
                  )}
            <div className="btn-container">
                <button type="submit" className="btn btn-ConfigUser mb-4">Guardar Cambios</button>
            </div>               
            </form>
            
        </div>
        </ >
    )
}

export default UserProfile;