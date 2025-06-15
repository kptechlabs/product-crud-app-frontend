import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { getById, update } from '../services/ProductService';

const EditEntity = () => {
  const { id } = useParams();
  const [entity, setEntity] = useState({
    name: '',
    price: '',
    category: ''
  });

  const navigate = useNavigate();

  useEffect(() => {
    getById(id).then(res => {
      setEntity(res.data);
    });
  }, [id]);

  const handleChange = e => {
    const { name, value } = e.target;
    setEntity(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async e => {
    e.preventDefault();
    await update(id, entity);
    navigate('/');
  };

  return (
    <div className="container">
      <h2>Edit Product</h2>
      <form onSubmit={handleSubmit}>
        <div className="mb-2">
          <label>Name:</label>
          <input type="text" name="name" className="form-control" value={entity.name} onChange={handleChange} required />
        </div>
        <div className="mb-2">
          <label>Price:</label>
          <input type="number" name="price" className="form-control" value={entity.price} onChange={handleChange} required />
        </div>
        <div className="mb-2">
          <label>Category:</label>
          <input type="text" name="category" className="form-control" value={entity.category} onChange={handleChange} required />
        </div>
        <button type="submit" className="btn btn-primary">Update</button>
      </form>
    </div>
  );
};

export default EditEntity;
