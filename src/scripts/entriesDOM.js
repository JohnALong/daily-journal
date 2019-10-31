import toDom from "./entryComponent.js"
const allEntries = {
    entryToDom: (journalArray) => {
        let htmlString = ""
        journalArray.forEach(entry => {
            console.log("i have no clue")
            htmlString += toDom.journalEntryComponent(entry)
        })
        console.log("html")
        document.querySelector(".entryLog").innerHTML = htmlString
    },
    formToDom: () => {
        let htmlForm = toDom.journalFormComponent()
        document.querySelector(".form").innerHTML = htmlForm
    }
}
export default allEntries;

// entryBreakDown executed from call from journal.js - that function pulls in data from entryComponent.js and loops through that information and exectutes function written in entryComponent.js