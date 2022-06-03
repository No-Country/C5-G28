import React from 'react';

const styles = {
    backgroundColor: '#7b7b7b'
}

const FacebookBtn = ({props}) => {
    return (
        <button type="button" className="form-control btn btn-primary px-3" style={styles}>{props} con su cuenta de Facebook</button>        
    )
}

export default FacebookBtn;