# Dynamic Widget Dashboard App

## Project Description

This project is a dynamic widget dashboard web application built using React, Bootstrap, redux, CSS, and Vite. The app allows users to manage and display widgets that provide various data insights, with a focus on customizing the layout and functionality to match the design provided in the task image. Users can search for widgets, add or remove them from the dashboard, and organize them into categories. The app's design has been carefully tailored to replicate the visual style and functionality as been demanded by the task, including the use of color-coded widgets and a responsive layout.

## Installation Instructions

### Prerequisites

- Ensure you have Node.js installed on your machine.

1. **Clone the Repository:**
   ```bash
   git clone https://github.com/your-username/dynamic-widget-dashboard.git
   cd dynamic-widget-dashboard
   ```
2. **Install Dependencies:**
   Run the following command to install the necessary dependencies:

- cd (folder name inside which you want to store all the coding data)
- npm install
- npm run dev
  (Visit the app at http://localhost:5173 to see it in action.)

Other dependencies you need to install are :

- npm react-icons
- npm Bootstrap@latest
- npm redux react-redux reduxjs/toolkit

#### USAGE

1. **Search Widgets:**
   The search bar at the top of the dashboard allows you to filter widgets by their names. As you type in the search bar, the displayed widgets dynamically update to match your query.

2. **Adding Widgets:**
   On the right sidebar, you can find options to add new widgets to the dashboard. These widgets are organized by category, making it easy to expand your dashboard with new data points.

3. **Removing Widgets:**
   If you need to remove a widget, simply click the close ('x') button in the widget's header. This will instantly remove the widget from the dashboard.

4. **Customization:**
   The widgets are styled to match the design provided in the task image, including color-coded backgrounds and data displays. The layout is responsive, ensuring that the dashboard looks good on any device.

###### FEATURES

**Task-Oriented Design:** The app's layout and functionality are based on the tasks provided in the image, including the right sidebar for adding widgets and a search bar for filtering them.

**Responsive Dashboard:** The layout uses Bootstrap's grid system to ensure that the dashboard is fully responsive, working seamlessly on both desktop and mobile devices.

**Redux for State Management:** The app uses Redux to manage the state of widgets, categories, and search queries, ensuring a smooth user experience.

**Dynamic Widgets:** Add and remove widgets with ease, allowing for a customizable dashboard experience.

**Color-Coded Widgets:** Widgets are styled with Bootstrap classes to visually distinguish between different types of data.

###### HOW TO CONTRIBUTE

**Fork the Repository:** Start by forking the repository to your GitHub account.

**Create a Branch:** Create a new branch for your changes:

**bash**

- git checkout -b feature/your-feature-name

**Implement Your Changes:** Make your changes, ensuring that they align with the project's goals and coding standards.

**Commit and Push:** Commit your changes with a descriptive message and push them to your fork:

# bash

- git commit -m "Added new feature XYZ"
- git push origin feature/your-feature-name

**Create a Pull Request:** Open a pull request on the original repository, detailing the changes you've made and how they improve the app.
