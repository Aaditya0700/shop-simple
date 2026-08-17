# ShopSimple — MERN Stack E-commerce CRUD App

A minimal full-stack e-commerce product management app built with **MongoDB, Express, React, and Node.js**. Supports creating, reading, updating, and deleting products through a REST API and a simple React frontend.

## Features
- Add, view, edit, and delete products (name, description, price, category, image, stock)
- REST API built with Express + Mongoose
- React frontend with search/filter
- Clean, minimal, responsive UI (plain CSS, no framework)

## Tech Stack
- **Frontend:** React, Axios
- **Backend:** Node.js, Express
- **Database:** MongoDB (Mongoose ODM)

## Project Structure
```
mern-ecommerce/
├── backend/
│   ├── config/db.js
│   ├── controllers/productController.js
│   ├── models/Product.js
│   ├── routes/productRoutes.js
│   ├── server.js
│   └── package.json
└── frontend/
    ├── public/index.html
    └── src/
        ├── components/
        │   ├── ProductForm.js
        │   ├── ProductItem.js
        │   └── ProductList.js
        ├── App.js
        ├── api.js
        └── index.js
```

## Getting Started

### Prerequisites
- Node.js (v18+ recommended)
- MongoDB running locally, or a free [MongoDB Atlas](https://www.mongodb.com/atlas) cluster

### 1. Backend setup
```bash
cd backend
npm install
cp .env.example .env
# edit .env and set your MONGO_URI if not using local MongoDB
npm run dev
```
The API runs on `http://localhost:5000`.

### 2. Frontend setup
Open a new terminal:
```bash
cd frontend
npm install
npm start
```
The app opens on `http://localhost:3000`.

## API Endpoints
| Method | Endpoint             | Description         |
|--------|-----------------------|----------------------|
| GET    | /api/products          | Get all products     |
| GET    | /api/products/:id       | Get single product   |
| POST   | /api/products           | Create a product     |
| PUT    | /api/products/:id       | Update a product     |
| DELETE | /api/products/:id       | Delete a product     |

## Ideas to Extend (optional, for a stronger portfolio piece)
- User authentication (JWT) with admin vs customer roles
- Shopping cart & checkout flow
- Image upload (Cloudinary/Multer) instead of image URLs
- Pagination and sorting on the product list
- Deploy backend to Render/Railway and frontend to Vercel/Netlify

## Resume Bullet (sample)
> Built a full-stack MERN e-commerce application with a RESTful CRUD API (Node/Express/MongoDB) and a React frontend, supporting product creation, editing, search, and deletion with real-time UI updates.
