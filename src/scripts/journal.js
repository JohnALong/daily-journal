import API from "./data.js"
import allEntries from "./entriesDom.js"
import events from "./events.js"
// import toDom from "./entryComponent.js"
allEntries.formToDom()

API.myData().then(parsedEntries => {
    allEntries.entryToDom(parsedEntries)
})

document.getElementById("submit-button").addEventListener("click", events.handleSendIt)

// new code
let moodArray = document.getElementsByName("moodButton")
console.log("mood", moodArray)

moodArray.forEach(mood => {
    mood.addEventListener("click", event => {
        const thisMood = event.target.value
        console.log("values", thisMood)
    })
})
// Once you have successfully retrieved the value of ok, happy, or sad based on which radio button was clicked, you need to filter all of the journal entries. The most straightforward way of doing this is to invoke the getJournalEntries() method on your data manager object - which will get all entries - and then use the filter() array method to extract only the entries that have the same mood as the one the user clicked on.

// Once you have filtered the entries by mood, invoke the function that renders the HTML representations to the DOM and pass it the filtered array of entries.

// calls the initial fetch of data imported from data.js

// waits for that data to be converted to json and 2nd .then executes 

// start of Journal exercise 7 - doing all in main js file for testing before modularizing

// factory function to create object of entry




