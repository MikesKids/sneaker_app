import React, { useEffect, useState } from "react";
import Sneaker from "./Sneaker";
import "./Sneakers.css";
import"./Card.css";
import Card from "./Card";


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

    const logos = {
      Nike: './assets/nike_logo.png',
      'Under Armour': './assets/under_armor.png',
      Adidas: './assets/adidas_logo.png',
      'New Balance': './assets/new_balance.png',
      Puma: './assets/puma.png',
      Reebok: './assets/reebok.png',
      Other: './assets/logo.png',
    }

    return (
        <div className="sneakers-container">
          <h2 className="sneaker-head">Sneakers</h2>
          {sneakers.map((sneaker) => (
            <Card key={sneaker.id} image={logos[sneaker.brand] || logos.Other}>
              <Sneaker className="sneaker-link" sneaker={sneaker} />
            </Card>
          ))}
        </div>
      );
    };

export default Sneakers;