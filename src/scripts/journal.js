import API from "./data.js"
import allEntries from "./entriesDom.js"
import events from "./events.js"

allEntries.formToDom()
// debugger
API.myData()
events.handleSendIt()

events.filterMoodEvent()
events.deleteJournalEntry()
events.editJournalEntry()
events.saveJournalEntry()
events.searchJournalEntry()
// events.filterMoodTakeTwo()



// calls the initial fetch of data imported from data.js

// waits for that data to be converted to json and 2nd .then executes 

// start of Journal exercise 7 - doing all in main js file for testing before modularizing

// factory function to create object of entry




