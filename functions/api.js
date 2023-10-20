/**
 * Effectue une requête asynchrone pour récupérer des données JSON à partir d'une URL spécifiée.
 *
 * @async
 * @function fetchJSON
 * @param {string} url - L'URL depuis laquelle récupérer les données JSON.
 * @param {Object} options - Options de la requête (facultatif).
 * @param {Object} options.headers - En-têtes de la requête (facultatif).
 * @returns {Promise<any>} - Une promesse qui résout en l'objet JSON récupéré depuis l'URL.
 * @throws {Error} Si la réponse de la requête n'est pas OK, lève une erreur avec des détails sur la cause.
 */


export async function fetchJSON(url, options = {}) {
    const headers = {Accept: 'application/json', ...options.headers}
    const r = await fetch(url, {...options, headers})
    if (r.ok) {
        return r.json()
    }
    throw new Error('Erreur serveur', {cause: r})
}