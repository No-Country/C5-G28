import React from 'react';
import LogoGoogle from "../../assets/img/google-logo.svg";
import "../../styles/logos.css"

const styles = {
    backgroundColor: '#081826',
    fontSize: "clamp(.7rem, 1vw, .9rem)", 
    borderColor: "#7b7b7b",
    borderRadius: "5px",
    boxShadow: ".1rem .1rem .5rem #00000040"
}

const GoogleBtn = ({props}) => {
    return (
        <button type="button" className='form-control btn btn-primary px-3' style={styles}><img src={LogoGoogle} alt="logo google" className='btn-logo'></img><span>   </span>{props} con Google</button>
    )
}

export default GoogleBtn;