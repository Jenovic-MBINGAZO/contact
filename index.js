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


/* access to html elements via DOM */
function manageDomValues(id) {
    return document.getElementById(id);
}

//Sending value to the dom
const search = manageDomValues("search");
const contacts__search = manageDomValues("contacts__search");
const search__contacts__boloc = manageDomValues("search__contacts__boloc");
const checkContactsExist = manageDomValues("checkContactsExist");
const mainContactsNoExist = manageDomValues("mainContactsNoExist");
const btnCreateContacts = manageDomValues("btnCreateContacts");
const hr = manageDomValues("hr");
// console.log(checkContactsExist);

//menu humberger
const humberger = manageDomValues("humberger") ;
const main__menu = manageDomValues("main__menu");
const main__content = manageDomValues("mainContent");
//console.log(humberger);

/* event listener from dom */
search.addEventListener("click",function(){
    // search__contacts__boloc.style.backgroundColor = "red"
    search__contacts__boloc.classList.add("contacts__search--box-shadow");
    search.style.backgroundColor = "white";
   //console.log(search);
}
);

//event of btn humberger
let isMenuOpen = false;
humberger.addEventListener("click",function(){
   if (!isMenuOpen) {
        main__menu.classList.add("main__menu--width");
        main__content.style.width = "100%";
        main__content.style.transition = "width 0.5s linear";
        isMenuOpen = true;
   }
   else{
        main__menu.classList.remove("main__menu--width");
        main__content.style.width = ""; // Reset width
        isMenuOpen = false;
   }
}
);

/*  my different functions */


//Verification if the contact already exists
const deleteSpacecheckContactsExist = checkContactsExist.textContent.trim();
const div = document.createElement("div");
const divImg = document.createElement('img');
const p = document.createElement('p');
div.className = "content__img";
div.id = "content__img";
divImg.className = "img__content";
divImg.alt = "Aucun contact";
divImg.className = "img__width";
divImg.src = "https://ssl.gstatic.com/social/contactsui/images/emptycontacts/emptycontacts_animation_cell1.png";
p.className = "img-description";
p.textContent = "Aucun contact pour l'instant.";


if (deleteSpacecheckContactsExist === "Contacts (0)") {
    mainContactsNoExist.remove();
    hr.remove();
    main__content.append(div);
    div.append(divImg);
    setTimeout(function(){
        divImg.src = "https://ssl.gstatic.com/social/contactsui/images/emptycontacts/emptycontacts_animation_cell3.png";
    },3000);
    div.append(p);
}










