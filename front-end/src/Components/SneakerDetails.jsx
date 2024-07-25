import React, { useEffect } from "react";
import { useState } from "react";
import {Link, useParams, useNavigate } from "react-router-dom";
import'./SneakerDetails.css';


const API = import.meta.env.VITE_API_URL;

const SneakerDetails = () => {
    const [sneaker, setSneakers] = useState({
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
            setSneakers(resJSON)
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
      <p>{sneaker.brand}</p>
      <p>{sneaker.model}</p>
      <p>{sneaker.price}</p>
      <p>{sneaker.category}</p>
      <p>{sneaker.color}</p>
      <p>{sneaker.is_favorite}</p>
      <Link to={`/sneakers/${id}/edit`}>
        <button className="edit-button">Edit</button>
      </Link>
      <button className="delete-button" onClick={handleDelete}>Delete</button>
    </div>
      )
}

export default SneakerDetails;