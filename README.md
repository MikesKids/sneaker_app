# sneaker_app

## Description

Sneaker App is a full-stack application designed to manage a collection of sneakers. It allows users to perform CRUD operations on sneaker data, including brand, model, price, category, color, and favorite status. The app features a user-friendly interface with dynamic cards displaying sneaker information and images based on the brand.

## Features

- View a list of all sneakers in a visually appealing card format.
- Add new sneakers to the collection.
- Edit existing sneaker details.
- Delete sneakers from the collection.
- Filter sneakers based on favorite status and alphabetical order.

## Technologies Used

- **Frontend**: React
- **Backend**: Express
- **Database**: PostgreSQL
- **Styling**: CSS

## Setup

To run this project locally, follow these steps:

### Prerequisites

- Node.js
- PostgreSQL

### Installation

1. Clone the repository:

   ```sh
   git clone https://github.com/your-username/sneaker-app.git
   cd sneaker-app
   ```

2. Install dependencies for both frontend and backend:

   ```sh
   cd backend
   npm install
   cd ../frontend
   npm install
   ```

3. Set up the database:

   - Create a PostgreSQL database.
   - Run the provided SQL scripts to set up the schema and seed the database with initial data.

4. Create an `.env` file in the `backend` directory and add your environment variables:
   ```env
   DATABASE_URL=your_database_url
   PORT=5000
   ```

### Running the Application

1. Start the backend server:

   ```sh
   cd backend
   npm start
   ```

2. Start the frontend development server:

   ```sh
   cd ../frontend
   npm start
   ```

3. Open your browser and navigate to `http://localhost:3000`.

## Usage

1. **Viewing Sneakers**: Navigate to the home page to see a list of all sneakers displayed in card format.
2. **Adding a Sneaker**: Click on the "Add New Sneaker" button in the navigation bar to open the form. Fill out the form and submit to add a new sneaker to the collection.
3. **Editing a Sneaker**: Click on a sneaker card to view detailed information. Click the "Edit" button to modify the sneaker details.
4. **Deleting a Sneaker**: On the sneaker detail page, click the "Delete" button and confirm to remove the sneaker from the collection.

## API Endpoints

- **GET /sneakers**: Retrieve all sneakers.
- **POST /sneakers**: Add a new sneaker.
- **GET /sneakers/:id**: Retrieve a specific sneaker by ID.
- **PUT /sneakers/:id**: Update a specific sneaker by ID.
- **DELETE /sneakers/:id**: Delete a specific sneaker by ID.

## Folder Structure

```
sneaker-app/
├── backend/
│   ├── controllers/
│   ├── models/
│   ├── routes/
│   ├── server.js
│   └── .env
├── frontend/
│   ├── src/
│   │   ├── components/
│   │   ├── pages/
│   │   ├── App.js
│   │   ├── index.js
│   │   ├── Sneakers.jsx
│   │   ├── Sneaker.jsx
│   │   ├── Card.jsx
│   │   ├── Card.css
│   │   ├── Sneakers.css
│   │   └── ...
│   └── public/
│       ├── images/
│       │   ├── nike.jpg
│       │   ├── adidas.jpg
│       │   ├── ...
```

## Contributing

Contributions are welcome! Please fork this repository and submit a pull request for any features, improvements, or bug fixes.
