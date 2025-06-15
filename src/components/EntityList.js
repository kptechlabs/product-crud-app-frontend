import React, { useEffect, useState } from 'react';
import { getAll, remove } from '../services/ProductService';
import { Link } from 'react-router-dom';

const EntityList = () => {
  const [entities, setEntities] = useState([]);

  useEffect(() => {
    loadEntities();
  }, []);

  const loadEntities = async () => {
    try {
      const res = await getAll();
      setEntities(res.data);
    } catch (error) {
      console.error("Error fetching entities", error);
    }
  };

  const deleteEntity = async (id) => {
    try {
      await remove(id);
      loadEntities();
    } catch (error) {
      console.error("Error deleting entity", error);
    }
  };

  return (
    <div className="container mt-4">
      <h2 className="mb-4">Product List</h2>
      {/* 
<div className="d-flex justify-content-end mb-3">
  <Link to="/add" className="btn btn-primary">Add Product</Link>
</div> 
*/}
      <table className="table table-bordered table-striped">
        <thead className="table-dark">
          <tr>
            <th>ID</th>
            <th>Name</th>
            <th>Price</th>
            <th>Category</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {entities.map((entity) => (
            <tr key={entity.id}>
              <td>{entity.id}</td>
              <td>{entity.name}</td>
              <td>{entity.price}</td>
              <td>{entity.category}</td>
              <td>
                <Link to={`/edit/${entity.id}`} className="btn btn-warning btn-sm me-2">Edit</Link>
                <button
                  onClick={() => deleteEntity(entity.id)}
                  className="btn btn-danger btn-sm"
                >
                  Delete
                </button>
              </td>
            </tr>
          ))}
          {entities.length === 0 && (
            <tr>
              <td colSpan="5" className="text-center">No products available</td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  );
};

export default EntityList;
