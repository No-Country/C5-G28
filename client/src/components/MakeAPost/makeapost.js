import React from 'react';
import "../../styles/makeapost.css"



const MakeAPost = () => {
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
                    <input type="text" name="title" placeholder='Escribe un título aquí...' className='my-input-form my-title-input '/>
                </label>

                {/* ETIQUETAS */}
                <select name="item" size={1} className="d-flex form-control-lg my-title-input">
                    <option value="" disabled selected>Selecciona una categoría para tu post</option>
                    <option value="js">JavaScript</option>
                    <option value="react">React</option>
                    <option value="web-development">Desarrollo Web</option>
                    <option value="ux-ui">UX/UI</option>
                    <option value="crypto">Desarrollo Blockchain</option>
                </select>


                {/* TEXTAREA */}
                <textarea name="textarea" rows="12" className='my-input-form my-text-area' placeholder='Escribe el contenido del artículo aquí...'></textarea>


                {/* CARGAR ENLACES */}
                <label className="d-flex">
                    <input type="text" name="enlace" placeholder='Ingresa una url de imágen aquí...' className='my-input-form my-input-url'/>
                </label>
                

            </div>

        </form>
        
    </section>
        
    );
};

export default MakeAPost;