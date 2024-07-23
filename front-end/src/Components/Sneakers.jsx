import React, { useEffect, useState } from "react";
import Sneaker from "./Sneaker";
import "./Sneakers.css";


const API = import.meta.env.VITE_API_URL


const Sneakers = () => {
    const[sneakers, setSneakers] = useState([]);
    useEffect(() => {
        fetch(`${API}/sneakers`)
        .then((res) => {
            return res.json()
        })
        .then(resJSON => {
            console.log(resJSON)
            setSneakers(resJSON)
        })
        .catch((error) => console.error(error))
    }, [])

    return (
        <div className="sneakers-container">
          <h2 className="sneaker-head">Sneakers</h2>
          {sneakers.map(sneaker => {
            return <Sneaker key={sneaker.id} sneaker={sneaker} />
    })}
        </div>
      )
}

export default Sneakers;