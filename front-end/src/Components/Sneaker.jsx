import React from "react";
import { Link } from "react-router-dom";

const Sneaker = ({ sneaker }) => {
    return (
        <div>
            <Link to={`/sneakers/${sneaker.id}`}>{sneaker.model}</Link>
        </div>
    )
}

export default Sneaker;