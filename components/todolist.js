import { createElement } from "../functions/dom.js"

export class TodoList {

    #todos = []


    /**
     * @type {HTMLUListElement}
     */
    #listElement = []
    
/**
 * Crée une nouvelle instance de la classe TodoList.
 *
 * @constructor
 * @param {Array} todos - Un tableau de todos à afficher initialement.
 */

    constructor (todos) {
        this.#todos = todos
    }

    /**
    * Attache la liste de todos à un élément HTML spécifié.
    *
    * @function
    * @param {HTMLElement} element - L'élément auquel attacher la liste de todos.
    */

    appendTo (element) {
        element.innerHTML = `<form action="" class="d-flex pb-4">
        <input type="text" name="title" id="" placeholder="Ajouter un element" required="" class="form-control">
        <button class="btn btn-primary">Ajouter</button>
    </form>
    <main>
        <div class="btn-group mb-4 filter" role="group">
            <button type="button" class="btn btn-outline-primary active" data-filter="all">Tous</button>
            <button type="button" class="btn btn-outline-primary" data-filter="todo">A faire</button>
            <button type="button" class="btn btn-outline-primary" data-filter="dones">Faites</button>
        </div>
        <ul class="list-group">
        </ul>
    </main>`

    this.#listElement = element.querySelector('.list-group')
    
        for (let todo of this.#todos) {
            const t = new TodoListItem(todo)
            this.#listElement.append(t.element)
        }
        element.querySelector('form').addEventListener('submit', e => this.#onsubmit(e))
        element.querySelectorAll('.btn-group button').forEach(button => {
            button.addEventListener('click', e => this.#toggleFilter(e))
        })
    }

    /**
    * Gère l'événement de soumission du formulaire d'ajout de todo.
    *
    * @private
    * @function
    * @param {Event} e - L'objet Event représentant l'événement de soumission du formulaire.
    */

    #onsubmit (e) {
        e.preventDefault()
        const form = e.currentTarget
        const title = new FormData(e.currentTarget).get('title').toString().trim()
        if (title === '') {
            return
        }
        const todo = {
            id: Date.now(),
            title
        }
        const item = new TodoListItem(todo)
        this.#listElement.prepend(item.element)
        form.reset()
    }

    /**
    * Gère le changement de filtre lors de la sélection des boutons de filtrage.
    *
    * @private
    * @function
    * @param {Event} e - L'objet Event représentant l'événement de clic sur un bouton de filtrage.
    */

    #toggleFilter (e) {
        e.preventDefault()
        const filter = e.currentTarget.getAttribute('data-filter')
        e.currentTarget.parentElement.querySelector('.active').classList.remove('active')
        e.currentTarget.classList.add('active')
        if (filter === 'todo') {
            this.#listElement.classList.add('hide-completed')
            this.#listElement.classList.remove('hide-todo')
        } else if (filter === 'dones') {
            this.#listElement.classList.add('hide-todo')
            this.#listElement.classList.remove('hide-completed')
        } else {
            this.#listElement.classList.remove('hide-todo')
            this.#listElement.classList.remove('hide-completed')
        }
    }
}

class TodoListItem {
    #element

    /**
    * Crée une nouvelle instance de la classe TodoListItem pour représenter un todo.
    *
    * @constructor
    * @param {Object} todo - L'objet todo à afficher dans l'élément.
    */

    constructor (todo) {
        const id = `todo-${todo.id}`
        const li = createElement('li', {
            class: 'todo list-group-item d-flex align-items-center'
        })

        this.#element = li
        const checkbox = createElement('input', {
            type: 'checkbox',
            class: 'form-check-input',
            id,
            checkbox: todo.completed ? '' : null
        })
        const label = createElement('label', {
            class: 'ms-2 form-check-label',
            for: id
        })
        label.innerText = todo.title
        li.append(label)
        const button = createElement('button', {
            class: 'ms-auto btn btn-danger btn-sm'
        })
        button.innerHTML = '<i class="fa-solid fa-trash"></i>'
        li.append(checkbox)
        li.append(label)
        li.append(button)
        this.toggle(checkbox)

        button.addEventListener('click', e => this.remove(e))
        checkbox.addEventListener('change', e => this.toggle(e.currentTarget))

    }

    get element() {
        return this.#element
    }

    /**
    * Gère la suppression de l'élément de tâche (todo) lors du clic sur le bouton de suppression.
    *
    * @function
    * @param {Event} e - L'objet Event représentant l'événement de clic sur le bouton de suppression.
    */

    remove(e) {
        e.preventDefault()
        this.#element.remove()
    }

    /**
    * Gère le basculement d'un todo (complété/incomplet) lors de la modification de la case à cocher.
    *
    * @function
    * @param {HTMLInputElement} checkbox - La case à cocher associée au todo.
    */

    toggle (checkbox){
        if (checkbox.checked) {
            this.#element.classList.add('is-completed')
        } else {
            this.#element.classList.remove('is-completed')
        }
    }
}