# My Portfolio

This is my personal portfolio website built with React and Tailwind CSS. It showcases my projects, skills, and contact information.

## Table of Contents

- [Installation](#installation)
- [Usage](#usage)
- [Project Structure](#project-structure)
- [Components](#components)
- [Styling](#styling)
- [Dependencies](#dependencies)
- [Contributing](#contributing)
- [License](#license)

## Installation

1. Clone the repository:

   ```sh
   git clone https://github.com/your-username/my-portfolio.git
   ```

2. Navigate to the project directory:

   ```sh
   cd my-portfolio
   ```

3. Install the dependencies:

   ```sh
   npm install
   ```

## Usage

1. Start the development server:

   ```sh
   npm start
   ```

2. Open your browser and visit `http://localhost:3000` to see the application running.

## Project Structure

my-portfolio
├─ .gitignore
├─ craco.config.js
├─ package-lock.json
├─ package.json
├─ public
│ ├─ cold.png
│ ├─ coming-soon.jpg
│ ├─ Github.png
│ ├─ GitHubProfile.png
│ ├─ Hompage.webp
│ ├─ index.html
│ ├─ Player.png
│ └─ Warm.png
├─ README.md
├─ src
│ ├─ App.js
│ ├─ Assets
│ │ └─ portrait-smile.JPG
│ ├─ Components
│ │ ├─ About.js
│ │ ├─ Contact.js
│ │ ├─ Dropdown.js
│ │ ├─ Footer.js
│ │ ├─ NavBar.js
│ │ ├─ Projects.js
│ │ └─ Skills.js
│ ├─ data.js
│ ├─ index.css
│ └─ index.js
└─ tailwind.config.js

## Components

- `App.js`: The main component that renders all other components.
- `NavBar.js`: The navigation bar component.
- `About.js`: The about section component.
- `Projects.js`: The projects section component.
- `Skills.js`: The skills section component.
- `Contact.js`: The contact form component.
- `Footer.js`: The footer component.
- `Dropdown.js`: The dropdown menu component for mobile view.

## Styling

The project uses Tailwind CSS for styling. The configuration is done in the `tailwind.config.js` file. DaisyUI is also used for additional UI components.

## Dependencies

- `@craco/craco`: ^5.9.0
- `@emailjs/browser`: ^3.4.0
- `daisyui`: ^1.25.4
- `emailjs-com`: ^3.2.0
- `react`: ^17.0.2
- `react-dom`: ^17.0.2
- `react-icons`: ^4.3.1
- `react-router-dom`: ^6.2.1
- `react-scripts`: ^2.0.0
- `react-toastify`: ^8.1.0
- `autoprefixer`: ^9.8.6
- `postcss`: ^7.0.36
- `tailwindcss`: npm:@tailwindcss/postcss7-compat@^2.0.2

## Contributing

Contributions are welcome! Please open an issue or submit a pull request for any bugs or feature requests.

## License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for details.
