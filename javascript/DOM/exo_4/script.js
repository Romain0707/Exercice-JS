const countryList = document.getElementById('countryList')
const input = document.getElementById('filterInput')
const data = []


// On transforme la liste en tableau
for (i = 0 ; i < countryList.childElementCount; i++) {
    data.push(countryList.children[i].textContent)
}


// Ajouter un écouteur d'événement sur la barre de recherche
input.addEventListener('input', function(event) {
    const query = event.target.value.toLowerCase();
    countryList.innerHTML = '';

    // Filtrer les données en fonction de la requête
    const filteredData = data.filter(item => 
        item.toLowerCase().includes(query) || 
        item.toLowerCase().includes(query)
    );

    // Afficher les résultats
    if (filteredData.length > 0) {
        filteredData.forEach(item => {
            const items = document.createElement('li');
            items.textContent = item;
            countryList.appendChild(items);
        });
    } else {
        const items = document.createElement('li');
        items.textContent = 'Aucun résultat trouvé.';
        countryList.appendChild(items);
    }
})
