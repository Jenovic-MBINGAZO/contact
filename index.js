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
        mainContentExiste.style.width = "100%";
        mainContentContactAdd.style.width = "100%";
        main__content.style.transition = "width 0.5s linear";
        mainContentExiste.style.transition =  "width 0.5s linear";
        mainContentContactAdd.style.transition =  "width 0.5s linear";
        isMenuOpen = true;
   }
   else{
        main__menu.classList.remove("main__menu--width");
        main__content.style.width = ""; 
        mainContentExiste.style.width = "";
        mainContentContactAdd.style.width = "";
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
contact__button.addEventListener("click",function(){
    mainContentContactAdd.style.display = "none";
    VerificationContact();
}
);

/* keyboard click management evenement */
const enregistre = manageDomValues("enregistre");
const prenom__input = manageDomValues("prenom__input");
const nom__input = manageDomValues("nom__input");
const entreprise__input = manageDomValues("entreprise__input");
const fonction__input = manageDomValues("fonction__input");
const email__input = manageDomValues("email__input");
const phone = manageDomValues("phone");
let mainContentListContact = document.getElementById("content__main");

phone.addEventListener("keydown",function(){
    if (phone.value.trim() !== "") {
        enregistre.disabled = false ;
        enregistre.style.backgroundColor = "#1E64D4";
        enregistre.style.color = "white";
        enregistre.style.fontWeight = "bold";
        enregistre.style.cursor = "pointer";
    }
    else{
        enregistre.disabled = true ;
        enregistre.style.backgroundColor = "";
        enregistre.style.color = "";
        enregistre.style.fontWeight = "";
        enregistre.style.cursor = "";
    }
}
);


/* change color border input if click */
prenom__input.addEventListener("click",function(){
    prenom__input.classList.add("prenom__input--border-color");
}
);

document.addEventListener("click",function(evt){
    if (evt.target != prenom__input) {
        prenom__input.classList.remove("prenom__input--border-color");
    } 
}
);

nom__input.addEventListener("click",function(){
    nom__input.classList.add("prenom__input--border-color");
}
);

document.addEventListener("click",function(evt){
    if (evt.target != nom__input) {
        nom__input.classList.remove("prenom__input--border-color");
    } 
}
);

entreprise__input.addEventListener("click",function(){
    entreprise__input.classList.add("prenom__input--border-color");
}
);

document.addEventListener("click",function(evt){
    if (evt.target != entreprise__input) {
        entreprise__input.classList.remove("prenom__input--border-color");
    } 
}
);

fonction__input.addEventListener("click",function(){
    fonction__input.classList.add("prenom__input--border-color");
}
);

document.addEventListener("click",function(evt){
    if (evt.target != fonction__input) {
        fonction__input.classList.remove("prenom__input--border-color");
    } 
}
);

email__input.addEventListener("click",function(){
    email__input.classList.add("prenom__input--border-color");
}
);

document.addEventListener("click",function(evt){
    if (evt.target != email__input) {
        email__input.classList.remove("prenom__input--border-color");
    } 
}
);

phone.addEventListener("click",function(){
    phone.classList.add("prenom__input--border-color");
}
);

document.addEventListener("click",function(evt){
    if (evt.target != phone) {
        phone.classList.remove("prenom__input--border-color");
    } 
}
);

let tabNam = [];
let tabEmail = [];
let tabPhone = [];
let tabFonction = [];

const divmailListContact = document.createElement("div");
// divmailListContact.className = "main__list";
// mainContentListContact.append(divmailListContact);
let  divListTitleContact ;


enregistre.addEventListener("click", function() {
    let title =  prenom__input.value + "   " +nom__input.value;
    let fonction = fonction__input.value + "," + entreprise__input.value;
    tabNam.push(title);
    tabEmail.push(email__input.value);
    tabPhone.push(phone.value);
    tabFonction.push(fonction);
    
    // Save array and update the localStorage
    localStorage.setItem('tabNam', JSON.stringify(tabNam));
    localStorage.setItem('tabEmail',JSON.stringify(tabEmail));
    localStorage.setItem('tabPhone',JSON.stringify(tabPhone));
    localStorage.setItem('tabFonction',JSON.stringify(tabFonction));
    
    // display elements update
    // DisplayName();
    // DisplayEMail();
    // DisplayPhone();
    // DisplayFonction();

    prenom__input.value = "";
    nom__input.value = "";
    email__input.value = "";
    phone.value = "";
    fonction__input.value = "";
    entreprise__input.value = "";
  
});


// Function display elements
const divListTitle = manageDomValues("listTitle");
console.log(divListTitle);
function DisplayName() {
    // Effacer le contenu précédent
    // mainContentListContact.innerHTML = '';
    // Ajouter chaque élément du tableau comme div
    for (const name of tabNam) {
       const div = document.createElement("div");
       divListTitle.append(div);
       div.className = "title__name";
       div.textContent = name;
    }
}

const divListEmail = manageDomValues("listEmail");
console.log(divListEmail);
function DisplayEMail() {

    for (const email of tabEmail) { 
        // const divv = document.querySelector(".list__title");
        // const div = document.createElement("div");
        // divv.append(div);
        const div = document.createElement("div");
        divListEmail.append(div);
        div.className = "title__email";
        div.textContent = email;
    }
    
}

const divListPhone = manageDomValues("listPhone");
function DisplayPhone() {

    for (const phone of tabPhone) {
        // const divv = document.querySelector(".list__title");
        // const div = document.createElement("div");
        // divv.append(div);
        const div = document.createElement("div");
        divListPhone.append(div);
        div.className = "title__phone";
        div.textContent = phone;
    }
    
}

const divListFonction = manageDomValues("listFonction");
function DisplayFonction() {

    for (const fonction of tabFonction) { 
        // const divv = document.querySelector(".list__title");
        // const div = document.createElement("div");
        // divv.append(div);
        const div = document.createElement("div");
        divListFonction.append(div);
        div.className = "title__fonction";
        div.textContent = fonction;
    }
    
}
// localStorage.clear()
//Display localStorage
tabNam = JSON.parse(localStorage.getItem('tabNam')) || ["",];
tabEmail = JSON.parse(localStorage.getItem('tabEmail')) || ["",];
tabPhone = JSON.parse(localStorage.getItem('tabPhone')) || ["",];
tabFonction = JSON.parse(localStorage.getItem('tabFonction')) || ["",];



// Display elements
DisplayName();
DisplayEMail();
DisplayPhone();
DisplayFonction();




// /* ----  add contact ----  */
// const contact  = {
//     nom : [],
//     prenom : [],
//     email : "",
//     tel : "",
//     fonction : "",
//     entreprise : "",
//     libele : ""
// };

// // function for stock de object contact in localStorage
// function stockContacactLocalStorage(){
//     localStorage.setItem("nom",contact.nom);
//     localStorage.setItem("prenom",contact.prenom);
//     localStorage.setItem("email",contact.email);
//     localStorage.setItem("tel",contact.tel);
//     localStorage.setItem("fonction",contact.fonction);
//     localStorage.setItem("entreprise",contact.entreprise);
//     localStorage.setItem("libele",contact.libele);
// }

// enregistre.addEventListener("click",function(){
//     contact.nom.push(nom__input);
//     contact.prenom.push(prenom__input);
//     contact.email.push(email__input);
//     contact.tel.push(phone);
//     contact.fonction.push(fonction__input);
//     contact.entreprise.push(entreprise__input);

//     stockContacactLocalStorage();
//     console.log(localStorage.getItem("nom"));
//     console.log(contact.nom);
// }
// );
























