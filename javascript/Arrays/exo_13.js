let sentance = "Bonjour je m'appel Romain, j'aime programmé"


function truncate(str, maxlength) {
  return (str.length > maxlength) ?
    str.slice(0, maxlength - 1) + '…' : str
}


console.log(truncate(sentance, 20))