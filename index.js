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
/* access to html elements via DOM */
function manageDomValues(id) {
    return document.getElementById(id);
}

//menu humberger
const humberger = manageDomValues("humberger") ;
const main__menu = manageDomValues("main__menu");
const main__content = manageDomValues("mainContent");

/* Retrieving the value from the HTML DOM. */
const checkContactsExist = manageDomValues("checkContactsExist");
const mainContentContactVide = manageDomValues("mainContent");
const mainContentExiste = manageDomValues("mainContentExiste");
const img = manageDomValues("img");
const btnCreateContacts = manageDomValues("btnCreateContacts");
const mainContentContactAdd = manageDomValues("mainContentContactAdd");
const contact__button = manageDomValues("contact__button");

/* event listener from dom */
search.addEventListener("click",function(){
    // search__contacts__boloc.style.backgroundColor = "red"
    search__contacts__boloc.classList.add("contacts__search--box-shadow");
    search.style.backgroundColor = "white";
   //console.log(search);
}
);
document.addEventListener("click",function(evt){
    if (evt.target != search) {
        search__contacts__boloc.classList.remove("contacts__search--box-shadow");
        search.style.backgroundColor = "";
    }
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
        main__content.style.width = ""; 
        isMenuOpen = false;
   }
}
);

//Verification if the contact already exists
const deleteSpacecheckContactsExist = checkContactsExist.textContent.trim();
// console.log(deleteSpacecheckContactsExist);
function VerificationContact(){
    if (deleteSpacecheckContactsExist === "Contacts (0)" ) {
        mainContentContactVide.style.display = "block";
        setTimeout(function(){
            img.src = "https://ssl.gstatic.com/social/contactsui/images/emptycontacts/emptycontacts_animation_cell3.png";
        },3000);
    
    }
    else{
        mainContentExiste.style.display = "block";
    }
}
VerificationContact();

/* event of button create contact */
btnCreateContacts.addEventListener("click",function(evt){
    mainContentContactVide.style.display = "none";
    mainContentExiste.style.display = "none";
    mainContentContactAdd.style.display = "block";
}
);

/* event of button list contact */
// contact__button.addEventListener("click",function(){
//     VerificationContact();
// }
// );



