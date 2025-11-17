



function isValidDate(dateString) {
    let date = dateString.split("-")
    dateString = new Date(dateString)
    if (dateString.getFullYear() == date[0] && dateString.getMonth() +1 == date[1] && dateString.getDate() == date[2]) {
        return true
    } else {
        return false
    }
    
}

console.log(isValidDate("2023-02-29"))