import React, { useEffect } from "react";
import { useState } from "react";
import {Link, useParams, useNavigate } from "react-router-dom";
import'./SneakerDetails.css';


const API = import.meta.env.VITE_API_URL;

const SneakerDetails = () => {
    const [sneaker, setSneaker] = useState({
        brand: '',
        model: '',
        price: 0,
        category: '',
        color: '',
        is_favorite: false
    })
    let { id } = useParams();
    let navigate = useNavigate();

    useEffect(() => {
        fetch(`${API}/sneakers/${id}`)
        .then((res) => {
            return res.json();
        })
        .then(resJSON => {
            console.log(resJSON)
            setSneaker(resJSON)
        })
        .catch(() => {
          navigate("/notfound");
        })
    }, [id, navigate]);

    const handleDelete = () => {
        fetch(`${API}/sneakers/${id}`,{
            method: "DELETE"
        })
        .then(() => {
            navigate("/sneakers")
        })
        .catch((error) => console.error(error));
    }

    return (
        <div className="sneaker-details">
      <h1>Sneakers Details</h1>
      <p> <b>Brand:</b> {sneaker.brand}</p>
      <p> <b>Model:</b>{sneaker.model}</p>
      <p> <b>Price:</b>{sneaker.price}</p>
      <p> <b>Category:</b>{sneaker.category}</p>
      <p> <b>Color:</b>{sneaker.color}</p>
      <p> <b>Favorite:</b>{sneaker.is_favorite ? "Yes": "No"}</p>
      <Link to={`/sneakers/${id}/edit`}>
        <button className="edit-button">Edit</button>
      </Link>
      <button className="delete-button" onClick={handleDelete}>Delete</button>
    </div>
      )
}

export default SneakerDetails;