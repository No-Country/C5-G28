import React,{useContext} from 'react';
import "../../styles/makeapost.css"
import Swal from 'sweetalert2';
import withReactContent from 'sweetalert2-react-content';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import { StoreContext } from "../../store/storeProvider";
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
const MakeAPost = () => {
    const MySwal = withReactContent(Swal)
    const { user } = useContext(StoreContext);

    let Navigate = useNavigate();

     const {handleSubmit,errors,touched,getFieldProps} = useFormik({
    initialValues:{
        username:'',
        title:'',
        category:'',
        content:'',
        urlPhoto:''
    },
    onSubmit:values => {
        try{
            console.log(values)
            axios.post(
                'http://localhost:3001/api/post/create',
                {username:user.user.username,title:values.title,category:values.category,content:values.content,urlPhoto:values.content}
                ).then(res => {
                    
                    MySwal.fire({title:<h2> Posteado </h2>}).then(()=>{Navigate('/home')})
                }).catch(error => MySwal.fire({title:<h2> fallo post </h2>}))
        }catch(error){
            console.log(error)
        } 
    },
    validationSchema:Yup.object({
        username:Yup.string().required('username requerido'),
        title:Yup.string().required('title requerido'),
        category:Yup.string().required('categoria requerida'),
        content:Yup.string().required('content requerido'),
        urlPhoto:Yup.string().required('urlPhoto requerido')
    })
})
    return (
    
    <section className='my-fkng-container'>

        
        <form className='container'>
            <div className='my-position-button'>
                <button className='my-button-form'>Publicar</button>
            </div>
            

            {/* CONTENEDOR HIJO DENTRO DEL FORM PADRE*/}
            <div className='my-child-container-form '>


                {/* TÍTULO */}
                <label className="d-flex">
                    <input type="text" name="title" {...getFieldProps('title')} placeholder='Escribe un título aquí...' className='my-input-form my-title-input '/>
                </label>

                {/* ETIQUETAS */}
                <select name="item" size={1} {...getFieldProps('category')} className="d-flex form-control-lg my-title-input">
                    <option value="" disabled selected>Selecciona una categoría para tu post</option>
                    <option value="js">JavaScript</option>
                    <option value="react">React</option>
                    <option value="web-development">Desarrollo Web</option>
                    <option value="ux-ui">UX/UI</option>
                    <option value="crypto">Desarrollo Blockchain</option>
                </select>


                {/* TEXTAREA */}
                <textarea name="textarea" {...getFieldProps('content')} rows="12" className='my-input-form my-text-area' placeholder='Escribe el contenido del artículo aquí...'></textarea>


                {/* CARGAR ENLACES */}
                <label className="d-flex">
                    <input type="text" {...getFieldProps('urlPhoto')} placeholder='Ingresa una url de imágen aquí...' className='my-input-form my-input-url'/>
                </label>
                

            </div>

        </form>
        
    </section>
        
    );
};

export default MakeAPost;