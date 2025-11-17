function formatCustomDate(date) {
    date = new Date(date)
    let formattedDate = date.toLocaleDateString('fr-FR', {
        weekday : 'long',
        year: "numeric",
        month: "long",
        day: "numeric"
    })
    return formattedDate
}

console.log(formatCustomDate("2024-10-12"))