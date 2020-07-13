# adMarketplace Take-Home

###### Author: Tom Herrmann

### Deployed Application

[adMarketplace Take-Home](https://amp-takehome.herokuapp.com/)

## Requirements

1.  Create a phone directory web application using ReactJS, HTML, and CSS. The web application should
    have two views:

    1. List View

       - The initial contact list (data) should be retrieved from the API and stored in the
         browser’s local storage; See the API call details below.
       - This view should show the list of first and the last names and should be alphabetically
         sorted by the last name in ascending order
       - When the page is refreshed the list should be taken from the browser’s local storage (if
         data is already stored in the local storage otherwise call the API to get the data)

    2. Detailed View
       - When a contact is selected from the list view, the detailed view should slide in from the
         right
       - Users should be able to edit the contact information and save the changes
       - Saved changes should reflect in the views and it should also be updated in the local
         storage
         ○ On Cancel, Save or Back button take the user back to the List View`

    Get initial contact list API:
    Endpoint: https://v3c3w2t164.execute-api.us-east-2.amazonaws.com/v1

    - Required Header: x-api-key: GkwUbWhmDS5teATL3l6724mI4JUMT3OWa5PnmJVf

2.  Write unit tests where appropriate.

## Note

- Despite this being a small project, do your best and write production-quality code and
  design/develop and structure this project as you would a large frontend application.
  Deliver

## Deliver

1. A ZIP file of your IDE project
2. In a couple of sentences explain the details and reasons behind your implementation and design/data structure decisions.

## Details & Reasons

This Contact List application incorporates ReactJS, HTML, and CSS as required, along with Nodejs with Express on the backend, near complete unit testing with Jest and Enzyme, and Redux state management. Though the Redux store acts as the single source of truth for the majority of the application, local state is leveraged to maintain a controlled form component without prop-drilling.

The app does include a dispatch action apiError, which isn't used to its potential. The action is called upon a fetch error and upstates the state errorStatus property with the API error code. This data could be used to relay more detailed information to users via a modal when errorStatus is not null if this app were put into production.

## Usage

1. Clone this repository

2. Run the following terminal command in the project's root directory

NPM:

```
npm i
```

Yarn:

```
yarn
```

3. Run the following to build your bundle file

NPM:

```
npm run build
```

Yarn:

```
yarn run build
```

4. Run the following to start your server

NPM:

```
npm start
```

Yarn:

```
yarn start
```

5. Proceed to [localhost:3000](http://localhost:3000/)

## Testing

1. Run the following command in the root directory

NPM:

```
npm run test
```

Yarn:

```
yarn run test
```

## Contribute

1. Clone this repository

2. Run the following terminal command in the project's root directory

NPM:

```
npm i
```

Yarn:

```
yarn
```

3. Run the following to start your dev server

NPM:

```
npm run dev
```

Yarn:

```
yarn run dev
```
