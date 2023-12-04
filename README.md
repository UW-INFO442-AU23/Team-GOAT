# Campus Care 

### Resource for Feminine Product 
## Mission Statement 
Our mission is to empower young women with comprehensive knowledge about menstrual cycles and reproductive health surrounding the resources around campus. We aim to provide accurate information and resources to help them navigate their upcoming periods by locating feminine care products with more ease & efficiency, ensuring a more informed and comfortable experience throughout their journey.

## Group Members
* Asigiah Aly
* Easha Dhillon
* Emily Blakeman
* Joyce Kim
* Tyler Takeuchi

## Features
* Interactive Map Feature 
* Filter Feature

# Development
## Built with:
* Javascript
* HTML
* CSS

## Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Start LocalHost

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

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


## Testing Protocol
|                           | **Feature #1: Interactive Map Feature** | **Feature #2: Filter Feature** 	|
|---------------------------|-----------------------------------------|--------------------------------	|
| **Requirement Specification** |Interactive map feature displaying locations on or  near the UW campus where feminine hygiene products  are available. Hovering over a location will open up a icon  tag allowing users to see further building information.| Users are able to filter feminine hygiene products on campus. This enables users to conveniently select map filters such as locational range allowing the user to to utilize the filter checkboxes. According to the side of campus, users can use categories including North, East, South, and West. The map will display the location points reflecting the selected categories immediately.|
| **Testing Cases** | *Validate if the map displays correctly *Clicking on the pop-up tag associated with the buildings *User Interaction by moving around/navigating the on the map *Map Zoom functionality by ensuring users can Zoom In/Out| * Validate the button are working correctly * Filtering by 'Campus' (North or West Campus) Click on either 'North Campus' or 'West Campus' filter button * Filtering by 'View All' * Filtering by 'Open Now'|
| **Expected Results** | * Displays the correct plot on the map * Tag populates corresponding information, minimizes other markers or previously opened tags * Click and drag allows the user to navigate * Boundaries are limited to the UW campus * Buttons are functional allowing users to zoom in and out * Pinch or 2 finger operations also work for zoom| * The button is clicked and provides feedback * Only items associated with the selected campus are displayed, while items from the other campus should be hidden * All items are displayed, and no items are hidden. * Only items that are currently open are displayed, while items that are closed should be hidden. |
| **Unexpected Results**        | * Incorrect plot with inaccurate info * Map doesn’t appear * Too zoomed in * Unresponsive Location Markers * Static map  | * Unresponsive button * After selecting a specific campus filter, items from both campuses are still visible *  Items from the selected campus are hidden * After clicking the 'View All' button, some items are hidden or not displayed 	|
| **Expected Deficiency**        | #1: map accuracy, especially in areas with irregular data or limited coverage. 
#2: Users may find the information in the pop-up tag insufficient or may desire additional details
#3: Limited navigation, especially if the map doesn't effectively convey boundaries the user is looking for
#4: Challenges in zooming | #1: inconsistencies in displaying all items if there are gaps or inaccuracies in the dataset #2: Encounter issues with real-time data accuracy due to accurate/unknown info regarding the building.| 
| **Workaround**        | * Check internet connectivity.
* Ensure the map data is up-to-date.
* If the marker is unresponsive, reloading the map may resolve the issue. 
* Access the linked UW Resource site listed with specific rooms to find feminine products on the resource page  
| 
| * If buttons are unresponsive, users can clear their browser cache and try again. 
* If items from both campuses are still visible, users can reload the map.
* Regularly update and maintain the dataset to ensure completeness.
* Clear browser cache and try again.
* Verify data consistency in the JSON file |




### Deployment

This section has moved here: [https://facebook.github.io/create-react-app/docs/deployment](https://facebook.github.io/create-react-app/docs/deployment)

