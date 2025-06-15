import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { create } from '../services/ProductService'; // Adjust the import path as necessary
import 'bootstrap/dist/css/bootstrap.min.css'; // Ensure Bootstrap styles are applied

const AddEntity = () => {
  const [entity, setEntity] = useState({
    name: '',
    price: '',
    category: ''
  });

  const navigate = useNavigate();

  const handleChange = e => {
    const { name, value } = e.target;
    setEntity(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async e => {
    e.preventDefault();
    await create(entity);
    navigate('/');
  };

  return (
    <div className="container">
      <h2>Add Product</h2>
      <form onSubmit={handleSubmit}>
        <input type="text" name="name" value={entity.name} onChange={handleChange} placeholder="Name" required />
        <input type="number" name="price" value={entity.price} onChange={handleChange} placeholder="Price" required />
        <input type="text" name="category" value={entity.category} onChange={handleChange} placeholder="Category" required />
        <button type="submit" className="btn btn-success">Save</button>
      </form>
    </div>
  );
};

export default AddEntity;
