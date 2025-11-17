const now = new Date()


function culculateAge(birthDate) {
    birthDate = new Date(birthDate)
    const result = now.getTime() - birthDate.getTime()
    const resultInYear = Math.floor(result / (1000 * 60 * 60 * 24 * 365))
    return resultInYear
}


console.log(culculateAge("1990-05-15"))