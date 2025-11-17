



function isValidDate(dateString) {
    let date = dateString.split("-")
    dateString = new Date(dateString)
    return (dateString.getFullYear() == date[0] && dateString.getMonth() +1 == date[1] && dateString.getDate() == date[2]) 
}

console.log(isValidDate("2024-02-29"))