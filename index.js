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
function manageDomValues(id) {
    return document.getElementById(id);
}
const domValue = manageDomValues("compteur");
let deleteSpace  = domValue.textContent.trim() ;
if (deleteSpace === "Contacts (0)") {
    const domValue = manageDomValues("mainContent");
    domValue.remove()
    const div = document.createElement('div');
    div.classList = "content-img";
    const main = manageDomValues("main");
    main.append(div);
   console.log("Bonjour");
} else {
    console.log("erreur");
}















