const navItems = document.querySelectorAll('.nav-item')
const list = document.getElementById('list')
const modal = document.querySelector('#modal')
const drinkImage = document.querySelector("#drink-image")
const drinkInfo = document.querySelector("#drink-info")
const drinkName = document.querySelector("#drink-name")
const drinkIngredients = document.querySelector("#drink-ingredients")
const drinkInstructions = document.querySelector("#drink-instructions")

navItems[0].classList.add('active')

async function fetchData(category) {
    try {
        const response = await fetch(`https://www.thecocktaildb.com/api/json/v1/1/filter.php?c=${category}`)
        const cocktailData = await response.json()
        addItems(cocktailData.drinks)
    } catch (error) {
        console.error(error)
    }
}

fetchData('Cocktail')

navItems.forEach(item => {
    item.addEventListener('click', function(event) {
        navItems.forEach(item => item.classList.remove('active'))
        event.currentTarget.classList.add('active')
        fetchData(event.currentTarget.id)
    })
})

function addItems(drinks) {
    list.innerHTML= ''
    drinks.forEach(drink => {
        const container = document.createElement('div')
        container.classList.add('list-item', 'col-12', 'col-sm-3')
        const title = document.createElement('h3')
        title.textContent = drink.strDrink
        const thumbnail = document.createElement('img')
        thumbnail.setAttribute('src', drink.strDrinkThumb)
        thumbnail.classList.add('thumbnail')

        container.appendChild(thumbnail)
        container.appendChild(title)
        list.appendChild(container)
        
        container.addEventListener('click', async function() {
            modal.style.display = 'flex'

            const details = await fetchDetailsData(drink.idDrink)

            drinkImage.setAttribute('src', drink.strDrinkThumb)
            drinkName.textContent = drink.strDrink
            drinkIngredients.innerHTML = getIngredients(details)
            drinkInstructions.textContent = details.strInstructions
        })
    })
}

function getIngredients(drink) {
    let html = ""

    for (let i = 1; i <= 15; i++) {
        const ingredient = drink[`strIngredient${i}`]

        if (ingredient) {
            html += `<li>${ingredient}</li>`
        }
    }

    return html
}


async function fetchDetailsData(id) {
    try {
        const detailsResponse = await fetch(`https://thecocktaildb.com/api/json/v1/1/lookup.php?i=${id}`)
        const detailsData = await detailsResponse.json()
        return detailsData.drinks[0]
    } catch (error) {
        console.error(error)
    }
}


modal.addEventListener('click', function () {
    modal.style.display = 'none'
}) 