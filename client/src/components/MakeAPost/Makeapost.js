import React,{useContext} from 'react';
import "../../styles/makeapost.css"
import Swal from 'sweetalert2';
import withReactContent from 'sweetalert2-react-content';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import { StoreContext } from "../../store/storeProvider";
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import CustomSelect from './CustomSelect'

const options = [
    { value: 'JavaScript', label: 'JavaScript Developer' },
    { value: 'React', label: 'React' },
    { value: 'Desarrollo Web', label: 'Desarrollo Web' },
    { value: 'UX/UI', label: 'UX/UI' },
    { value: 'Blockchain', label: 'Blockchain' }
  ]

const MakeAPost = () => {
    const MySwal = withReactContent(Swal)
    const { user } = useContext(StoreContext);   
    let Navigate = useNavigate();

    const {handleSubmit, errors,touched, getFieldProps,setFieldValue,values} = useFormik({
    initialValues:{
        username:'',
        title:'',
        categories:'', 
        content:'',
        urlPhoto:''
    },  
    onSubmit:(values) => {
        try{
            values.username = user.user.userName;
            
            axios.post(
                'http://localhost:3001/api/post/save/',
                {   
                    username:values.username,
                    title:values.title,
                    categories:values.categories,
                    content:values.content,
                    urlPhoto:values.content
                }).then(res => {
                    console.log(res)
                    MySwal.fire({title:<h2> Posteado </h2>}).then(()=>{Navigate('/home')})
                }).catch(error => MySwal.fire({title:<h2> fallo post </h2>}))
        }catch(error){
            console.log(error)
        } 
    },
    validationSchema:Yup.object({
        title:Yup.string().required('title requerido'),
        content:Yup.string().required('content requerido'),
        urlPhoto:Yup.string().required('urlPhoto requerido')
    })
})

    return (
    
    <section className='my-fkng-container'>

        
        <form className='container' onSubmit={handleSubmit}>
            <div className='my-position-button'>
                <button type="submit" className='my-button-form'>Publicar</button>
            </div>
            

            {/* CONTENEDOR HIJO DENTRO DEL FORM PADRE*/}
            <div className='my-child-container-form ' style={{padding:'4%'}}>


                {/* TÍTULO */}
                <label className="d-flex">
                    <input type="text" name="title" {...getFieldProps('title')} placeholder='Escribe un título aquí...' className='my-input-form my-title-input '/>
                </label>

                {/* ETIQUETAS */}
                <CustomSelect
                    
                    className='input'
                    onChange={value=>setFieldValue('categories',value.value)}
                    value={values.categories}
                    options={options}
                    />
                {errors.categories ? <div className='error'>{errors.categories}</div> : null}

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

{/*                 <select values={categories}  name="categories" label="categories" defaultValue="" size={1} className="d-flex form-control-lg my-title-input">
                    <option value="">Selecciona una categoría para tu post</option>
                    <option value="js">JavaScript</option>
                    <option value="react">React</option>
                    <option value="web-development">Desarrollo Web</option>
                    <option value="ux-ui">UX/UI</option>
                    <option value="crypto">Desarrollo Blockchain</option>
                </select>
 */}