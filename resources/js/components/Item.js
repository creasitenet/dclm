import React from 'react';
import {Link, useLocation } from 'react-router-dom';
import './Item.scss';

export default function Item() {
    const location = useLocation();
    const item = location.state;

    return (
        <>
            <div className="container">
                <Link to={'/'}>Retour</Link>
                <br />
                <br />
                <div className="row">
                    <div className="col"></div>
                    <div className="col-8">
                        <div className="item">
                            <h1>{item.title}</h1>
                            <img src={item.media} className="img-responsive" alt={item.title} />
                            <p className="description"> {item.description} </p>
                        </div>
                    </div>
                    <div className="col"></div>
                </div>
            </div>
        </>
    );
}

