const countryList = document.getElementById('countryList');
const input = document.getElementById('filterInput');

// On transforme la liste <li> en tableau de chaînes
const data = Array.from(countryList.children).map(li => li.textContent);

// Fonction de rendu
function renderList(items) {
    countryList.innerHTML = '';
    if (items.length === 0) {
        const li = document.createElement('li');
        li.textContent = 'Aucun résultat trouvé.';
        countryList.appendChild(li);
        return;
    }
    items.forEach(text => {
        const li = document.createElement('li');
        li.textContent = text;
        countryList.appendChild(li);
    });
}

// Écouteur sur l'input
input.addEventListener('input', (event) => {
    const query = event.target.value.toLowerCase();
    const filtered = data.filter(item => item.toLowerCase().includes(query));
    renderList(filtered);
});
