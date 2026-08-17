import React from 'react';

const ProductItem = ({ product, onEdit, onDelete }) => {
  return (
    <div className="product-card">
      <img
        src={product.imageUrl || 'https://via.placeholder.com/300x300?text=No+Image'}
        alt={product.name}
        className="product-image"
      />
      <div className="product-body">
        <div className="product-top">
          <h3>{product.name}</h3>
          <span className="badge">{product.category || 'General'}</span>
        </div>
        <p className="product-desc">{product.description}</p>
        <div className="product-meta">
          <span className="price">${Number(product.price).toFixed(2)}</span>
          <span className="stock">Stock: {product.stock ?? 0}</span>
        </div>
        <div className="product-actions">
          <button className="btn btn-small btn-primary" onClick={() => onEdit(product)}>
            Edit
          </button>
          <button className="btn btn-small btn-danger" onClick={() => onDelete(product._id)}>
            Delete
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductItem;
