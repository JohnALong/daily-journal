const toDom = {
    journalFormComponent: () => {
        return `
        <h1>Daily Journal</h1>
        <form action="">
        <fieldset>
        <label for="journalDate">Date of entry</label>
        <input type="date" name="journalDate" id="date">
        </fieldset>
        <fieldset>
        <label for="conceptsCovered">Concepts Covered</label>
        <input type="text" name="conceptsCovered" id="conceptsCovered" required>
        </fieldset>
        <fieldset>
        <label for="journalEntry">Journal entry</label>
        <textarea name="journalEntry" id="content" cols="30" rows="10" required></textarea>
        </fieldset>
        <fieldset>
        <select name="moodOfDay" id="mood">
        <option value="exhausted">Exhausted</option>
        <option value="brightEyed">Bright Eyed</option>
        <option value="dejected">Dejected</option>
        <option value="amazed">Amazed</option>
        <option value="nervous">Nervous</option>
        <option value="scared">Scared</option>
        </select>
        </fieldset>
        </form>
        <button id="submit-button">Send it!</button>
        `
    },
    journalEntryComponent: (journalEntry) => {
        return `
    <div class=entries>
        <div class="date">${journalEntry.date}</div>
        <div class="concepts">${journalEntry.conceptsCovered}</div>
        <div class="content">${journalEntry.content}</div>
        <div class="mood">${journalEntry.mood}</div>
        `
    }
}
export default toDom;

// function written to populate dom with journal entries and called in entriesDom.js - nothing needed to be imported to this, only exported out to be used in entriesDOM.js