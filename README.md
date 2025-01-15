# Bookstore Application

A React-based Bookstore application that allows users to browse books, add books to the cart, manage cart items, and place orders. It also includes an admin panel to add new books.

## Features

### User Features
- **Authentication**: Users can log in and log out securely. JWT tokens are stored in localStorage for session management.
- **Browse Products**: Users can view a list of available books with details like title, description, and price.
- **Add to Cart**: Users can add books to the cart and specify the quantity.
- **Cart Management**: Users can view all items in their cart and remove unwanted items.
- **Place Orders**: Users can place an order for the items in their cart.

### Admin Features
- **Add Books**: Admin users can add new books with details like title, author, category, description, image URL, price, and stock.
- **Role-Based Access**: The "Add Books" feature is only visible and accessible to users with an admin role.

### Navigation
- A navigation bar provides access to different sections of the app. Options vary based on user roles (e.g., "Add Book" is only visible to admins).

## Components

### 1. **AuthForm**
- Handles user login and authentication.
- Stores JWT token and user role in localStorage.

### 2. **Navbar**
- Displays navigation links dynamically based on user authentication and role.
- Includes links for "Products," "Cart," "Add Book" (admin only), and "Logout."
- Styled for a modern and responsive look.

### 3. **Product**
- Displays individual book details (title, description, price).
- Includes an "Add to Cart" button where users can specify the quantity and add the book to their cart.

### 4. **AddBook**
- A form for admins to add new books.
- Fields include title, author, category, description, image URL, price, and stock.
- Styled with CSS for better user experience.

### 5. **Cart**
- Displays all items in the user's cart.
- Each item is rendered using the `CartItem` component.
- Includes an "Order" button to place an order and a delete button to remove items.

### 6. **CartItem**
- Displays individual cart item details.
- Includes a delete button that sends the user ID and book ID to the backend for removal.

## API Endpoints

### User Authentication
- `POST /auth/login`: Authenticate users and return a JWT token.

### Book Management
- `POST /book/add`: Adds a new book (admin only).
- `GET /book/all`: Retrieves all books.

### Cart Management
- `GET /cart/items`: Retrieves all items in the user's cart.
- `POST /cart/add`: Adds a book to the cart.
- `DELETE /cart/delete`: Removes a book from the cart.
- `GET /cart/order`: Places an order for the items in the cart.

## Installation and Setup

1. **Clone the Repository**
   ```bash
   git clone https://github.com/yourusername/bookstore-app.git
   cd bookstore-app
   ```

2. **Install Dependencies**
   ```bash
   npm install
   ```

3. **Start the Development Server**
   ```bash
   npm start
   ```

4. **Backend Setup**
   - Make sure the backend API is running locally on `http://localhost:8080`.
   - Refer to the backend repository for setup instructions.

## Folder Structure
```
bookstore-app/
├── public/
├── src/
│   ├── components/
│   │   ├── AuthForm.js
│   │   ├── Navbar.js
│   │   ├── Product.js
│   │   ├── AddBook.js
│   │   ├── Cart.js
│   │   └── CartItem.js
│   ├── App.js
│   ├── index.js
│   └── styles/
│       ├── Navbar.css
│       ├── AuthForm.css
│       ├── Cart.css
│       └── AddBook.css
├── package.json
└── README.md
```

## Technologies Used

- **Frontend**: React, CSS
- **Backend**: Spring Boot (API integration assumed)
- **State Management**: LocalStorage (for storing JWT and role)
- **HTTP Client**: Axios

## Screenshots
Include screenshots of the application to showcase its UI and features.

## Contributing
Contributions are welcome! Please follow these steps:
1. Fork the repository.
2. Create a new branch: `git checkout -b feature-name`.
3. Commit your changes: `git commit -m 'Add some feature'`.
4. Push to the branch: `git push origin feature-name`.
5. Submit a pull request.

## License
This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## Contact
For any inquiries, please contact [your-email@example.com].

