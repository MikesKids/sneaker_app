import React, {useState} from "react";
import { useNavigate } from "react-router-dom";

const API = import.meta.env.VITE_API_URL;

const SneakerForm = () => {
    const [newSneaker, setNewSneaker] = useState({
        brand: '',
        model: '',
        price: 0,
        category: '',
        color: '',
        is_favorite: false,
    });
    let navigate = useNavigate();

    const handleChange = (event) => {
        setNewSneaker({...newSneaker, [event.target.id]: event.target.value})
    }

    const addSneaker = () => {
        fetch(`${API}/sneakers`, {
            method: 'POST',
            body: JSON.stringify(newSneaker),
            headers: {"Content-Type": "application/json"}
        })
        .then(() => {
            navigate("/sneakers")
        })
        .catch((error) => console.error(error));
    }

    const handleSubmit = (event) => {
        event.preventDefault();
        addSneaker()
        setNewSneaker({brand: '', model: '', price: 0, category: '', color: '', is_favorite: false})
    }
    return (
        <div className = 'new-container'>
            <form onSubmit={handleSubmit} className='new-sneaker-form'>
                <div className="form-group">
                    <label htmlFor="brand">Brand</label>
                    <input id="brand" type="text" value={newSneaker.brand} required onChange={handleChange} />
                </div>
                <div className="form-group">
                    <label htmlFor="model">Model</label>
                    <input id="model" type="text" value={newSneaker.model} required onChange={handleChange} />
                </div>
                <div className="form-group">
                    <label htmlFor="price">Price</label>
                    <input id="price" type="number" value={newSneaker.price} onChange={handleChange} />
                </div>
                <div className="form-group">
                    <label htmlFor="category">Category</label>
                    <input id="category" type="text" value={newSneaker.category} onChange={handleChange} />
                </div>
                <div className="form-group">
                    <label htmlFor="color">Color</label>
                    <input id="color" type="text" value={newSneaker.color} onChange={handleChange} />
                </div>
                <div className="form-group">
                    <input type="checkbox" id="favorite" name="is_favorite" value={newSneaker.is_favorite} onChange={handleChange} />
                    <label htmlFor="favorite">Check if Favorite</label>
                </div>
                <button>Create New Sneaker</button>
            </form>
        </div>
    )

}

export default SneakerForm;