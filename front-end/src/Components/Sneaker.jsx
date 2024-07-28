import React from "react";
import { Link } from "react-router-dom";
import './Sneaker.css';

const Sneaker = ({ sneaker }) => {
    return (
        <div className="sneaker-link">
            <Link className="link" to={`/sneakers/${sneaker.id}`}>{sneaker.model} </Link>
        </div>
    )
}

export default Sneaker;