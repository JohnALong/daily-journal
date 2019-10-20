
const journalEntryComponent = (journalEntry) => {
    return `
    <div class=entries>
        <div class="date">${journalEntry.date}</div>
        <div class="concepts">${journalEntry.conceptCovered}</div>
        <div class="content">${journalEntry.contentsEntered}</div>
        <div class="mood">${journalEntry.moodOfDay}</div>
        `
}


const entryBreakDown = (journalArray) => {
    let htmlString = ""
    journalArray.forEach(entry => {
        console.log("i have no clue", entry)
        htmlString += journalEntryComponent(entry)
    })
    console.log("html", htmlString)
    const journalDom = document.querySelector(".entryLog").innerHTML = htmlString
}

const myData = (searchJournal) => {
    return fetch("http://localhost:3000/myJournalEntries")
        .then(entries => entries.json())
}

myData().then(parsedEntries => {
    entryBreakDown(parsedEntries)
})