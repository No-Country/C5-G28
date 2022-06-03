import React from 'react';

const styles = {
    backgroundColor: '#081826'
}

const GoogleBtn = ({props}) => {
    return (
        <button type="button" className='form-control btn btn-primary px-3' style={styles}>{props} con su cuenta de Google</button>
    )
}

export default GoogleBtn;