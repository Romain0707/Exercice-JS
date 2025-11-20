document.getElementById("addBtn").addEventListener("click", addTask)
const message = document.getElementById('message')


// Function Ajouter une tâche
function addTask() {
    const input = document.getElementById("taskInput") 
    const taskText = input.value // on prend l'input

    const inputDate = document.getElementById("taskDate") 
    const dateText = inputDate.value // on prend l'input
    

    if (taskText === "") {  // si il n'y a rien on affiche d'entrer quelque chose
        message.textContent = "Entrez un nom de tâche"
        message.classList.add('text-red')
        return
    }

    if (dateText === "") {  // si il n'y a rien on affiche d'entrer quelque chose
        message.textContent = "Entrez une date"
        message.classList.add('text-red')
        return
    }

    if (taskExists(taskText)) { // si ça existe déjà on l'affiche
        message.textContent = "La tâche existe déjà"
        message.classList.add('text-red')
        return
    }

    const taskDiv = createTaskElement(taskText, dateText, false) // on créer la tâche en appelant la fonction createTaskElement (false pour que le bouton soit "Terminer" sinon c'est "En cours")
    document.getElementById("tasksInProgress").appendChild(taskDiv) // on insère la tâche à la fin de tasksInProgress

    input.value = ""  // reset de l'input et du text erreur
    message.textContent = "" //
    message.classList.remove('text-red') //
}


// function pour savoir si la tâche existe
function taskExists(name) {
    const allTasks = document.querySelectorAll(".task-item span") // on séléctionne toute les tâche qui existe
    for (let t of allTasks) { // pour chaque tasks séléctionné on regarde si le nom de l'input est egal à un nom de tâche existant
        if (t.textContent.toLowerCase() === name.toLowerCase()) return true // si il y en a une, on retourne vrai qui sera utile dans la function addTask
    }
    return false
}


// function créer un élément (ici la tâche et les fonction des bouton)
function createTaskElement(text, date ,isDone) {
    const taskDiv = document.createElement("div") // je créer une div avec task-item en classe
    taskDiv.classList.add('task-item') 
    taskDiv.style.display = 'flex'
    taskDiv.style.alignItems = 'center'
    taskDiv.style.gap = '12px'

    // La date
    const dateLabel = document.createElement("span")
    dateLabel.textContent = date
    dateLabel.style.marginRight = '12px'

    // La tâche
    const taskLabel = document.createElement("span") // je créer un span et mettre un margin right auto pour écarter les bouton
    taskLabel.textContent = text
    taskLabel.style.marginRight = 'auto'

    // Premier bouton pour modifier le text
    const editBtn = document.createElement("button")
    editBtn.textContent = "Modifier"
    editBtn.classList.add("btn-edit", "btn") 

    // Deuxieme bouton qui change suivant ou il est en fonction de en cours ou terminer
    const validateBtn = document.createElement("button")
    if(validateBtn.textContent == isDone) {
        validateBtn.textContent = "Terminer"
        validateBtn.style.backgroundColor = "#329456"
    } else {
        validateBtn.textContent = "En cours"
        validateBtn.style.backgroundColor = "#FBC200"
    }
    validateBtn.classList.add("btn-done", "btn") 

    // Troisième bouton, le bouton pour supprimer
    const deleteBtn = document.createElement("button")
    deleteBtn.textContent = "Supprimer"
    deleteBtn.classList.add("btn-delete", "btn")

    // Modifier le style de la date suivant la date du jour
    const now = new Date().setHours(0,0,0,0)
    const dateTask = new Date(dateLabel.textContent).setHours(0,0,0,0)
    if(dateTask < now) {
        if(dateLabel.classList.contains('text-orange' || 'text-green')) {
            dateLabel.classList.remove('text-orange', 'text-green')
        }
        dateLabel.classList.add('text-red')
    } else if(dateTask == now) {
        if(dateLabel.classList.contains('text-red' || 'text-green')) {
            dateLabel.classList.remove('text-red', 'text-green')
        }
        dateLabel.classList.add('text-orange')
    } else {
        if(dateLabel.classList.contains('text-orange' || 'text-red')) {
            dateLabel.classList.remove('text-orange', 'text-red')
        }
        dateLabel.classList.add('text-green')
    }

    // LES FONCTIONS DE CHAQUE BOUTONS

    // Quand on clique sur modifier
    editBtn.addEventListener("click", () => {
        const inputEdit = document.createElement("input") // on créer un input
        inputEdit.value = taskLabel.textContent // l'input garde le nom de l'ancienne tâche dedans
        inputEdit.style.marginRight = 'auto' // on oublie pas le margin pour mettre els bouton à droite

        taskDiv.replaceChild(inputEdit, taskLabel) // on remplace le span par l'input

        editBtn.textContent = "Valider"  // le bouton modifier devient valider 

        // Quand on clique sur valider
        editBtn.addEventListener('click', () => {
            const newText = inputEdit.value // on sauevgarde la nouvelle value de input pour vérifier si elle existe ou si c'est vide
            if (newText === "") { // si elle est vide on affiche une alert
                alert("Entrez un nom de tâche")
                return
            }
            if (newText.toLowerCase() !== text.toLowerCase() && taskExists(newText)) { // si elle existe déjà on affiche une alert
                alert("La tâche existe déjà.")
                return
            }

            taskLabel.textContent = newText // on change le nom de la tache
            taskDiv.replaceChild(taskLabel, inputEdit) // on remet un span à la place de l'input

            editBtn.textContent = "Modifier" // retour du bouton à la normal
        })
    })

    // Quand on clique sur terminer ou en cours
    validateBtn.addEventListener("click", () => {
        if (!isDone) { // si la tache n'est pas complété
            const newTask = createTaskElement(taskLabel.textContent, dateLabel.textContent, true) // passe en tâches complétées
            document.getElementById("tasksDone").appendChild(newTask)
            taskDiv.remove()
        } else { // si elle est complété 
            const newTask = createTaskElement(taskLabel.textContent, dateLabel.textContent, false) // passe en tâches en cours
            document.getElementById("tasksInProgress").appendChild(newTask)
            taskDiv.remove()
        }
    })

    // Quand on clique sur supprimer
    deleteBtn.addEventListener("click", () => taskDiv.remove())

    // CREATION DE TOUTE LA DIV DE LA TACHE (dans le bonne ordre) et on modifie en css le style principale
    taskDiv.appendChild(dateLabel)
    taskDiv.appendChild(taskLabel)
    taskDiv.appendChild(editBtn)
    taskDiv.appendChild(validateBtn)
    taskDiv.appendChild(deleteBtn)

    return taskDiv // et on renvoie toute la div
}
