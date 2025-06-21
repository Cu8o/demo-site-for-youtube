# Personal Portfolio & 3D Cube Demo

This is a simple, modern portfolio website built with React and Vite, featuring an interactive 3D cube rendered with Three.js. The site is designed to be clean, performant, and easily customizable.

## Live Demo

_[Link to your live site here]_

## Features

- **Clean & Modern UI**: A minimalist design that puts the focus on the content.
- **Dynamic Content**: Page content is loaded from a central `content.json` file, making updates easy.
- **Component-Based Architecture**: Built with reusable React components for maintainability.
- **Interactive 3D Cube**: A rotating 3D cube created with Three.js.
- **Custom Texture Mapping**: One face of the cube displays a custom image.
- **Responsive Design**: The layout adapts smoothly to different screen sizes.

## Technologies Used

- **Frontend**: [React](https://react.dev/), [TypeScript](https://www.typescriptlang.org/), [Vite](https://vitejs.dev/)
- **3D Graphics**: [Three.js](https://threejs.org/)
- **Styling**: CSS
- **Linting & Formatting**: [ESLint](https://eslint.org/), [Prettier](https://prettier.io/)

## Getting Started

Follow these instructions to get a copy of the project up and running on your local machine for development and testing purposes.

### Prerequisites

You need to have [Node.js](https://nodejs.org/) (version 18 or higher recommended) and npm installed on your machine.

### Installation

1.  **Clone the repository:**

    ```sh
    git clone https://github.com/your-username/your-repo-name.git
    cd your-repo-name
    ```

2.  **Install dependencies:**
    ```sh
    npm install
    ```

### Running the Development Server

To start the Vite development server and view the project in your browser, run:

```sh
npm run dev
```

The application will be available at `http://localhost:5173` by default.

### Building for Production

To create a production-ready build of the application, run:

```sh
npm run build
```

This command bundles the application into the `dist/` directory, optimized for deployment.

## Project Structure

```
/
├── public/               # Static assets (images, fonts, etc.)
├── src/
│   ├── components/       # Reusable React components
│   ├── types/            # TypeScript type definitions
│   ├── App.css           # Main application styles
│   ├── App.tsx           # Main application component
│   ├── content.json      # Content for the site
│   └── main.tsx          # Application entry point
├── package.json          # Project dependencies and scripts
└── README.md             # This file
```

## Acknowledgements

- A big thank you to the creators and maintainers of the open-source libraries used in this project.
