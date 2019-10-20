const entryBreakDown = (journalArray) => {
    let htmlString = ""
    journalArray.forEach(entry => {
        console.log("i have no clue", entry)
        htmlString += journalEntryComponent(entry)
    })
    console.log("html", htmlString)
    const journalDom = document.querySelector(".entryLog").innerHTML = htmlString
}