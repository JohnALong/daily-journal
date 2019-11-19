import toDom from "./entryComponent.js"
import API from "./data.js"
const allEntries = {
    entryToDom: (journalArray) => {
        let htmlString = ""
        journalArray.forEach(entry => {
            htmlString += toDom.journalEntryComponent(entry)
        })
        document.querySelector(".entryLog").innerHTML = htmlString
    },
    formToDom: () => {
        let htmlForm = toDom.journalFormComponent()
        document.querySelector(".form").innerHTML = htmlForm
        API.myMoods()
            .then(parsedMoods => {
                allEntries.moodsToDom(parsedMoods)
            })
    },
    moodsToDom: (moodArray) => {
        const moodSectionTest = document.querySelector("#moodsSection")
        moodArray.forEach(mood => {
            console.log("moodString", mood.label)
            moodSectionTest.innerHTML += toDom.moodButtons(mood)
        })

        // document.querySelector("#moodsSection").innerHTML = moodString
    }
}
export default allEntries;

// entryBreakDown executed from call from journal.js - that function pulls in data from entryComponent.js and loops through that information and exectutes function written in entryComponent.js