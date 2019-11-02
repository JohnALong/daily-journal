import API from "./data.js"
import allEntries from "./entriesDom.js"
const events = {
    handleSendIt: () => {
        let date = document.getElementById("date").value
        let conceptsCovered = document.getElementById("conceptsCovered").value
        let content = document.getElementById("content").value
        let mood = document.getElementById("mood").value
        const entryObject = events.createJournalEntry(date, conceptsCovered, content, mood)
        console.log("please let this work", entryObject)
        API.newEntry(entryObject).then(API.myData).then(allEntries.entryToDom)
    },
    createJournalEntry: (date, conceptsCovered, content, mood) => {
        return {
            date: date,
            conceptsCovered: conceptsCovered,
            content: content,
            mood: mood
        }
    },
    // new code
    filterMoodEvent() {
        let filterMood
        document.getElementsByName("moodButton").forEach(button => button.addEventListener("click", () => {
            filterMood = event.target.value
            console.log("filterMood", filterMood)
            API.moodEntries(filterMood)
                .then(response => allEntries.entryToDom(response))
        }))

    }
}




export default events;