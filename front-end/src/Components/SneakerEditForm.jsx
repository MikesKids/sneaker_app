import React, { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
const API = import.meta.env.VITE_API_URL;


const EditSneakerForm = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [form, setForm] = useState({
    brand: '',
    model: '',
    price: 0,
    category: '',
    color: '',
    is_favorite: false,
  });

  useEffect(() => {
    fetch(`${API}/sneakers/${id}`)
    .then(response => {
        if (!response.ok) {
            throw new Error('Network response was not ok');
        }
        return response.json();
    })
    .then(data => setForm(data))
    .catch(error => console.error('Error fetching sneaker:', error));
  }, [id]);

  const handleChange = (event) => {
    const { name, value, type, checked } = event.target;
    setForm({
      ...form,
      [name]: type === 'checkbox' ? checked : value,
    });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    fetch(`${API}/sneakers/${id}`, {
      method: 'PUT',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(form),
    })
      .then(response => {
        if (!response.ok) {
            throw new Error('Network  response was not ok');
        } 
        return response.json();
      })
      .then(data => navigate(`/sneaker/${data.id}`))
      .catch(error => console.error('Error updating sneaker:', error));
  };

//   if (!form) {
//     return <div>Loading...</div>;
//   }
  return (
    <div>
      <h2>Edit Sneaker</h2>
      <form onSubmit={handleSubmit}>
        <label>
          Brand:
          <input type="text" name="brand" value={form.brand} onChange={handleChange} required />
        </label>
        <label>
          Model:
          <input type="text" name="model" value={form.model} onChange={handleChange} required />
        </label>
        <label>
          Price:
          <input type="number" name="price" value={form.price} onChange={handleChange} required />
        </label>
        <label>
          Category:
          <input type="text" name="category" value={form.category} onChange={handleChange} required />
        </label>
        <label>
          Color:
          <input type="text" name="color" value={form.color} onChange={handleChange} required />
        </label>
        <label>
          Favorite:
          <input type="checkbox" name="is_favorite" checked={form.is_favorite} onChange={handleChange} />
        </label>
        <button type="submit">Save Changes</button>
      </form>
    </div>
  );
};

export default EditSneakerForm;