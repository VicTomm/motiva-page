import React from 'react';
import { Link } from 'react-router-dom';

const SecretariaItem = ({ id, imagePath, objetivosP }) => (
        <div className="column is-one-quarter">
            <Link className="is-inverted is-outlined" to={`/secretaria/${id}`}>
                <div className="card card-secretaria">
                    <div className="card-image">
                        <figure className="image is-128x128 motiva-secretaria">
                            <img src={imagePath} alt="Motiva" width="100" height="100" />
                        </figure>
                    </div>
                    <div>
                        <div className="media">
                            <div className="media-content has-text-centered">
                                <p className="title is-4">{id}</p>
                            </div>
                        </div>
                    </div>
                </div>
            </Link>
        </div>
);

export default SecretariaItem;
