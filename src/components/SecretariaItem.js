import React from 'react';
import { Link } from 'react-router-dom';

const SecretariaItem = ({ id, imagePath, objetivosP }) => (
    <li>
        <Link to={`/secretaria/${id}`}>
            <img src={imagePath} alt="Motiva" />
            <h4>{id}</h4>
        </Link>
    </li>

);

export default SecretariaItem;
