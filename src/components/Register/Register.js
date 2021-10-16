import React from 'react';
import { NavLink } from 'react-router-dom';
import useAuth from '../../hooks/useAuth';

const Register = () => {
    const { SignInUsingGoogle, signInUsingGithub } = useAuth();
    return (
        <div className="my-5">
            <h1>Please Register</h1>
            <NavLink to="/login">
                <button className="btn btn-sm btn-info text-light fw-bold">Already Register? <span className="text-dark">Click Here</span></button>
            </NavLink>
            <div>==============================</div>
            <div className="border container">
                <form>
                    <label htmlFor="email">Your Email: </label>
                    <input type="email" placeholder="Type Your Valid Email" id="email" />
                    <br />
                    <label htmlFor="password">Your Password: </label>
                    <input type="password" placeholder="Type Your Valid Email" id="password" />
                    <br />
                    <button className="btn-submit">Register</button>
                </form>
            </div>
            <div>==============================</div>
            <button onClick={SignInUsingGoogle} className="btn-primary me-1">Google LogIn</button>
            <button onClick={signInUsingGithub} className="btn-primary">GitHub LogIn</button>
        </div>
    );
};

export default Register;