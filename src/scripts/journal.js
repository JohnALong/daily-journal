import API from "./data.js"
import allEntries from "./entriesDom.js"

API.myData().then(parsedEntries => {
    allEntries.entryBreakDown(parsedEntries)
})