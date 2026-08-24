# CodeAlpha E-Commerce Store

A full-stack e-commerce web application developed as part of the **CodeAlpha Full Stack Development Internship**.

The application provides customer shopping functionality along with an admin dashboard for managing products and orders.

## Features

### Customer Features

* User registration and login
* Secure password hashing using bcrypt
* Customer role-based access
* Browse available products
* View individual product details
* Add products to cart
* Update cart quantities
* Remove products from cart
* Checkout and place orders
* View personal order history
* View products included in previous orders
* Logout functionality

### Admin Features

* Separate admin account and role
* Admin-only dashboard
* View all customer orders
* View order details
* Update order status
* Add new products
* Edit existing products
* Delete products
* Admin-only product management APIs
* Role-based access protection

## Technologies Used

### Frontend

* HTML5
* CSS3
* JavaScript

### Backend

* Node.js
* Express.js
* bcrypt
* dotenv
* MySQL2

### Database

* MySQL

### Development Tools

* Visual Studio Code
* Git
* GitHub
* Ubuntu Linux

## Project Structure


CodeAlpha_EcommerceStore/
│
├── backend/
│   ├── config/### Products

GET    /api/products
GET    /api/products/:id

Admin only:
POST   /api/products
PUT    /api/products/:id
DELETE /api/products/:id
│   │   └── db.js
│   │
│   ├── controllers/
│   │   ├── authController.js
│   │   ├── cartController.js
│   │   ├── orderController.js
│   │   ├── productController.js
│   │   └── userController.js
│   │
│   ├── middleware/
│   │   ├── adminMiddleware.js
│   │   └── authMiddleware.js
│   │
│   ├── models/
│   │   ├── cartModel.js
│   │   ├── orderModel.js
│   │   ├── productModel.js
│   │   └── userModel.js
│   │
│   ├── routes/
│   │   ├── authRoutes.js
│   │   ├── cartRoutes.js
│   │   ├── orderRoutes.js
│   │   ├── productRoutes.js
│   │   └── userRoutes.js
│   │
│   ├── server.js
│   ├── package.json
│   └── package-lock.json
│
├── database/
│   ├── schema.sql
│   ├── users.sql
│   └── orders.sql
│
├── frontend/
│   ├── images/
│   ├── admin.html
│   ├── cart.html
│   ├── checkout.html
│   ├── index.html
│   ├── login.html
│   ├── orders.html
│   ├── product-details.html
│   ├── products.html
│   └── register.html
│
├── .gitignore
└── README.md


## Database

The application uses MySQL with the following main tables:

* `users`
* `products`
* `orders`
* `order_items`

The `users` table stores customer and admin accounts.

The `products` table stores product information such as name, description, price, category, image and stock.

The `orders` table stores customer order information and order status.

The `order_items` table stores the individual products associated with each order.

## Authentication and Security

User passwords are stored using **bcrypt password hashing** rather than plain text passwords.

The application also implements role-based access control.

Customers can access shopping and order-related functionality, while administrative operations are protected using an admin middleware.

Admin-only operations include:

* Viewing all orders
* Updating order status
* Creating products
* Updating products
* Deleting products

Unauthenticated users are redirected to the login page when attempting to access protected frontend pages.

## API Overview

### Authentication


POST /api/auth/register
POST /api/auth/login

### Products

GET    /api/products
GET    /api/products/:id

Admin only:
POST   /api/products
PUT    /api/products/:id
DELETE /api/products/:id

### Orders


POST /api/orders
GET  /api/orders
GET  /api/orders/all
PUT  /api/orders/status


### Cart


GET    /api/cart
POST   /api/cart
PUT    /api/cart/:id
DELETE /api/cart/:id


## Running the Project Locally

### 1. Clone the repository


git clone <your-github-repository-url>
cd CodeAlpha_EcommerceStore


### 2. Install backend dependencies


cd backend
npm install


### 3. Configure environment variables

Create a `.env` file inside the `backend` directory.

Add your local MySQL configuration:


DB_HOST=localhost
DB_USER=root
DB_PASSWORD=your_mysql_password
DB_NAME=ecommerce_db


Do not upload the `.env` file to GitHub.

### 4. Create the database

Create the `ecommerce_db` database in MySQL and execute the SQL files from the `database` directory.

### 5. Start the backend


cd backend
npm start


The backend runs on:


http://localhost:5000


### 6. Open the frontend

Use a local development server such as the VS Code Live Server extension and open:


frontend/index.html


## Testing

The application was tested for:

* User registration and login
* Password hashing
* Customer/admin role handling
* Product listing
* Product details
* Cart functionality
* Checkout
* Order creation
* Order history
* Admin order management
* Order status updates
* Admin product creation
* Admin product editing
* Admin product deletion
* Customer access restrictions
* Logged-out page protection
* Database integrity

## Future Improvements

Possible future enhancements include:

* JWT-based authentication
* Payment gateway integration
* Product search and filtering
* Product reviews and ratings
* Pagination
* Inventory management
* Responsive mobile UI improvements
* Image upload functionality
* Order cancellation for customers
* Deployment to a cloud platform

## Author

**Jai Harshini Yerra**

B.Tech Computer Science and Engineering

Developed as part of the **CodeAlpha Full Stack Development Internship**.
