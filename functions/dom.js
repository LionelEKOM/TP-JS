/**
 * Crée un nouvel élément HTML avec les attributs spécifiés et renvoie cet élément.
 *
 * @function createElement
 * @param {string} tagName - Le nom de la balise HTML de l'élément à créer.
 * @param {Object} attributes - Un objet contenant les paires attribut-valeur à définir sur l'élément.
 * @returns {HTMLElement} - L'élément HTML créé avec les attributs spécifiés.
 */


export function createElement(tagName, attributes) {
    const element = document.createElement(tagName)
    for(const [attribute, value] of Object.entries(attributes)) {
        if (value !== null) {
            element.setAttribute(attribute, value)
        }
    }
    return element
}