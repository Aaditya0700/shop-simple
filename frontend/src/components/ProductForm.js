import React, { useState, useEffect } from 'react';

const emptyForm = {
  name: '',
  description: '',
  price: '',
  category: '',
  imageUrl: '',
  stock: '',
};

const ProductForm = ({ onSubmit, editingProduct, onCancel }) => {
  const [form, setForm] = useState(emptyForm);

  useEffect(() => {
    if (editingProduct) {
      setForm({
        name: editingProduct.name || '',
        description: editingProduct.description || '',
        price: editingProduct.price ?? '',
        category: editingProduct.category || '',
        imageUrl: editingProduct.imageUrl || '',
        stock: editingProduct.stock ?? '',
      });
    } else {
      setForm(emptyForm);
    }
  }, [editingProduct]);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!form.name || !form.description || form.price === '') return;

    onSubmit({
      ...form,
      price: Number(form.price),
      stock: form.stock === '' ? 0 : Number(form.stock),
    });

    if (!editingProduct) setForm(emptyForm);
  };

  return (
    <form className="product-form" onSubmit={handleSubmit}>
      <h2>{editingProduct ? 'Edit Product' : 'Add New Product'}</h2>

      <div className="form-row">
        <label>Name *</label>
        <input name="name" value={form.name} onChange={handleChange} placeholder="Product name" required />
      </div>

      <div className="form-row">
        <label>Description *</label>
        <textarea
          name="description"
          value={form.description}
          onChange={handleChange}
          placeholder="Short description"
          required
        />
      </div>

      <div className="form-row form-row-split">
        <div>
          <label>Price ($) *</label>
          <input
            type="number"
            name="price"
            value={form.price}
            onChange={handleChange}
            min="0"
            step="0.01"
            required
          />
        </div>
        <div>
          <label>Stock</label>
          <input type="number" name="stock" value={form.stock} onChange={handleChange} min="0" />
        </div>
      </div>

      <div className="form-row form-row-split">
        <div>
          <label>Category</label>
          <input name="category" value={form.category} onChange={handleChange} placeholder="e.g. Electronics" />
        </div>
        <div>
          <label>Image URL</label>
          <input name="imageUrl" value={form.imageUrl} onChange={handleChange} placeholder="https://..." />
        </div>
      </div>

      <div className="form-actions">
        <button type="submit" className="btn btn-primary">
          {editingProduct ? 'Update Product' : 'Add Product'}
        </button>
        {editingProduct && (
          <button type="button" className="btn btn-secondary" onClick={onCancel}>
            Cancel
          </button>
        )}
      </div>
    </form>
  );
};

export default ProductForm;
