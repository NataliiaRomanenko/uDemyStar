import React from 'react';
import './back-btn.css';


const BackBtn = ({history, url}) => {
    return(
    <button className="back-button btn btn-light btn-lg" onClick={()=>history.goBack() }>Go back to {url}</button>
    )
};
export default BackBtn;
