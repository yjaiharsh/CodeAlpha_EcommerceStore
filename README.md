# CodeAlpha E-Commerce Store

A full-stack e-commerce web application developed as part of the **CodeAlpha Full Stack Development Internship**.

The application provides customer shopping functionality along with an admin dashboard for managing products and orders.

## Features

### Customer Features

* User registration and login
* Secure password hashing using bcrypt
* Customer role-based access
* Browse products
* View individual product details
* Add products to cart
* Update cart quantities
* Remove products from cart
* Checkout and place orders
* View personal order history
* View products included in previous orders
* Logout functionality

### Admin Features

* Admin role and authentication
* Admin dashboard
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

```text
CodeAlpha_EcommerceStore/
│
├── backend/
│   ├── config/
│   │   └── db.js
│   ├── controllers/
│   │   ├── authController.js
│   │   ├── cartController.js
│   │   ├── orderController.js
│   │   ├── productController.js
│   │   └── userController.js
│   ├── middleware/
│   │   ├── adminMiddleware.js
│   │   └── authMiddleware.js
│   ├── models/
│   │   ├── cartModel.js
│   │   ├── orderModel.js
│   │   ├── productModel.js
│   │   └── userModel.js
│   ├── routes/
│   │   ├── authRoutes.js
│   │   ├── cartRoutes.js
│   │   ├── orderRoutes.js
│   │   ├── productRoutes.js
│   │   └── userRoutes.js
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
│   │   ├── headphones.jpg
│   │   ├── running-shoes.jpg
│   │   └── smartwatch.jpg
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
```

## Database

The application uses MySQL with the following main tables:

* `users`
* `products`
* `orders`
* `order_items`

### Users

Stores customer and administrator account information, including user roles.

### Products

Stores product information such as:

* Product name
* Description
* Price
* Category
* Image
* Stock

### Orders

Stores customer order information including:

* Customer details
* Total amount
* Order status
* Order creation date

### Order Items

Stores the individual products associated with each order.

## Authentication and Security

* Passwords are securely hashed using **bcrypt**.
* User roles distinguish between customers and administrators.
* Administrative APIs are protected using admin middleware.
* Customers cannot access admin-only operations.
* Unauthenticated users are redirected to the login page when accessing protected frontend pages.
* Environment variables are stored in `.env` and excluded from Git using `.gitignore`.
* `node_modules` is excluded from the repository.

### Admin-only Operations

The following operations require administrator access:

* View all orders
* Update order status
* Create products
* Update products
* Delete products

## API Overview

### Authentication

```text
POST /api/auth/register
POST /api/auth/login
```

### Products

Public endpoints:

```text
GET /api/products
GET /api/products/:id
```

Admin-only endpoints:

```text
POST   /api/products
PUT    /api/products/:id
DELETE /api/products/:id
```

### Orders

Customer endpoint:

```text
POST /api/orders
GET  /api/orders
```

Admin-only endpoints:

```text
GET /api/orders/all
PUT /api/orders/status
```

### Cart

```text
GET    /api/cart
POST   /api/cart
PUT    /api/cart/:id
DELETE /api/cart/:id
```

## Running the Project Locally

### 1. Clone the Repository

```bash
git clone https://github.com/yjaiharsh/CodeAlpha_EcommerceStore.git
cd CodeAlpha_EcommerceStore
```

### 2. Install Backend Dependencies

```bash
cd backend
npm install
```

### 3. Configure Environment Variables

Create a `.env` file inside the `backend` directory.

Example:

```text
DB_HOST=localhost
DB_USER=root
DB_PASSWORD=your_mysql_password
DB_NAME=ecommerce_db
DB_PORT=3306
```

**Do not upload the `.env` file to GitHub.**

### 4. Set Up the Database

Create the database:

```sql
CREATE DATABASE ecommerce_db;
```

Then select it:

```sql
USE ecommerce_db;
```

Execute the SQL files from the `database` directory to create and populate the required tables.

### 5. Start the Backend

From the `backend` directory:

```bash
npm start
```

The backend runs on:

```text
http://localhost:5000
```

### 6. Run the Frontend

Use a local development server such as the **VS Code Live Server** extension.

Open:

```text
frontend/index.html
```

## Testing

The application was tested for:

* User registration
* User login
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
* Admin API protection

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
* Customer order cancellation
* Cloud deployment

## Author

**Jai Harshini Yerra**

B.Tech Computer Science and Engineering

Developed as part of the **CodeAlpha Full Stack Development Internship**.
