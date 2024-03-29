import allEntries from "./entriesDom.js"
const API = {
    myData: () => {
        return fetch("http://localhost:3000/myJournalEntries?_sort=date&_order=desc&_expand=mood")
            .then(entries => entries.json())
    },
    searchData: (searchAll) => {
        return fetch(`http://localhost:3000/myJournalEntries?&_expand=mood&q=${searchAll}`)
            .then(entries => entries.json())
    },
    newEntry: (entryObject) => {
        return fetch("http://localhost:3000/myJournalEntries", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(entryObject)
        })
    },
    moodEntries: (filterMood) => {
        return fetch(`http://localhost:3000/myJournalEntries?&_expand=mood&moodId=${filterMood}`)
            .then(response => response.json())
    },
    updateForm: (journalId) => {
        const hiddenJournalId = document.querySelector("#journalId")
        const dateInput = document.querySelector("#date--")
        const conceptsInput = document.querySelector("#conceptsCovered--")
        const contentInput = document.querySelector("#content--")
        const moodInput = document.querySelector("#moodsSection")

        fetch(`http://localhost:3000/myJournalEntries/${journalId}?_expand=mood`)
            .then(response => response.json())
            .then(entry => {
                console.log("edit fetch", entry)
                hiddenJournalId.value = entry.id
                dateInput.value = entry.date
                conceptsInput.value = entry.conceptsCovered
                contentInput.value = entry.content
                moodInput.value = entry.moodId
            })
    },
    saveEntry: (journalId) => {
        const updatedObject = {
            date: document.querySelector("#date--").value,
            conceptsCovered: document.querySelector("#conceptsCovered--").value,
            content: document.querySelector("#content--").value,
            moodId: parseInt(document.querySelector("#moodsSection").value)
        }

        return fetch(`http://localhost:3000/myJournalEntries/${journalId}`, {
            method: "PUT",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(updatedObject)
        })
            .then(res => res.json())
            .then(() => {
                document.querySelector("#journalId").value = ""
                document.querySelector("#date--").value = ""
                document.querySelector("#conceptsCovered--").value = ""
                document.querySelector("#content--").value = ""
                document.querySelector("#moodsSection").value = ""
            })
    },
    deleteEntry: (journalId) => {
        return fetch(`http://localhost:3000/myJournalEntries/${journalId}`, {
            method: "DELETE"
        })
            .then(response => response.json())
    },
    myMoods: () => {
        return fetch(`http://localhost:3000/moods`)
            .then(moods => moods.json())
    }
}

export default API

// original fetch call function that is called by journal.js - nothing imported, only data sent out to be used by other functions (all called in main file)