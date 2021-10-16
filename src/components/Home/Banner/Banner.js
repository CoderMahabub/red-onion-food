import React from 'react';
import './Banner.css';

const Banner = () => {
    return (
        <div className="banner-section container-fluid d-flex justify-content-center align-items-center flex-column">
            <h1>Best food waiting for your belly</h1>
            <div className="input-group mb-3 container w-50">
                <input type="text" className="form-control btn-outline-danger text-dark bg-light" placeholder="Search for food" />
                <div className="input-group-append">
                    <button className="btn btn-outline-secondary btn-danger text-light btn-outline-danger" type="button">Search</button>
                </div>
            </div>
        </div>
    );
};

export default Banner;