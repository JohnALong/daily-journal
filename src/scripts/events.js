import API from "./data.js"
import allEntries from "./entriesDom.js"
const journalList = document.querySelector("#journalList")
const formList = document.querySelector(".form")
console.log("journalList", journalList)
const events = {
    // send event for new entries
    handleSendIt: () => {
        // ****fix that submit button sends empty object when fields are empty - needs if/else for .value = ""
        formList.addEventListener("click", event => {
            if (event.target.id.startsWith("submit--")) {
                let date = document.getElementById("date--").value
                let conceptsCovered = document.getElementById("conceptsCovered--").value
                let content = document.getElementById("content--").value
                let mood = document.getElementById("mood--").value
                const entryObject = events.createJournalEntry(date, conceptsCovered, content, mood)
                console.log("please let this work", entryObject)
                API.newEntry(entryObject).then(API.myData).then(allEntries.formToDom)
            }
        })
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


    // filterMoodEvent: () => {
    //     // filters entries by mood selected
    //     let filterMood
    //     document.getElementsByName("moodButton").forEach(button => button.addEventListener("click", () => {
    //         filterMood = event.target.value
    //         console.log("filterMood", filterMood)
    //         API.moodEntries(filterMood)
    //             .then(response => allEntries.entryToDom(response))
    //         console.log("filter mood", filterMood)
    //     }))

    // },
    filterMoodEvent: () => {
        formList.addEventListener("click", event => {
            let filterMood
            document.getElementsByName("moodButton").forEach(button => {
                filterMood = event.target.value
                if (event.target.name.startsWith("moodButton")) {
                    API.moodEntries(filterMood)
                        .then(response => allEntries.entryToDom(response))
                    console.log("2ndFilterMood", filterMood)
                }
            })
        })
},

    editJournalEntry: () => {
        journalList.addEventListener("click", event => {
        if (event.target.id.startsWith("editEntry--")) {
            console.log("edit button clicked")
            const journalIdToEdit = event.target.id.split("--")[1]
            console.log("edit id", journalIdToEdit)
            API.updateForm(journalIdToEdit)
        }
    })
    },
searchJournalEntry: () => {
    formList.addEventListener("keyup", event => {
        if (event.target.id.startsWith("searchEntries--") && event.keyCode === 13) {
            console.log("search button clicked")
        }
    })
},
    saveJournalEntry: () => {
        formList.addEventListener("click", event => {
            const hiddenJournalId = document.querySelector("#journalId")
            console.log("hidden id", hiddenJournalId.value)
            if (event.target.id.startsWith("saveEntry--")) {
                if (hiddenJournalId.value !== "") {
                    API.saveEntry(journalId.value)
                        .then(API.myData)
                }
            } else {
                console.log("it's not working")
            }
        })
    },
        deleteJournalEntry: () => {
            journalList.addEventListener("click", event => {
                if (event.target.id.startsWith("deleteEntry--")) {
                    const entryToDelete = event.target.id.split("--")[1]
                    console.log("entry to delete", entryToDelete)
                    API.deleteEntry(entryToDelete)
                        .then(API.myData)
                }
            })
        }
}




export default events;