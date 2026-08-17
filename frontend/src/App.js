import React, { useState, useEffect } from 'react';
import ProductForm from './components/ProductForm';
import ProductList from './components/ProductList';
import * as api from './api';
import './App.css';

function App() {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [editingProduct, setEditingProduct] = useState(null);
  const [error, setError] = useState('');
  const [search, setSearch] = useState('');

  const loadProducts = async () => {
    try {
      setLoading(true);
      const { data } = await api.fetchProducts();
      setProducts(data);
      setError('');
    } catch (err) {
      setError('Could not load products. Is the backend server running?');
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    loadProducts();
  }, []);

  const handleAddOrUpdate = async (formData) => {
    try {
      if (editingProduct) {
        await api.updateProduct(editingProduct._id, formData);
      } else {
        await api.createProduct(formData);
      }
      setEditingProduct(null);
      await loadProducts();
    } catch (err) {
      setError('Failed to save product.');
    }
  };

  const handleEdit = (product) => {
    setEditingProduct(product);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleCancelEdit = () => setEditingProduct(null);

  const handleDelete = async (id) => {
    if (!window.confirm('Delete this product?')) return;
    try {
      await api.deleteProduct(id);
      setProducts((prev) => prev.filter((p) => p._id !== id));
    } catch (err) {
      setError('Failed to delete product.');
    }
  };

  const filteredProducts = products.filter((p) =>
    p.name.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="app">
      <header className="app-header">
        <h1>🛍️ ShopSimple</h1>
        <p>A minimal MERN stack e-commerce CRUD demo</p>
      </header>

      <main className="app-main">
        {error && <div className="alert">{error}</div>}

        <ProductForm onSubmit={handleAddOrUpdate} editingProduct={editingProduct} onCancel={handleCancelEdit} />

        <div className="list-header">
          <h2>Products ({filteredProducts.length})</h2>
          <input
            className="search-input"
            placeholder="Search products..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />
        </div>

        <ProductList products={filteredProducts} onEdit={handleEdit} onDelete={handleDelete} loading={loading} />
      </main>

      <footer className="app-footer">
        <p>Built with MongoDB, Express, React & Node.js</p>
      </footer>
    </div>
  );
}

export default App;
