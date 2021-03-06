# Triangle app 
Simple web application bootstrapped with [Create React App](https://github.com/facebook/create-react-app) to determine the type of a triangle based on its sides.

It makes use of UI components from the [Tradeshift UI](http://ui.tradeshift.com/) library (https://github.com/Tradeshift/tradeshift-ui).

## Usage
To run this application please clone the repository with `git clone <repo_address>` or download it manually.
After that run one of the following, it requires `npm` installed.

### `npm start`
Runs the app in the development mode.<br>
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br>
You will also see any lint errors in the console.

### `npm test`
Launches the test runner in the interactive watch mode.<br>

### `npm run build`
Builds the app for production to the `build` folder.<br>
It bundles React in production mode and optimizes the build for the best performance.
The build is minified and the filenames include the hashes.<br>

## Project structure

The project structure follows the guidelines from [React](https://reactjs.org/docs/) and it looks like the following:

```
triangle-app
├── README.md
├── node_modules
├── package.json
├── .gitignore
├── public
│   ├── favicon_tradeshift.ico
│   ├── index.html
│   └── manifest.json
└── src
    ├── App.css
    ├── App.js
    ├── index.css
    └── index.js 
    └── components
    │   ├── Header.js
    │   ├── Note.js
    │   ├── Side.js
    │   └── SideForm.js 
    └── tests
        ├── App.test.js
        ├── Header.test.js
        ├── Side.test.js
        └── SideForm.test.js
```

The `public` folder contains the `index.html`, entry point for this application. Furthermore, it contains the `manifest.json`, providing meta-data when the web app is installed on a user's mobile device or desktop.
The `src` folder contains the source code of the application, including the tests, in the `tests` folder. The main component is the `App` component, top node of this app. Other components are inside the `components` folder.

More information and considerations can be found in the relative subdirectories.

