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
    saveTasks()
}


// function pour savoir si la tâche existe
function taskExists(name, excludeElement = null) {
    const allTasks = document.querySelectorAll(".task-title-input") // on séléctionne toute les tâche qui existe
    for (let t of allTasks) { // pour chaque tasks séléctionné on regarde si le nom de l'input est egal à un nom de tâche existant
        if (excludeElement && t === excludeElement) continue
        if (t.value.toLowerCase() === name.toLowerCase()) return true // si il y en a une, on retourne vrai qui sera utile dans la function addTask
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

    // La tâche (remplacée par un input readonly)
    const taskLabel = document.createElement("input")
    taskLabel.type = "text"
    taskLabel.value = text
    taskLabel.readOnly = true   // ← IMPORTANT
    taskLabel.style.marginRight = "auto"
    taskLabel.classList.add("task-title-input")

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

    // CREATION DE TOUTE LA DIV DE LA TACHE (dans le bonne ordre) et on modifie en css le style principale
    taskDiv.appendChild(dateLabel)
    taskDiv.appendChild(taskLabel)
    taskDiv.appendChild(editBtn)
    taskDiv.appendChild(validateBtn)
    taskDiv.appendChild(deleteBtn)

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
        if (editBtn.textContent === "Modifier") {
            taskLabel.readOnly = false
            taskLabel.focus()
            taskLabel.select()
            taskLabel.style.appearance = "none"
            taskLabel.style.border = "solid 1px lightgray"
            taskLabel.style.borderRadius = "4px"
            taskLabel.style.height = "30px"
            taskLabel.style.width = "50%"
            taskLabel.style.paddingLeft = "10px"
            editBtn.textContent = "Valider"
        } else {
            const newText = taskLabel.value
            if (!newText) {
                alert("Entrez un nom de tâche")
                return
            }
            if (newText.toLowerCase() !== text.toLowerCase() && taskExists(newText, taskLabel)) {
                alert("La tâche existe déjà.")
                return
            }
            taskLabel.readOnly = true
            editBtn.textContent = "Modifier"
            taskLabel.style.appearance = ""
            taskLabel.style.border = ""
            taskLabel.style.borderRadius = ""
            taskLabel.style.height = ""
            taskLabel.style.width = ""
            taskLabel.style.paddingLeft = ""

            saveTasks()
        }
    })

    // Quand on clique sur terminer ou en cours
    validateBtn.addEventListener("click", () => {
        if (!isDone) { // si la tache n'est pas complété
            const newTask = createTaskElement(taskLabel.value, dateLabel.textContent, true) // passe en tâches complétées
            document.getElementById("tasksDone").appendChild(newTask)
            taskDiv.remove()
        } else { // si elle est complété 
            const newTask = createTaskElement(taskLabel.value, dateLabel.textContent, false) // passe en tâches en cours
            document.getElementById("tasksInProgress").appendChild(newTask)
            taskDiv.remove()
        }

        saveTasks()
    })

    // Quand on clique sur supprimer
    deleteBtn.addEventListener("click", () => {
        taskDiv.remove()
        saveTasks()
    })

    return taskDiv // et on renvoie toute la div
}



// sauvegarde des tâches

function getAllTasks() {
    const tasks = []

    const inProgress = document.querySelectorAll("#tasksInProgress .task-item")
    const done = document.querySelectorAll("#tasksDone .task-item")

    inProgress.forEach(task => {
        tasks.push({
            text: task.querySelector(".task-title-input").value,
            date: task.querySelector("span").textContent,
            isDone: false
        })
    })

    done.forEach(task => {
        tasks.push({
            text: task.querySelector(".task-title-input").value,
            date: task.querySelector("span").textContent,
            isDone: true
        })
    })

    return tasks
}

function saveTasks() {
    const tasks = getAllTasks()
    localStorage.setItem("tasks", JSON.stringify(tasks))
}

function loadTasks() {
    const saved = JSON.parse(localStorage.getItem("tasks") || "[]")
    saved.forEach(t => {
        const element = createTaskElement(t.text, t.date, t.isDone)
        if (t.isDone) {
            document.getElementById("tasksDone").appendChild(element)
        } else {
            document.getElementById("tasksInProgress").appendChild(element)
        }
    })
}

window.addEventListener("DOMContentLoaded", loadTasks)
