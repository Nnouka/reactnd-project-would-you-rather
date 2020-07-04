import React from 'react';
import { Link } from 'react-router-dom';
import  requireAuth from '../guest/Authenticator';

const _404 = (props) => {
    return (
        <div className="header center logo-bg">
            <h1>Page Not Found</h1>
            <p className="alert-danger">
                The page you are trying to access is not found on this server! 
                <br /> <Link to='/home' className='app-link'>Home</Link>
            </p>
        </div>
    )
}

export default requireAuth(_404, '/not-found');