# 🚀 Fastify Boilerplate

Welcome to the Fastify Boilerplate! This project provides a robust foundation for building scalable and high-performance web applications using Fastify and TypeScript. It comes pre-configured with essential tools for development, testing, and deployment.

[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)
[![TypeScript](https://img.shields.io/badge/TypeScript-4.9.5-blue.svg)](https://www.typescriptlang.org/)
[![Fastify](https://img.shields.io/badge/Fastify-4.17.0-green.svg)](https://www.fastify.io/)
[![Jest](https://img.shields.io/badge/Jest-29.5.0-red.svg)](https://jestjs.io/)

## 🌟 Features

-   **Fastify**: High-performance web framework
-   **TypeScript**: For type-safe code and enhanced developer experience
-   **Jest & Supertest**: Comprehensive testing setup
-   **ESLint & Prettier**: Code linting and formatting
-   **Docker**: Containerization for easy deployment
-   **Hot Reloading**: Fast development with automatic reloading
-   **Environment Variables**: Secure configuration management
-   **Production-Ready**: Optimized build process for deployment

## 🛠️ Getting Started

### Prerequisites

-   Node.js (v18 or later)
-   npm (v6 or later)
-   Docker (optional, for containerization)

### Installation

1. Clone the repository:

    git clone https://github.com/your-username/fastify-boilerplate.git
    cd fastify-boilerplate

2. Install dependencies:

    npm install

3. Set up environment variables:
   Create a `.env` file in the root directory and add your environment variables:

    PORT=9666
    HOST=0.0.0.0

## 🚀 Usage

### Development

Start the development server with hot reloading:

npm run dev

### Production

Build and run the application:

npm run build
npm start

### Docker

Build and run the Docker container:

docker build -t my-fastify-app .
docker run -p 9666:9666 my-fastify-app

## 🧪 Testing

This boilerplate uses Jest and Supertest for comprehensive testing.

Run all tests:

npm test

Generate a coverage report:

npm run test:coverage

Run tests on staged files:

npm run test:staged

## 🧹 Linting and Formatting

Maintain code quality with ESLint and Prettier:

npm run lint
npm run format

## 🤝 Contributing

Contributions, issues, and feature requests are welcome! Feel free to check the [issues page](https://github.com/your-username/fastify-boilerplate/issues).

## 📄 License

This project is [MIT](https://opensource.org/licenses/MIT) licensed.

## 🙏 Acknowledgements

-   [Fastify](https://www.fastify.io/)
-   [TypeScript](https://www.typescriptlang.org/)
-   [Jest](https://jestjs.io/)
-   [ESLint](https://eslint.org/)
-   [Prettier](https://prettier.io/)

---

Happy coding! 🎉 If you find this boilerplate helpful, please give it a ⭐️!
