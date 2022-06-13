import React from 'react';
import {Link, useParams} from 'react-router-dom';

export default function Item() {
    let { id } = useParams();

    return (
        <>
            <div className="container">
                <Link to={'/'}>Retour</Link>
                <br />
                <div className="row">
                    <div className="col">
                        <div className="item">
                            I am Item component {id}
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

