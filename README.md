# TP-JS
Ce repository contient le code source d'une application web Todo List. L'application permet aux utilisateurs de créer, afficher, filtrer et marquer des tâches comme complétées ou incomplètes.

Ce code est un exemple de code JavaScript utilisant les modules ES6 pour créer une application de liste de tâches (Todo List). Il est organisé en deux classes principales : `TodoList` et `TodoListItem`, avec des méthodes et des commentaires JSDoc pour documenter le code. Voici une explication de chaque partie du code :

1. **Import de la fonction `createElement`** :
   - Cela importe une fonction `createElement` depuis le module `../functions/dom.js`. Cette fonction est utilisée pour créer des éléments HTML avec des attributs.

2. **Classe `TodoList`** :
   - La classe `TodoList` représente la liste de tâches.
   - Elle utilise des propriétés privées (marquées par `#`) pour stocker les todos (`#todos`) et l'élément de la liste (`#listElement`).
   - Le constructeur prend un tableau de todos en argument.
   - La méthode `appendTo` attache la liste de todos à un élément HTML spécifié.
   - Les méthodes privées `#onsubmit` et `#toggleFilter` gèrent les événements de soumission de formulaire et de filtrage.
   
3. **Classe `TodoListItem`** :
   - La classe `TodoListItem` représente un élément de tâche individuel.
   - Le constructeur prend un objet `todo` en argument pour initialiser l'élément.
   - La méthode `remove` gère la suppression de l'élément de tâche.
   - La méthode `toggle` gère le basculement d'un todo entre les états complété et incomplet.

Chaque méthode et propriété est documentée avec des commentaires JSDoc pour expliquer son rôle et ses paramètres.

L'application semble créer une liste de tâches où vous pouvez ajouter de nouveaux éléments, filtrer les éléments par état (complété, incomplet, tous) et marquer les tâches comme complétées ou incomplètes. Elle utilise des classes et des éléments HTML pour afficher la liste de tâches.
