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