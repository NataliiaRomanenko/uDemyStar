import React from 'react';
import {Redirect} from 'react-router-dom'


const LoginPage = ({isLogginedIn, onLogin}) => {
    if (isLogginedIn) {
        return <Redirect to='/secret' />
    }
    return(
        <div className='jumbotron'>
            <p>Login to see secret page</p>
            <button className="btn btn-primary" onClick={onLogin}>Login</button>

        </div>
    )
};

export default LoginPage;
