## Prerequisites

Before running the website locally, ensure you have the following installed:
    
- [Node.js](https://nodejs.org/) (version 14 or higher recommended)
- [npm](https://www.npmjs.com/) (comes with Node.js)

## Frameworks and Libraries Used

This project is built with:

- [React](https://reactjs.org/) – JavaScript library for building user interfaces
- [Create React App](https://create-react-app.dev/) – Toolchain for React apps
- [MUI (Material-UI)](https://mui.com/) – React UI framework for material design components (v5.x)
- [Tailwind CSS](https://tailwindcss.com/) – Utility-first CSS framework for rapid UI development (v3.x)

## Getting Started

To run the project locally:

1. **Clone the repository:**
    ```bash
    git clone https://github.com/your-username/birou-notarial-rosu.git
    cd birou-notarial-rosu
    ```

2. **Install dependencies:**
    ```bash
    npm install
    ```
    This will install all required packages, including React.

3. **Install MUI (Material-UI):**
    ```bash
    npm install @mui/material@5 @emotion/react @emotion/styled
    ```
    This installs MUI v5 and its peer dependencies.

4. **Install Tailwind CSS:**
    ```bash
    npm install -D tailwindcss@3 postcss autoprefixer
    npx tailwindcss init -p
    ```
    Then, configure your `tailwind.config.js` and add the Tailwind directives to your CSS as described in the [Tailwind CSS documentation](https://tailwindcss.com/docs/guides/create-react-app).

5. **Start the development server:**
    ```bash
    npm start
    ```
    The app will be available at [http://localhost:3000](http://localhost:3000).

If you make changes to the code or styles, the development server will automatically reload the app.
