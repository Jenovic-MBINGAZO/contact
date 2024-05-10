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

const domValue = manageDomValues("compteur");
const deleteSpace  = domValue.textContent.trim() ;
console.log(deleteSpace);
if (deleteSpace === "Contacts (0)") {
    const domValue = manageDomValues("mainContent");
    domValue.remove();
    const div = document.createElement('div');
    div.classList = ("main__content");
    div.id  = ("main__content");
    const main = manageDomValues("main");
    main.append(div);
    const p = document.createElement('p');
    p.classList = "content--title";
    p.id = "compteur";
    p.textContent = "Contacts (0)";
    div.append(p);
    const divImg = document.createElement('div');
    divImg.classList = "content-img";
    divImg.id = "idContent-img";
    div.append(divImg);
    // console.log(div);
    const img = document.createElement('img');
    img.src = src="https://ssl.gstatic.com/social/contactsui/images/emptycontacts/emptycontacts_animation_cell1.png";
    img.alt = "";
    img.classList = "img-width";
    img.id = "imgInfo";
    divImg.append(img);
    const para = document.createElement('p');
    para.classList = "class=content-img";
    para.textContent = "Aucun contact pour l'instant.";
    para.id = "p";
    divImg.append(para);
}

/* creation of contact */
const btn = manageDomValues('btn');
btn.addEventListener("click",function(event){
    const pDelete = manageDomValues("compteur");
    pDelete.remove();
    const mainContentDelete = manageDomValues("idContent-img");
    mainContentDelete.remove();
}
);








