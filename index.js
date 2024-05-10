/*
This JavaScript script manages displaying the list of contacts, grouping them by label, and allowing to add new contacts.

Author: Jenovic MBINGAZO
Date: From May 7th to May 20th

This script uses only pure JavaScript for a better understanding of the DOM concept.

Features:
- Display the list of all contacts.
- Display the list of contacts grouped by label.
- Add a new contact.

For any questions or improvement suggestions, please contact the author at [djodjombingazo951@gmail.com].
*/


//--------manageDomValues
//


function manageDomValues(id) {
    return document.getElementById(id);
}

const btn = manageDomValues("btn");


btn.addEventListener("DOMContentLoaded", function() {
    // Sélectionner l'élément à supprimer
    let elementASupprimer = btn.getElementById("elementASupprimer");

    // Supprimer l'élément si le nombre de contacts est 0 lors du chargement initial
    if (elementASupprimer && elementASupprimer.textContent.trim() === "Contacts (0)") {
        elementASupprimer.remove();
    }

    // Sélectionner le bouton qui déclenche la suppression de l'élément
    let boutonSuppression = document.getElementById("boutonSuppression");

    // Ajouter un écouteur d'événements de clic au bouton
    boutonSuppression.addEventListener("click", function(event) {
        // Supprimer l'élément lorsque le bouton est cliqué
        if (elementASupprimer) {
            elementASupprimer.remove();
        }
    });
});










