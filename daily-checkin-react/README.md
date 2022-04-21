# How to run my project

## App.js contains both the quote component and the check-in component
To execute the quote component, do export default quote
To execute the daily check in component, do export default app

### It is currently impossible to execute both the quote and check-in component at the same time!

## For CSS
The App.css file controls the style of the daily-check in component
The index.css file controls the style of index.html, which affects the style of the quote component.

## For RandomQuote.js
I believe that the entirety of the random quotes page is present in the App.js file, under the quote component comment.
This essentially means that the RandomQuote.js component is not required, however I have not tried running the program without that component.

## For the final project
The components folder should be present in the final product, and each of our pages should be a react component that is present under that folder, and I believe app.js should contain a navbar that calls a component when the corresponding link is clicked.
