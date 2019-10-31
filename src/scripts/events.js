import API from "./data.js"
import allEntries from "./entriesDom.js"
const events = {
    handleSendIt: () => {
        let date = document.getElementById("date").value
        if (document.getElementById("conceptsCovered").value === "") {
            alert("Please enter the concept covered")
        }  else {
        let conceptsCovered = document.getElementById("conceptsCovered").value
        }
        if (document.getElementById("content").value === "") {
            alert("Please type your entry!")
        }  else {
        let content = document.getElementById("content").value
        }
        let mood = document.getElementById("mood").value
        const entryObject = createJournalEntry(date, conceptsCovered, content, mood)
        console.log("please let this work", entryObject)
        API.newEntry(entryObject).then(API.myData).then(allEntries.entryToDom)
    }
}
const createJournalEntry = (date, conceptsCovered, content, mood) => {
    return {
        date: date,
        conceptsCovered: conceptsCovered,
        content: content,
        mood: mood
    }
}
export default events;