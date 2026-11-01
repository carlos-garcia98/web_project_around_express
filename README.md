# Tripleten web_project_around_express


# Around the U.S. — Express API

## Project Description

This project is an API built with **Node.js, Express, and TypeScript** as part of the TripleTen Software Development program.

The goal of this project is to develop a backend application that serves user and card data through HTTP requests. The application uses JSON files as its data source and organizes its code into routes, controllers, and middleware to keep the project structured and maintainable.

## Features

- **Users API:** Retrieve a list of users and search for a specific user by ID.
- **Cards API:** Retrieve a collection of cards containing information such as names, images, owners, likes, and creation dates.
- **Route handling:** Organize API endpoints using Express Router.
- **Error handling:** Return a 404 response when a requested user or route cannot be found.
- **Static file serving:** Serve static files from the public directory.
- **TypeScript:** Use static typing to improve code reliability and maintainability.

## Technologies Used

- Node.js
- Express.js
- TypeScript
- JavaScript (ES Modules)
- ESLint
- Prettier
- TSX

## API Endpoints

| Method | Endpoint           | Description                     |
| ------ | ------------------ | ------------------------------- |
| GET    | `/users`         | Retrieve all users.             |
| GET    | `/users/:userId` | Retrieve a specific user by ID. |
| GET    | `/cards`         | Retrieve all cards.             |
