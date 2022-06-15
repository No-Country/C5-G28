
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
    const { user,dispatch } = useContext(StoreContext);
    console.log(user)
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
                'http://localhost:3001/api/auth/editprofile',
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
                            values.bornDate));
                        MySwal.fire({title:<h2> Cambios realizados </h2>}).then(()=>{})
                    }
                }).catch(error => MySwal.fire({title:<h2> Credenciales erroneas </h2>}))
        }catch(error){
            console.log(error)
        } 
    },
    validationSchema:Yup.object({
        username:Yup.string().max(15,'debe tener 15 caracteres o menos').required(),
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
                <div className="mt-5 w-75 m-auto form-container">
            <header>
                <img src={user.urlProfile} alt="Imagen de usuario" className="img-responsive userImg" />
                <hr />
            </header>
            
            <form onSubmit={handleSubmit}>
            <div className="form-group row">
                <label htmlFor="nombre" className="col-sm-2 col-form-label">Nombre de usuario</label>
                <div className="col-sm-10">
                    <input type="text" {...getFieldProps('username')} /* readonly */ className="form-control" /* value="Menganito" */ />
                </div>
                 {/* Para Manejo de Errores en el Formulario  */}
    
            </div>
             <div className="form-group row">
                <label htmlFor="apellido" className="col-sm-2 col-form-label">url foto de perfil</label>
                <div className="col-sm-10">
                    <input type="text" {...getFieldProps('urlProfile')} /* readonly */ className="form-control" /* value="Fulano"  *//>
                </div>
            </div> 
            <div className="form-group row">
                <label htmlFor="fechaNacimiento" className="col-sm-2 col-form-label">Fecha Nacimiento</label>
                <div className="col-sm-10">
                    <input type="date" /* readonly */ {...getFieldProps('bornDate')} className="form-control"    /* disabled */ />
                </div>
            </div>
            <div className="form-group row">
                <label htmlFor="correo" className="col-sm-2 col-form-label">Correo Electronico</label>
                <div className="col-sm-10">
                    <input type="text" /* readonly */ {...getFieldProps('email')} className="form-control" /* value="meganitofulano@mail.com" */ />
                </div>
            </div>
{/*             <div className="form-group row">
                <label htmlFor="contraseña" className="col-sm-2 col-form-label">Contraseña</label>
                <div className="col-sm-10">
                    <input type="text" readonly className="form-control" value="Contraseña" />
                    <span className={isShow ? 'fa fa-icon fa-eye-slash password-icon' : 'fa fa-icon fa-eye password-icon' } onClick={showPassword}></span>
                </div>
            </div>     */}   
            <div className="btn-container">
                <button type="submit" class="btn btn-ConfigUser">Guardar Cambios</button>
            </div>               
            </form>
            
        </div>
         {/*    <div className='container  '>
                <h1> Configuracion de </h1>
               <hr />
                <div className="form-group mb-5">
                    <img src={user.user.urlProfile} alt="" style={{ marginTop: "42px" }} className="logo2" />
                </div> 
                <form className="container" onSubmit={handleSubmit}>
                    <div >
                        <div className="form-group  mb-4 row">
                            <label for="inputPassword" class="col-sm-4 col-form-label">Usuario</label>
                            <input className="form-control col-sm-5" {...getFieldProps('username')} type="text" required />
                        </div>
                        <div className="form-group mb-4 row">
                            <label for="inputPassword" class="col-sm-4 col-form-label">Url de foto de perfil</label>
                            <input className="form-control col-sm-5" {...getFieldProps('urlProfile')} type="text" required />
                        </div>
                        <div className="form-group mb-4 row">
                        <label for="inputPassword" class="col-sm-4 col-form-label"> correo electronico</label>
                            <input className="form-control col-sm-5" {...getFieldProps('email')} type="email" required />
                        </div>
                        <div className="form-group mb-5">
                            <button type="submit" className=" btn btn-danger">  Guardar cambios </button>
                        </div>
                    </div>
                </form>
            </div> */}
        </ >
    )
}

export default UserProfile;