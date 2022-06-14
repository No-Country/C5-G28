
import Sidebar from '../components/Sidebar/Sidebar';
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
    const { dispatch } = useContext(StoreContext);

    let Navigate = useNavigate();

     const {handleSubmit,errors,touched,getFieldProps} = useFormik({
    initialValues:{
        email:'',
        password:''
    },
    onSubmit:values => {
        try{
            console.log(values)
            axios.post(
                'http://localhost:3001/api/auth/signin',
                {email:values.email,password:values.password}
                ).then(res => {
                    let {id,token,userName,urlProfile} = res.data;
                    dispatch(loginState(id,token,userName,urlProfile));
                    //MySwal.fire({title:<h2> Logueado </h2>}).then(()=>{})
                    Navigate('/home')
                }).catch(error => MySwal.fire({title:<h2> Credenciales erroneas </h2>}))
        }catch(error){
            console.log(error)
        } 
    },
    validationSchema:Yup.object({
        email:Yup.string().email('formato no valido').required('email requerido'),
        password:Yup.string().required('password requerido')
    })
})
        
    

    const loginState = (id,token,userName,urlProfile) =>{
        return{
            type:types.authLogIn,
            payload:{id:id,token:token,userName:userName,urlProfile:urlProfile}
        }
    }



    return (
        <React.Fragment>
            <div className='container  '>
                <h1> Configuracion de </h1>
               <hr />
                <div className="form-group mb-5">
                    <img src="../profile 1.png" alt="" style={{ marginTop: "42px" }} className="logo2" />
                </div> 
                <form className="container" onSubmit={""}>
                    <div >
                        <div className="form-group  mb-4 row">
                            <label for="inputPassword" class="col-sm-4 col-form-label">Usuario</label>
                            <input className="form-control col-sm-5" type="text" required />
                        </div>
                        <div className="form-group mb-4 row">
                            <label for="inputPassword" class="col-sm-4 col-form-label">Url de foto de perfil</label>
                            <input className="form-control col-sm-5" type="date" required />
                        </div>
                        <div className="form-group mb-4 row">
                        <label for="inputPassword" class="col-sm-4 col-form-label"> correo electronico</label>
                            <input className="form-control col-sm-5" type="email" required />
                        </div>
{/*                         <div className="form-group mb-4 row">
                        <label for="inputPassword" class="col-sm-4 col-form-label">CONTRASEÑA</label>
                            <input className="form-control col-sm-5" type="password" required /> 
                        </div> */}
                        <div className="form-group mb-5">
                            <button type="submit" className=" btn btn-danger">  Guardar cambios </button>
                        </div>

                    </div>

                </form>
            </div>

        </React.Fragment >
    )
}

export default UserProfile;