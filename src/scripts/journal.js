import API from "./data.js"
import allEntries from "./entriesDom.js"

API.myData().then(parsedEntries => {
    allEntries.entryBreakDown(parsedEntries)
})

// calls the initial fetch of data imported from data.js

// waits for that data to be converted to json and 2nd .then executes 