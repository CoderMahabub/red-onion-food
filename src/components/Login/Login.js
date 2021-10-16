import React from 'react';
import { NavLink } from 'react-router-dom';
import useAuth from '../../hooks/useAuth';

const Login = () => {
    const { SignInUsingGoogle, signInUsingGithub } = useAuth();
    return (
        <div className="my-5">
            <h1>Please LogIn</h1>
            <NavLink to="/register">
                <button className="btn btn-sm btn-info text-light fw-bold">New to our site? <span className="text-dark">Click Here</span></button>
            </NavLink>
            <div>==============================</div>
            <button onClick={SignInUsingGoogle} className="btn-primary me-1">Google LogIn</button>
            <button onClick={signInUsingGithub} className="btn-primary">GitHub LogIn</button>
        </div>
    );
};

export default Login;