const allEntries = {
    entryBreakDown: (journalArray) => {
        let htmlString = ""
        journalArray.forEach(entry => {
            console.log("i have no clue")
            htmlString += toDom.journalEntryComponent(entry)
        })
        console.log("html")
        const journalDom = document.querySelector(".entryLog").innerHTML = htmlString
    }
}
