import API from "./data.js"
import allEntries from "./entriesDom.js"

API.myData().then(parsedEntries => {
    allEntries.entryBreakDown(parsedEntries)
})

// calls the initial fetch of data imported from data.js

// waits for that data to be converted to json and 2nd .then executes 

// start of Journal exercise 7 - doing all in main js file for testing before modularizing
function sendButtonHandle() {
    // let date = document.getElementById(".date").value
    // let conceptsCovered = document.getElementById(".concepts").value
    // let content = document.getElementById(".content").value
    // let mood = document.getElementById(".mood").value
    console.log("this works")
}
sendButtonHandle()

const createJournalEntry = (date, conceptsCovered, content, mood) => {
    return {
        date: date,
        conceptsCovered: conceptsCovered,
        content: content,
        mood: mood
    }
}


// document.getElementById("submit-button").addEventListener("click", sendButtonHandle()





