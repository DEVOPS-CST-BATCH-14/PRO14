# Authentication Service #
Project Code: G0003

Authentication Service is part of User Authentication Infrastructure. It is built around [Shopping website cognito](https://aws.amazon.com/cognito/) User Pools and Identify Pools.

## Use Cases ##

### Use Case Diagram ###
![usecase.JPG](usecase.JPG)

## User Stories ##
### G0003-001: Register ###

* Actor: User without Email ID
* Pre Condition:

1. User should have a working email-id which is not already registered with Shopping website.

* Input:

1. Name of the User.
2. Working email id.
3. Preferred password with 8 characters (alphanumeric with at least one upper case and one lower case letter)

* Sequence:

1. User opens the webpage and click on 'Register'.
2. Registration page appears.
3. User supplies the name, a working email-id, and the preferred password.
4. Page displays a message to check e-mail and prompts for activation code.
5. User enters the activation code.
6. Page displays success message and redirects to the login page.

* Post Condition:

1. Page displays success message and the login page appears

* Exceptions:

1. Registration page re-appears with an appropriate message if the user enters an invalid name or invalid email-ID or invalid password.
2. Registration page re-appears with an appropriate message if the email-ID is already registered with the Shopping website.
3. Registration page shows a "resend" button, in case the activation code is not entered in the first 5 minutes after the mail has been sent.
4. Registration page will not show any special message if the email-ID is not reachable. It just prompts for an activation code, as usual.

### G0003-002: Login with Inactive Glarimy-ID ###

* Actor: User with Inactive Email-ID

* Pre Condition:

1. User should have a registered Email ID and password with the Shopping website.

* Input:

1. Email ID
2. Password

* Sequence:

1. User opens the webpage and clicks on ‘Login’
2. Login page appears
3. User supplies Email ID and password
4. Page indicates that the Email ID is yet to be activated.
4. Page displays a message to check email and prompts for an activation code
5. User enters the activation code
6. Page displays a success message and redirects to the login page

* Post Condition:

1. Page displays a message ‘successfully activated and the login page appears

* Exceptions:

1. Login page re-appears with an appropriate message if the user enters an invalid Email ID or password.
2. Prompt box re-appears with an appropriate message if the user enters an invalid Activation Code.
3. Login page re-appears with an appropriate message if the user fails to enter a valid Activation Code within 5 minutes.

### G0003-003: Login with Active Email ID ###

* Actor: User with Active Email ID 

* Pre Condition:

1. User should have activated the Email ID

* Input:

1. Email ID. 
2. Password.

* Sequence:
 
1. User opens the login web page
2. User supplies his/her Email ID and Password
3. User clicks on the login button
4. User home page appears

* Post Condition:

1. User home page appears with the name of the user displayed.

* Exceptions:

1. Login page re-appears with an appropriate message if the user enters an invalid Email ID or password.

### G0003-004 Reset Password ###

* Actor: User with Active Email ID 
 
* Pre Condition:

1. User should have an active Email ID with the Shopping website.

* Input:

1. Email ID

* Sequence:

1. User opens the login page.
2. User clicks on the forgot password button.
3. User enters Email ID
4. Page prompts for a new password and clicks on "Reset Password"
4. Page displays a message to check email and prompts for an activation code
5. User enters the activation code
6. Page displays a success message and redirects to the login page

* Post Condition:

1. User should be able to log in with new credentials

* Exceptions:

1. Login page re-appears with an appropriate message if the user enters an invalid Email-ID.
2. Prompt box re-appears with an appropriate message if the user enters an invalid activation code.

### G0003-005 Change Profile  ###

* Actor: User with Active Email ID

* Pre Condition:

1. User should have logged into the Shopping website

* Input:

1. Name (optional)
2. Profile Pic with a max size of 5KB in the formats of JPG/PNG(optional)
3. Phone Number (optional)
4. Permanent Address (optional)
5. Password (optional)

* Sequence:

1. User clicks on the profile
2. Page displays the current profile of the user
3. User changes one or more details
4. Page displays a "Save" button
5. User clicks on "Save" button
6. Page displays an appropriate success message. 

* Post Condition:

1. User should be able to see the updated profile

* Exceptions:

1. Displays an error message in case an invalid password is entered
2. Displays an error message in case an invalid phone number is entered
3. Displays an error message in case the name is invalid
4. Displays an error message in case of an invalid size/format for the profile pic

### G0003-006 Logout ###

* Actor: User with an Active Email ID

* Pre Condition:

1. User should have logged in to a working Email ID.

* Input:

1. None

* Sequence:

1. User clicks on Logout.
2. Page displays a message ‘successfully Logout ‘ and the login page appears.

* Post Condition:

1. The login screen appears
2. Back button or bookmarks fail to open any of the login-protected pages of the web app

* Exceptions:

1. Not Applicable

### G0003-007 De-activate Email-ID ###

* Actor: User with an Active Email ID

* Pre Condition:

1. User should be logged in with an Active Email ID.

* Input:

1. None

* Sequence:

1. User clicks on deactivate.
2. Page displays an optional feedback prompt with a reason (Not Useful | Expensive | Low Quality) for leaving. 
3. User enters/skips feedback.
4. Page displays a message ‘successfully deactivated’ and the login page appears.

* Post Condition:

1. The user should not be able to log in to the Shopping website without activating the ID again.
2. Back button or bookmarks fail to open any of the login-protected pages of the web app

* Exceptions:

1. Not Applicable

## Workflow ##

### Workflow Diagram ###
![Workflow.JPG](Workflow.JPG)

## Development ##

### Dependencies ###
1. Nodejs 10+
2. Visual Studio Code

### How to run ###
1. Move to the 'app' folder
```
cd app
```
2. Install the dependencies
```
npm install
``` 
3. Run the app
```
npm start
```
4. Verify http://localhost:8081

# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).


## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can't go back!**

If you aren't satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you're on your own.

You don't have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn't feel obligated to use this feature. However we understand that this tool wouldn't be useful if you couldn't customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: [https://facebook.github.io/create-react-app/docs/code-splitting](https://facebook.github.io/create-react-app/docs/code-splitting)

### Analyzing the Bundle Size

This section has moved here: [https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size](https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size)

### Making a Progressive Web App

This section has moved here: [https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app](https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app)

### Advanced Configuration

This section has moved here: [https://facebook.github.io/create-react-app/docs/advanced-configuration](https://facebook.github.io/create-react-app/docs/advanced-configuration)

### Deployment

This section has moved here: [https://facebook.github.io/create-react-app/docs/deployment](https://facebook.github.io/create-react-app/docs/deployment)

### `npm run build` fails to minify

This section has moved here: [https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify](https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify)
