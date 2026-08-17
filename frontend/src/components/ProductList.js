import React from 'react';
import ProductItem from './ProductItem';

const ProductList = ({ products, onEdit, onDelete, loading }) => {
  if (loading) return <p className="status-text">Loading products...</p>;

  if (!products.length) {
    return <p className="status-text">No products yet. Add your first one above!</p>;
  }

  return (
    <div className="product-grid">
      {products.map((product) => (
        <ProductItem key={product._id} product={product} onEdit={onEdit} onDelete={onDelete} />
      ))}
    </div>
  );
};

export default ProductList;
