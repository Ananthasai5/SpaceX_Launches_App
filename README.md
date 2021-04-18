<h1 align="center">
    SpaceX Launch Program
</h1>
<p>
    This is an easy-to-use application, that gives the details of launches performed by SpaceX program. This includes all the details about every launch. User can filter the launches based on his choice using the filters provided in the application.
  
####   Technology Stack
- **Web-App :** ReactJS
    
   This app is developed using the best practices like:
- **Programming Language :** **Typescript**
- **Styles:** Used **scss** for styling the components
- **Design Structure:** Followed **Atomic Design Structure**
- **State Management:** Used **Redux** for managing the state of the application.
- **Middleware:** Used **Redux saga** as middleware.
- **Api client:** Used **Axios** for APIs.
- **Domain Driven Implementation:** Used **Models** and **Repositories** to maintain the business logic in the application
- All the components are **functional components** and uses **react hooks**.
- **Server side rendering** using **babel** and **webpack** configuration

Also, attaching the **Lighthouse** performance report taken from chrome dev tools,

<img src="src/assets/Lighthouse Reports/overall-report.png" />
<img src="src/assets/Lighthouse Reports/performance-score.png" />
<img src="src/assets/Lighthouse Reports/accessibility-score.png" />
<img src="src/assets/Lighthouse Reports/best-practices and seo score.png" />

</p>

### Build in web

git clone https://github.com/Ananthasai5/SpaceX_Launches_App

### Running

Move to the directory space-x : cd space-x
then
yarn install  
from inside your project directory (i.e. where package.json is located) will install the dependencies for your app, rather than install it as a module. These will be placed in ./node_modules relative to your package.json file.

### Running application

Run inside project folder:
yarn start
If everything is set up correctly, you should see your new app running in your browser shortly.
Now run npm start to start development server.
npm start

### That's it!

# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `yarn start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

### `yarn test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `yarn build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `yarn eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.
