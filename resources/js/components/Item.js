import React from 'react';
import { Link } from 'react-router-dom';

export default function Item() {
    return (
        <>
            <div className="container">
                <Link to={'/'}>Retour</Link>
                <br />
                <div className="row">
                    <div className="col">
                        <div className="item">
                            I am Item component !
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

