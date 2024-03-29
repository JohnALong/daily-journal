import API from "./data.js"
import allEntries from "./entriesDom.js"
const journalList = document.querySelector("#journalList")
const formList = document.querySelector(".form")

const events = {
    // send event for new entries
    handleSendIt: () => {
        // ****fix that submit button sends empty object when fields are empty - needs if/else for .value = ""
        formList.addEventListener("click", event => {
            if (event.target.id.startsWith("submit--")) {
                let date = document.getElementById("date--").value
                let conceptsCovered = document.getElementById("conceptsCovered--").value
                let content = document.getElementById("content--").value
                let moodId = document.querySelector(".moodClass").value
                const entryObject = events.createJournalEntry(date, conceptsCovered, content, moodId)
                console.log("please let this work", entryObject)
                API.newEntry(entryObject).then(API.myData).then((parsedEntries) => {
                    allEntries.entryToDom(parsedEntries)
                    document.querySelector("form").reset()
                })
            }
        })
    },
    // factory function for entries
    createJournalEntry: (date, conceptsCovered, content, moodId) => {
        return {
            date: date,
            conceptsCovered: conceptsCovered,
            content: content,
            moodId: parseInt(moodId)
        }
    },
    filterMoodEvent: () => {
        formList.addEventListener("click", event => {
            let filterMood
            document.getElementsByName("moodButton").forEach(() => {
                filterMood = event.target.value
                if (event.target.name.startsWith("moodButton")) {
                    API.moodEntries(filterMood)
                        .then(response => allEntries.entryToDom(response))
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
                const searchValue = document.getElementById("searchEntries--").value
                console.log("searchValue", searchValue)
                API.searchData(searchValue)
                    .then(entries => allEntries.entryToDom(entries))
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
                        .then(parsedEntries => {
                            (console.log("parsedEntries", parsedEntries))
                            allEntries.entryToDom(parsedEntries)
                        })
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
                    .then(allEntries.entryToDom)
            }
        })
    }
}

export default events;