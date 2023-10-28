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
- Run `pnpm run lint` to lint the codebase with ESLint.

## Contributing

Pull requests are welcome. For major changes, please open an issue first to discuss what you would like to change.

## License

This project is open source and available under the [MIT License](LICENSE).
