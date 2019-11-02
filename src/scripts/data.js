const API = {
    myData: () => {
        return fetch("http://localhost:3000/myJournalEntries")
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
        return fetch(`http://localhost:3000/myJournalEntries?mood=${filterMood}`)
            .then(response => response.json())
    },
    deleteEntry: (journalId) => {
        return fetch (`http://localhost:3000/myJournalEntries/${journalId}`, {
            method: "DELETE"
        })
        .then(response => response.json())
    }
}

export default API

// original fetch call function that is called by journal.js - nothing imported, only data sent out to be used by other functions (all called in main file)