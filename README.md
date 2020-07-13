# adMarketplace Take-Home

###### Author: Tom Herrmann

## Requirements

1. Create a phone directory web application using ReactJS, HTML, and CSS. The web application should
   have two views:
1. List View: (see diagram A)

   - The initial contact list (data) should be retrieved from the API and stored in the
     browser’s local storage; See the API call details below.
   - This view should show the list of first and the last names and should be alphabetically
     sorted by the last name in ascending order
   - When the page is refreshed the list should be taken from the browser’s local storage (if
     data is already stored in the local storage otherwise call the API to get the data)

1. Detailed View: (see diagram B)
   - When a contact is selected from the list view, the detailed view should slide in from the
     right
   - Users should be able to edit the contact information and save the changes
   - Saved changes should reflect in the views and it should also be updated in the local
     storage
     ○ On Cancel, Save or Back button take the user back to the List View

Get initial contact list API:
Endpoint: https://v3c3w2t164.execute-api.us-east-2.amazonaws.com/v1

- Required Header: x-api-key: GkwUbWhmDS5teATL3l6724mI4JUMT3OWa5PnmJVf

2. Write unit tests where appropriate.
   Note
   - Despite this being a small project, do your best and write production-quality code and
     design/develop and structure this project as you would a large frontend application.
     Deliver
1. A ZIP file of your IDE project
1. In a couple of sentences explain the details and reasons behind your implementation and design/data structure decisions.
