const API = {
    myData: () => {
        return fetch("http://localhost:3000/myJournalEntries")
            .then(entries => entries.json())
    }
}

export default API

// original fetch call function that is called by journal.js - nothing imported, only data sent out to be used by other functions (all called in main file)