# Weather App

This is a React application that allows users to search for cities and view weather details.

## Features

- Search for cities using the OpenWeatherMap API.
- Display weather details for the selected city.
- Toggle between metric and imperial units.
- Modern UI with reactive components.

## Installation and Setup

1. **Clone the repository**:

   ```bash
   git clone [repository-url]
   cd [repository-directory]
   ```

   add .env.local which values are given in the email.

2. **Install the dependencies**:

   ```bash
   pnpm install
   ```

3. **Set up environment variables**:

   - Create a `.env` file in the root directory.
   - Add the OpenWeatherMap API key:
     ```env
     REACT_APP_OPENWEATHERMAP_API_KEY=your_api_key_here
     ```

4. **Start the development server**:
   ```bash
   pnpm run dev
   ```

## Usage

- Run `pnpm run dev` to start the development server.
- Run `pnpm run build` to build the application for production.
- Run `pnpm run test` to run the test.

## Improvements

- Add a loading indicator.
- Add more tests.
- I would use react-testing-library to test some of the components.
  but i would use e2e testing to test the whole application. my favorite tool for e2e testing is cypress and playwright.
