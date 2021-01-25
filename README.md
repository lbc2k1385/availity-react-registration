### availity-registration-demo

Project is a react application that serves as a dummy user registrtion form for Availity. This project is not connected to any services and uses dummy data to set the state dropdown in the form. Input validation is done to ensure that all fields are present.  Additional logic has been added to the ensure that the NPI number can not be a negative number, both email text boxes should match, and
the phone number should be in ###-###-#### format or the form cannot be submitted.

Because this app is not connected to any services, the data has simply been logged to the console
to serve as 'submission' of the form.

### `yarn start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

### `yarn build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.
