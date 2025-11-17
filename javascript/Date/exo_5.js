function formatCustomDate(date) {
    date = new Date(date)
    return date.toLocaleDateString('fr-FR', {
        weekday : 'long',
        year: "numeric",
        month: "long",
        day: "numeric"
    })
}

console.log(formatCustomDate("2024-10-12"))