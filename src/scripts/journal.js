// console.log("my journal ROCKS!");
const journalEntry1 = {
    entryDate: "10-14-2019",
    conceptCovered: "manipulating the dom with Javascript",
    contentsEntered: "We learned how to use javascript to make a dynamic file that is repeatable without having to manually create each object.",
    moodOfDay: "Bright Eyed",
}
const journalEntry2 = {
    entryDate: "10-14-2019",
    conceptCovered: "accessing objects",
    contentsEntered: "using dot and bracket notation how to access deeper elements of an array of objects.  also utilized loops both for, and for in to get info to assist with this.",
    moodOfDay: "Nervous",
}
const journalEntry3 = {
    entryDate: "10-14-2019",
    conceptCovered: "loops, concatenation, and back tic syntax",
    contentsEntered: "built a sentence from individual words in an array.  also added information into the sentence using javascript.",
    moodOfDay: "Exhausted",
}
const journalEntry4 = {
    entryDate: "10-14-2019",
    conceptCovered: "group project for html and css",
    contentsEntered: "how to work as a team, build simple page using htm and css for styling.",
    moodOfDay: "Bright Eyed",
}

const myJournalEntries = [];
myJournalEntries.push(journalEntry1);
myJournalEntries.push(journalEntry2);
myJournalEntries.push(journalEntry3);
myJournalEntries.push(journalEntry4);

console.log("array", myJournalEntries);
console.log("object", journalEntry);

const journalEntryComponent = (journalEntry) => {
    return `
    <div class=entries>
        <div class="date">${journalEntry.entryDate}</div>
        <div class="concepts">${journalEntry.conceptCovered}</div>
        <div class="content">${journalEntry.contentsEntered}</div>
        <div class="mood">${journalEntry.moodOfDay}</div>
        `
}
const journalContainer = document.querySelector(".entryLog");

for (let i = 0; i < myJournalEntries.length; i++) {
    const entry = myJournalEntries[i];
    journalContainer.innerHTML += journalEntryComponent(entry);
    console.log("why are you null", journalEntryComponent)
}
