const now = new Date()


function culculateAge(birthDate) {
    birthDate = new Date(birthDate)
    const result = now.getTime() - birthDate.getTime()
    return Math.floor(result / (1000 * 60 * 60 * 24 * 365))
}


console.log(culculateAge("1990-05-15"))