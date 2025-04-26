# User Management System

A modern React-based user management system with authentication and CRUD operations.

## Project Overview

This is a full-stack web application built with React that provides user management functionality including:
- User authentication (login/register)
- User listing
- User creation and editing
- Protected routes

## Tech Stack

- **Frontend Framework**: React 19
- **UI Library**: Material-UI (MUI) v7
- **Routing**: React Router DOM v7
- **Form Handling**: Formik with Yup validation
- **HTTP Client**: Axios
- **Authentication**: JWT (JSON Web Tokens)

## Project Structure

```
src/
├── components/     # Reusable UI components
├── context/       # React context providers
├── hooks/         # Custom React hooks
├── pages/         # Page components
├── services/      # API and authentication services
├── styles/        # CSS and styling files
└── App.js         # Main application component
```

## Features

- **Authentication**
  - Login functionality
  - Registration system
  - Protected routes
  - JWT-based authentication

- **User Management**
  - List all users
  - Create new users
  - Edit existing users
  - Form validation

## Getting Started

### Prerequisites

- Node.js (v14 or higher)
- npm or yarn

### Installation

1. Clone the repository:
```bash
git clone [repository-url]
```

2. Install dependencies:
```bash
npm install
```

3. Start the development server:
```bash
npm start
```

The application will be available at `http://localhost:3000`

## Available Scripts

- `npm start`: Runs the app in development mode
- `npm test`: Launches the test runner
- `npm run build`: Builds the app for production
- `npm run eject`: Ejects from Create React App

## Environment Variables

Create a `.env` file in the root directory with the following variables:

```
REACT_APP_API_URL=your_api_url
```

## Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## License

This project is licensed under the MIT License - see the LICENSE file for details.
