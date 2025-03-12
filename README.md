## Travel App

# Overview

The Travel App is a web application that helps users plan their trips by gathering information from multiple APIs. It allows users to enter a destination and a departure date, then retrieves details such as weather forecasts, location images, and other relevant travel information.

# Features

- Users can input a destination and departure date.

- The app fetches weather data for the selected location.

- Displays an image of the destination.

- Uses multiple APIs to gather relevant travel details.

# Technologies Used

- JavaScript (ES6+)

- Node.js & Express.js (for backend server)

- Webpack (for module bundling)

- Babel (for ES6+ support)

- Sass (for styling)

-Service Workers (for caching and offline support)

- APIs Used:

    - Geonames API (for location data)

    - Weatherbit API (for weather forecast)

    - Pixabay API (for images)

## Installation

# Prerequisites

Ensure you have the following installed:

- Node.js (LTS version recommended)

- npm (comes with Node.js)

# Steps to Run Locally

# 1-Clone the repository:

git clone git@github.com:HadiSawalmah/final_project_uda.git

# 2-Install dependencies:

npm install

# 3-Set up environment variables:

- Create a .env file in the root directory.

- Add the following API keys (replace YOUR_API_KEY with actual keys):

GEONAMES_USERNAME=YOUR_USERNAME
WEATHERBIT_API_KEY=YOUR_API_KEY
PIXABAY_API_KEY=YOUR_API_KEY

# 4-Build the project:

npm run build

# 5-Start the server:

npm start

# 6-Open the application in your browser:

 - Navigate to http://localhost:3000/

## Usage

- Enter a destination and a departure date.

- Click the "Click" button to fetch travel details.

- View the weather forecast and an image of the location.

## Troubleshooting

- If the app fails to fetch data, check if API keys are correctly set in the .env file.

- Ensure the backend server is running before opening the front-end.

- Run npm run dev for development mode with hot-reloading.
