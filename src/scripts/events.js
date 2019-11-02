import API from "./data.js"
import allEntries from "./entriesDom.js"
const journalList = document.querySelector("#journalList")
console.log("journalList", journalList)
const events = {
    // send event for new entries
    handleSendIt: () => {
        let date = document.getElementById("date--").value
        let conceptsCovered = document.getElementById("conceptsCovered--").value
        let content = document.getElementById("content--").value
        let mood = document.getElementById("mood--").value
        const entryObject = events.createJournalEntry(date, conceptsCovered, content, mood)
        console.log("please let this work", entryObject)
        API.newEntry(entryObject).then(API.myData).then(allEntries.entryToDom)
    },
    // factory function for entries
    createJournalEntry: (date, conceptsCovered, content, mood) => {
        return {
            date: date,
            conceptsCovered: conceptsCovered,
            content: content,
            mood: mood
        }
    },
    // new code
    filterMoodEvent: () => {
        // filters entries by mood selected
        let filterMood
        document.getElementsByName("moodButton").forEach(button => button.addEventListener("click", () => {
            filterMood = event.target.value
            console.log("filterMood", filterMood)
            API.moodEntries(filterMood)
                .then(response => allEntries.entryToDom(response))
        }))

    },
    deleteJournalEntry: () => {
        journalList.addEventListener("click", event => {
            if(event.target.id.startsWith("deleteEntry--")) {
            const entryToDelete = event.target.id.split("--")[1]
            console.log("entry to delete", entryToDelete)
            API.deleteEntry(entryToDelete)
            .then(API.myData)
            .then(allEntries.entryToDom)
            }
            console.log("delete listener")
        })
    }
}




export default events;