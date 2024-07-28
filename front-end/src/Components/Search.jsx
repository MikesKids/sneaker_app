import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
const API = import.meta.env.VITE_API_URL;

const SearchBar = () => {
  const [sneakers, setSneakers] = useState([]);
  const [searchQuery, setSearchQuery] = useState('');

  useEffect(() => {
    fetch(`${API}/sneakers`)
      .then(response => response.json())
      .then(data => setSneakers(data))
      .catch(error => console.error(error));
  }, []);

  const filteredSneakers = sneakers.filter(sneaker =>
    sneaker.brand.toLowerCase().includes(searchQuery.toLowerCase()) ||
    sneaker.model.toLowerCase().includes(searchQuery.toLowerCase()) || sneaker.category.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div>
      <h1>Sneaker List</h1>
      <div>
        <input
          type="text"
          placeholder="Search sneakers..."
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
        />
      </div>
      <ul>
        {filteredSneakers.map(sneaker => (
          <li key={sneaker.id}>
            <Link to={`/search/${sneaker.id}`}>
              {sneaker.brand} - {sneaker.model}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default SearchBar;
