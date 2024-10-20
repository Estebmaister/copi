# Pokemon list code challenge Copilot IQ

## Live view

The project can be tested on the URL deployed by GH-Pages [link](https://estebmaister.github.io/copi/)

## Project Overview

This project is a Pokemon list code challenge implemented using React. It showcases the integration of a pokemon API to retrieve information with a structured code base and components to navigate the results with an amicable UI.

## Features

- **Table View with Pagination**: Displays Pokémon in a paginated table, showing 10 Pokémon per page.
- **Hover Effect**: Hovering over any Pokémon in the list changes the background color of the row to cyan.
- **Card View**: Shows detailed information for a selected Pokémon, including name, ID, types, and abilities.
- **Query Parameters**: Persists pagination state using URL query parameters, allowing users to return to the same page after viewing a Pokémon's details.

- [PokéAPI](https://pokeapi.co/) is used to retrieve Pokémon data.
- Project bootstrapped with [Create React App](https://github.com/facebook/create-react-app).
- Pagination, routing, and state persistence are implemented with `react-router-dom`.

## Installation and Setup

To run the project locally, follow these steps:

### Prerequisites

- You need to have **Node.js** installed. You can download it from [nodejs.org](https://nodejs.org).

### Step-by-step Setup

1. Clone the repository to your local machine:

    ```bash
    git clone https://github.com/estebmaister/copi.git
    cd pokemon-todo-list
    ```

2. Install dependencies using npm:

    ```bash
    npm install
    ```

3. Start the React development server:

    ```bash
    npm start
    ```

4. Open your browser and go to `http://localhost:3000` to see the app in action.

## Available Scripts

In the project directory, you can run:

- `npm start` - Runs the app in development mode. Open [http://localhost:3000](http://localhost:3000) to view it in the browser.
- `npm run build` - Builds the app for production to the `build` folder. It optimizes the build for the best performance.
- `npm test` - Launches the test runner in interactive watch mode (optional, only if tests are written).
- `npm run eject` - If you want to customize the configuration (not recommended for beginners).

## Relevant Project Structure

```bash
pokemon-todo-list/
├── public/                 # Public assets (index.html, favicon, etc.)
│   └── index.html          # Main HTML file for the app
├── src/                    # Source code
│   ├── components/         # Reusable components
│   │   ├── PokeCard.js     # Displays detailed info about a specific Pokémon
│   │   └── PokeTable.js    # Displays a list of Pokémon with pagination and hover effects
│   │   └── PokeTableRow.js # Displays each table row and retrieves types information
│   ├── helpers/            # Reusable functions
│   │   ├── PokeRepo.js     # Functions related to get information about pokemons
│   │   └── PokeTypes.js    # Functions related to types match with colors for display
│   │   └── Strings.js      # Functions related to string manipulation
│   ├── App.js              # Main app component where routing and state management occur
│   ├── index.css           # Global reset styles for the app
│   ├── index.js            # React entry point, renders the app to the DOM
│   └── serviceWorker.js    # Optional service worker for offline support
├── .gitignore              # List of files and folders to ignore in version control
├── README.md               # This README file
└── package.json            # Project metadata and dependency information

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).
