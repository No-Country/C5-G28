
import "../styles/UserProfile.module.css";

import React,{useContext} from 'react';
import { useNavigate } from 'react-router-dom';
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
     const {handleSubmit,errors,touched,getFieldProps} = useFormik({
    initialValues:{
        token:user.user.token,
        username:user.user.userName,
        email:user.user.email,
        urlProfile:user.user.urlProfile,
    },
    onSubmit:values => {
        try{
            axios.put(
                'http://localhost:3001/api/auth/editprofile',
                {token:values.token,username:values.username,email:values.email,urlProfile:values.urlProfile}
                ).then(res => {
                    if(res.status === 200){
                        dispatch(updateProfile(
                            values.token,
                            values.username,
                            values.urlProfile,
                            values.email));
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
        
    const updateProfile = (id,token,userName,urlProfile,email) =>{
        return{
            type:types.updateProfile,
            user:
            {
                id:id,
                token:token,
                userName:userName,
                urlProfile:urlProfile,
                email:email
            }
        }
    }

    return (
        <>
            <div className='container  '>
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
            </div>
        </ >
    )
}

export default UserProfile;