import { TodoList } from "./components/todolist.js";
import { fetchJSON  } from "./functions/api.js";
import { createElement } from "./functions/dom.js";

/**
 * Tente de charger des données JSON à partir d'une URL et affiche les données dans la console en cas de succès.
 * En cas d'erreur, crée un élément d'alerte et l'ajoute au corps du document.
 *
 * @async
 * @function tryFetchJSON
 * @param {string} url - L'URL à partir de laquelle charger les données JSON.
 * @throws {Error} Si une erreur se produit lors de la récupération des données depuis l'URL.
 */

try {
    const todos = await fetchJSON('https://jsonplaceholder.typicode.com/posts?_limit=10')
    const list = new TodoList(todos)
    list.appendTo(document.querySelector('#todolist'))
} catch (error) {
    const alertElement = createElement('div', {
        class: 'alert alert-danger m-3',
        role: 'alert'
    })
    alertElement.innerText = 'Impossible de charger les elements'
    document.body.prepend(alertElement)
    console.error(error)
}