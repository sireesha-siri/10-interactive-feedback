In this project, let's create the **Interactive Feedback** Appg the concepts we
have learned till now.

### Refer to the image below:

<br/>
<div style="text-align: center;">
    <img src="https://assets.ccbp.in/frontend/content/react-js/feedback-app-output.gif" alt="counter-output" style="max-width:70%;box-shadow:0 2.8px 2.2px rgba(0, 0, 0, 0.12)">
</div>
<br/>

### Set Up Instructions

<details>
<summary>Click to view</summary>

- Download dependencies by running `npm install`
- Start up the app using `npm run dev`
</details>

### Completion Instructions

<details>
<summary>Functionality to be achieved</summary>
<br/>

- Initially, the app should display a rating selection view with:
  - A heading "Rate Our Service"
  - Five rating buttons (1-5)
  - A Submit button (which should be disabled)
- The app contains two components:
  - `FeedbackApp:` The main component that manages state and renders different
    views
  - `RatingItem:` A reusable component that renders each rating button
- When a rating button is clicked:
  - The selected rating button should get the `selected` class
  - The Submit button should become enabled
- When the Submit button is clicked after selecting a rating:
  - The Thank You view should be displayed with:
    - A heading "Thank You!"
    - Text showing the selected rating (e.g., "You selected 4 out of 5")
- Component Communication:
  - The `FeedbackApp` component should pass the necessary props to each
    `RatingItem` component:
    - `rating:` The rating number (1-5)
    - `isSelected:` A boolean indicating if this rating is currently selected
    - `onSelectRating:` A callback function to handle rating selection

### Implementation Files

<details>
<summary>Click to view</summary>

Use these files for implementation:

- src/App.js
- src/components/FeedbackApp/index.js
- src/components/FeedbackApp/index.css
- src/components/RatingItem/index.js
- src/components/RatingItem/index.css

</details>

> ### _Things to Keep in Mind_
>
> - The `RatingItem` component should be a pure presentational component that
>   receives all data and handlers via props.
> - The `FeedbackApp` component should handle all the state management.
> - All components you implement should go in the `src/components` directory.
> - Don't change the component folder names as those are the files being
>   imported into the tests.
> - **Do not remove the pre-filled code**
> - Want to quickly review some of the concepts you’ve been learning? Take a
>   look at the Cheat Sheets.
