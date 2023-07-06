# Pocket Money App

The Pocket Money App is a simple web application built with React and Material-UI. It provides a user interface to initiate payments between parents and children.

# Features

- Parent Pay page: Allows parents to select the paying parent account, receiving child account, payment type, and amount to initiate a payment.
- Child Account page: Displays the account details and transaction history of the selected child account.

# Technologies Used

- React
- React Router
- Material-UI
- Prism (for mock API server)

# Getting Started

## To run the Pocket Money App locally, follow these steps:

1. Clone the repository:
   git clone <repository-url>

2. Navigate to the project directory:
   cd pocket-money-app

3. Install the dependencies:
   npm install

4. Start the development server:
   npm start

5. Open the web browser and visit http://localhost:3000.

## Mock API Server

The Pocket Money App uses a mock API server to simulate the payment functionality. The server is powered by Prism.

To start the mock API server:

1. Install StopLight Prism globally:
   npm install -g @stoplight/prism-cli

2. Start the Prism server with the provided OAS specification file:
   	

# Folder Structure

The project structure looks like this:

pocket-money-app/
  ├── public/
  ├── src/
  │   ├── components/
  │   │   ├── Header.js
  │   │   ├── NavBar.js
  │   │   ├── ParentPay.js
  │   │   └── ChildAccount.js
  │   ├── App.js
  │   └── index.js
  ├── package.json
  ├── README.md
  └── ...

License

This project is licensed under the MIT License.

Contributing

Contributions are welcome! If you have any suggestions, improvements, or bug fixes, please submit a pull request.

Author

- Alan Torrance (https://github.com/torranca)
