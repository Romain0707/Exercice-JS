function addOneWeek(currentDate) {
    currentDate = new Date(currentDate)
    currentDate = currentDate.getTime() + 691200000
    currentDate = new Date(currentDate)
    return currentDate
}


console.log(addOneWeek("10 octobre 2024"))