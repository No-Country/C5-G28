import React from 'react';
import LogoFacebook from "../../assets/img/facebook-svgrepo-com.svg";
import "../../styles/logos.css"

const styles = {
    backgroundColor: '#7b7b7b',
    fontSize: "clamp(.7rem, 1vw, .9rem)", 
    borderColor: "#7b7b7b",
    borderRadius: "5px",
    boxShadow: ".1rem .1rem .5rem #00000040"
    
}



const FacebookBtn = ({props}) => {
    return (
        <button type="button" className="form-control btn btn-primary px-3" style={styles}>
            <img src={LogoFacebook} alt="logo facebook" className='btn-logo'></img><span>  </span>{props} con Facebook
        </button>        
    )
}

export default FacebookBtn;