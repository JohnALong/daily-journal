const API = {
    myData: (searchJournal) => {
        return fetch("http://localhost:3000/myJournalEntries")
            .then(entries => entries.json())
    }
}

export default API