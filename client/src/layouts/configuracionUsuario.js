import React, {useState} from 'react';
import userImg from '../assets/img/profile 1.png';
import '../styles/configuracionUsuario.css';

const Valid = () => {
    return (
        <div class="valid-feedback">
            Se ve Bien!
        </div>
    )
    }

    const Invalid = () => {
        return (
            <div class="invalid-feedback">
                Por favor corregir campo.
            </div>
        )
    }

    
    const ConfigUser = () => {
        const error = true;
        const [isShow, setShow] = useState(false)
        
        const showPassword = () => {
            setShow(!isShow)
            // Falta ocultar contraseña 
        }

    return (
        <div className="mt-5 w-75 m-auto form-container">
            <header>
                <img src={userImg} alt="Imagen de usuario" className="img-responsive userImg" />
                <hr />
            </header>
            
            <form >
            <div className="form-group row">
                <label htmlFor="nombre" className="col-sm-2 col-form-label">Nombre</label>
                <div className="col-sm-10">
                    <input type="text" readonly className="form-control" value="Menganito" />
                </div>
                 {/* Para Manejo de Errores en el Formulario  */}
                { !error ? <Valid /> : <Invalid />}
            </div>
            <div className="form-group row">
                <label htmlFor="apellido" className="col-sm-2 col-form-label">Apellido</label>
                <div className="col-sm-10">
                    <input type="text" readonly className="form-control" value="Fulano" />
                </div>
            </div>
            <div className="form-group row">
                <label htmlFor="fechaNacimiento" className="col-sm-2 col-form-label">Fecha Nacimiento</label>
                <div className="col-sm-10">
                    <input type="text" readonly className="form-control" value="10/08/98" disabled />
                </div>
            </div>
            <div className="form-group row">
                <label htmlFor="correo" className="col-sm-2 col-form-label">Correo Electronico</label>
                <div className="col-sm-10">
                    <input type="text" readonly className="form-control" value="meganitofulano@mail.com" />
                </div>
            </div>
            <div className="form-group row">
                <label htmlFor="contraseña" className="col-sm-2 col-form-label">Contraseña</label>
                <div className="col-sm-10">
                    <input type="text" readonly className="form-control" value="Contraseña" />
                    <span className={isShow ? 'fa fa-icon fa-eye-slash password-icon' : 'fa fa-icon fa-eye password-icon' } onClick={showPassword}></span>
                </div>
            </div>                      
            </form>
            <div className="btn-container">
                <button type="button" class="btn btn-ConfigUser">Guardar Cambios</button>
            </div>
        </div>
    )
}



export default ConfigUser;