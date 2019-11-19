const toDom = {
    journalEntryComponent: (journalEntry) => {
        console.log("journalEntry", journalEntry.mood)
        return `
        <div class="entries">
            <div class="date">${journalEntry.date}</div>
            <div class="concepts">${journalEntry.conceptsCovered}</div>
            <div class="content">${journalEntry.content}</div>
            <div class="mood">${journalEntry.mood.label}</div>
            <button id="deleteEntry--${journalEntry.id}">Delete Entry</button>
            <button id="editEntry--${journalEntry.id}">Edit Entry</button>
        </div>    
        `
    },
    journalFormComponent: () => {
        return /*html*/`
        <h1>Daily Journal</h1>
        <form action="">
            <input type="hidden" id="journalId" value="" />
            <fieldset>
                <label for="journalDate">Date of entry</label>
                <input type="date" name="journalDate" id="date--">
            </fieldset>
            <fieldset>
                <label for="conceptsCovered">Concepts Covered</label>
                <input type="text" name="conceptsCovered" id="conceptsCovered--" required>
            </fieldset>
            <fieldset>
                <label for="journalEntry">Journal entry</label>
                <textarea name="journalEntry" id="content--" cols="30" rows="10" required></textarea>
            </fieldset>
            <fieldset>
            <select id="moodsSection" name="moodOfDay">
            </select>

             </fieldset>
        </form>
        <button id="submit--button">Send it!</button>
        <button id="saveEntry--">Save Edited Entry</button>
        <div id="filterSearch">
            <div id="filterBox">Filter Journal Entries by Mood
                <input type="radio" id="exhausted" name="moodButton" value= 1 checked>
                <label for="exhausted">Exhausted</label> 
                <input type="radio" id="brightEyed" name="moodButton" value= 2 checked>
                <label for="brightEyed">Bright Eyed</label> 
                <input type="radio" id="dejected" name="moodButton" value= 3 checked>
                <label for="dejected">Dejected</label> 
                <input type="radio" id="amazed" name="moodButton" value= 4 checked>
                <label for="amazed">Amazed</label> 
                <input type="radio" id="nervous" name="moodButton" value= 5 checked>
                <label for="nervous">Nervous</label> 
            </div>
            <div id="searchBox">
                <label for="searchEntries">Search Entries</label>
                <input type="text" name="searchEntries--" id="searchEntries--">
            </div>
        </div>
        `
    },
    moodButtons: (moodObject) => {
        return `
            <option class="moodClass" id="mood--${moodObject.id}" value="${moodObject.id}">${moodObject.label}</option>
        `
    },
    //     <fieldset>
    //     <select name="moodOfDay" id="mood--">
    //         <option value="exhausted">Exhausted</option>
    //         <option value="BrightEyed">Bright Eyed</option>
    //         <option value="dejected">Dejected</option>
    //         <option value="amazed">Amazed</option>
    //         <option value="nervous">Nervous</option>
    //     </select>
    //  </fieldset>

    // filterMoodButtons: (moodArray) => {
    //     return `
    //     <input type="radio" id="${moodArray.label}" name="moodButton" value = ${moodArray.id} checked>
    //             <label for="${moodArray.label}">${moodArray.label}</label> 
    //             `
    // }
}
export default toDom;

// function written to populate dom with journal entries and called in entriesDom.js - nothing needed to be imported to this, only exported out to be used in entriesDOM.js