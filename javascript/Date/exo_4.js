const now = new Date()


function daysUntil(wantedDate, targetDate) {
    targetDate = new Date(targetDate)
    wantedDate = new Date(wantedDate)
    const result = wantedDate.getTime() - targetDate.getTime()
    return Math.floor(result / (1000 * 60 * 60 * 24)) 
}


console.log(daysUntil("2024-12-25","12 octobre 2024"))