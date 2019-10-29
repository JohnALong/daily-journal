const toDom = {
    journalEntryComponent: (journalEntry) => {
        return `
    <div class=entries>
        <div class="date">${journalEntry.date}</div>
        <div class="concepts">${journalEntry.conceptCovered}</div>
        <div class="content">${journalEntry.contentsEntered}</div>
        <div class="mood">${journalEntry.moodOfDay}</div>
        `
    }
}
export default toDom;

// function written to populate dom with journal entries and called in entriesDom.js - nothing needed to be imported to this, only exported out to be used in entriesDOM.js