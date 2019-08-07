import React from 'react';
import './back-btn.css';


const BackBtn = ({history}) => {
    return(
    <button className="back-button btn btn-light btn-lg" onClick={()=>history.goBack() }>Go Back</button>
    )
};
export default BackBtn;
