# Would You Rather

Project created for the Udacity React Nanodegree Program.

[LIVE PREVIEW](https://magda-korzeniowska.github.io/reactnd-project-would-you-rather/)

## Table of Contents

* [Project Description](#project-description)
* [Installation](#installation)
* [File Structure](#file-structure)
* [Backend Server](#backend-server)
* [Create React App](#create-react-app)
* [Important](#important)
* [Dependencies](#dependencies)
* [Sources](#sources)
* [Contributing](#contributing)

## Project Description

In the **Would You Rather** Project, students had to build a web app that lets a user play the “Would You Rather?” game. The game goes like this: A user is asked a question in the form: “Would you rather [option A] or [option B] ?”. Answering "neither" or "both" is against the rules.

The project's goal was to solidify an understanding of React and Redux and practice improving the predictability of an application’s state; establish strict rules for getting, listening, and updating the store; and identify what state should live inside of Redux and what state should live inside of React components.

For the **Would You Rather** Project, students were given [a starter code](https://github.com/udacity/reactnd-project-would-you-rather-starter) - which consists only of **The _DATA.js** file, which represents a fake database and methods that let you access the data.

The app uses React and Redux with react-redux, react-redux-loading, react-router-dom, redux-thunk packages. The complete list of dependencies can be found below.

## Installation
1. Clone repository using:

    `$ git clone https://github.com/magda-korzeniowska/reactnd-project-would-you-rather-starter`

2.  Install all dependencies:

    `$ npm install`

3. Run application:

    `$ npm start`

4. After running npm start, the React App should open automatically in your browser. If it doesn't, open `localhost:3000` in your browser.

## File Structure
```bash
├── README.md
├── package-lock.json
├── package.json
├── yarn.lock
├── public
│   ├── favicon.ico
│   ├── index.html
│   └── manifest.json
└── src
    ├── actions
    │   ├── authedUser.js
    │   ├── questions.js
    │   ├── shared.js
    │   └── users.js
    ├── components
    │   ├── Dashboard.js
    │   ├── Leaderboard.js
    │   ├── Login.js
    │   ├── Nav.js
    │   ├── NewQuestion.js
    │   ├── PageNotFound.js
    │   ├── Question.js
    │   ├── QuestionBox.js
    │   ├── QuestionPage.js
    │   └── Results.js
    ├── images
    │   ├── angie-newman.jpg
    │   ├── erik-roman.jpg
    │   └── vipin-cordoba.jpg
    ├── middleware
    │   ├── index.js
    │   └── logger.js
    ├── reducers
    │   ├── authedUser.js
    │   ├── index.js
    │   ├── questions.js
    │   └── users.js
    ├── utils
    │   ├── _DATA.js
    │   └── api.js
    ├── App.css
    ├── App.js
    ├── App.test.js
    ├── index.css
    ├── index.js
    └── serviceWorker.js
```

## Backend Server

The provided by Udacity file [`_DATA.js`](src/utils/_DATA.js) contains the methods needed to perform necessary operations on the backend:

* `_getUsers()`
* `_getQuestions()`
* `_saveQuestion(question)`
* `_saveQuestionAnswer(object)`

**_getUsers() Method**
Description: Get all of the existing users from the database.
Return Value: Object where the key is the user’s id and the value is the user object.

**_getQuestions() Method**
Description: Get all of the existing questions from the database.
Return Value: Object where the key is the question’s id and the value is the question object.

**_saveQuestion(question) Method**
Description: Save the polling question in the database.
Parameters: Object that includes the following properties: author, optionOneText, and optionTwoText. More details about these properties:

* author - String - The id of the user who posted the question
* optionOneText - String- The text of the first option
* optionTwoText - String- The text of the second option

Return Value: An object that has the following properties: id, author, optionOne, optionTwo, timestamp. More details about these properties:

* id - String - The id of the question that was posted
* author - String - The id of the user who posted the question
* optionOne - Object - The object has a text property and a votes property, which stores an array of the ids of the users who voted for that option
* optionTwo - Object - The object has a text property and a votes property, which stores an array of the ids of the users who voted for that option
* timestamp - String - The time when the question was created

**_saveQuestionAnswer(object) Method**
Description: Save the answer to a particular polling question in the database. Parameters: Object that contains the following properties: authedUser, qid, and answer. More details about these properties:

* authedUser - String - The id of the user who answered the question
* qid - String - The id of the question that was answered
* answer - String - The option the user selected. The value should be either "optionOne" or "optionTwo"

## Create React App
This project was bootstrapped with [Create React App](https://github.com/facebookincubator/create-react-app)

## Important
The application can be run offline using the service worker that is provided by create-react-app. It will work only on production build (production mode)

## Dependencies
- [create-react-app](https://github.com/facebookincubator/create-react-app)
- [redux](https://www.npmjs.com/package/redux)
- [react-redux](https://www.npmjs.com/package/react-redux)
- [react-redux-loading](https://www.npmjs.com/package/react-redux-loading)
- [react-router-dom](https://www.npmjs.com/package/react-router-dom)
- [redux-thunk](https://www.npmjs.com/package/redux-thunk)

## Sources
- images: [Unsplash](https://unsplash.com/)

## Contributing
This is a Udacity student's project. Therefore, no pull requests will be accepted.
