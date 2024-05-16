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



prenom__input.addEventListener("keydown",function(){
    if (prenom__input.value.trim() !== "") {
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

nom__input.addEventListener("keydown",function(){
    if (nom__input.value.trim() !== "") {
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

entreprise__input.addEventListener("keydown",function(){
    if (entreprise__input.value.trim() !== "") {
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
fonction__input.addEventListener("keydown",function(){
    if (fonction__input.value.trim() !== "") {
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

email__input.addEventListener("keydown",function(){
    if (email__input.value.trim() !== "") {
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

/* ----  add contact ----  */
const contacts = {
    title : [],
    mail : [],
    phone : [],
    fonctionEntreprise : [],
    libele : [],
    prenom : [],
}


//  console.log(prenom)

/* ----  add contact ----  */

// Function to display contacts
function displayContacts() {
    console.log("Contacts:");
    var keys = Object.keys(contacts);
    for (var i = 0; i < keys.length; i++) {
        var key = keys[i];
        if (Array.isArray(contacts[key])) {
            for (var j = 0; j < contacts[key].length; j++) {
                console.log(contacts[key][j]);
            }
        }
    }
}

// Function to save contacts to localStorage
function saveContactsToLocalStorage() {
    localStorage.setItem('contacts', JSON.stringify(contacts));
}

// Function to load contacts from localStorage
function loadContactsFromLocalStorage() {
    var storedContacts = localStorage.getItem('contacts');
    if (storedContacts) {
        var parsedContacts = JSON.parse(storedContacts);
        var keys = Object.keys(parsedContacts);
        for (var i = 0; i < keys.length; i++) {
            var key = keys[i];
            contacts[key] = parsedContacts[key];
        }
    }
}

// Load contacts from localStorage and display them on page load
loadContactsFromLocalStorage();
displayContacts();

enregistre.addEventListener("click", function(evt) {
    var prenom = prenom__input.value;
    var nom = nom__input.value;
    var entreprise = entreprise__input.value;
    var fonction = fonction__input.value;
    var email = email__input.value;
    var tel = phone.value;

    contacts.title.push(nom);
    contacts.mail.push(email);
    contacts.phone.push(tel);
    contacts.fonctionEntreprise.push(fonction);
    contacts.prenom.push(prenom);

    // Save contacts to localStorage
    saveContactsToLocalStorage();

    // Réinitialiser les champs de formulaire
    prenom__input.value = "";
    nom__input.value = "";
    entreprise__input.value = "";
    fonction__input.value = "";
    email__input.value = "";
    phone.value = "";

    // Afficher les valeurs ajoutées
    displayContacts();
});

// Pour que les informations des contacts restent dans le tableau même après le rechargement de la page, tu peux utiliser le stockage local (localStorage) du navigateur. Cela permet de sauvegarder les données de manière persistante.

// Étapes :
// Sauvegarder les contacts dans localStorage après chaque ajout.
// Charger les contacts depuis localStorage lors du chargement de la page.
// Afficher les contacts chargés depuis localStorage.

// Ce code permet de sauvegarder les contacts dans localStorage et de les charger automatiquement lorsque la page est rechargée, tout en affichant les contacts actuels.
 

// aveContactsToLocalStorage : Cette fonction convertit l'objet contacts en une chaîne JSON et le stocke dans localStorage.
// loadContactsFromLocalStorage : Cette fonction récupère les données de localStorage, les parse en objet et les assigne à l'objet contacts.
// Appel initial : loadContactsFromLocalStorage est appelé au chargement de la page pour récupérer et afficher les contacts stockés.

// enregistre.addEventListener("click",function(evt){
//     const prenom = prenom__input.value;
//     const nom = nom__input.value ;
//     const entreprise = entreprise__input.value;
//     const fonction = fonction__input.value;
//     const email = email__input.value;
//     const tel = phone.value;
  
//     contacts.title.push(nom)
//     contacts.mail.push(email);
//     contacts.phone.push(tel);
//     contacts.fonctionEntreprise.push(fonction);
//     contacts.prenom.push(prenom);
//     // console.log(prenom__input.value);

//     prenom__input.value = "";
//     nom__input.value = "";
//     entreprise__input.value = "";
//     fonction__input.value = "";
//     email__input.value = "";
//     phone.value = "";

//     const keys = Object.keys(contacts);
//     for (const key of keys) {
//         if (Array.isArray(contacts[key])) {
//             for (const element of contacts[key]) {
//                 console.log(element);
//             }
//         }
//     }
// }
// );

// console.log(contacts.prenom);


// console.log(prenom__input.value);

//obtenir toute le liste de la clé ou le nom de proprété avec Array.krys(array)

// const keys = Object.keys(contacts);
// parcourir chaque clé 
// for (const key of keys) {
//     if (Array.isArray(contacts[key])) {
//         //afficher les élements du tableau
//         for (const element of contacts[key]) {
//             console.log(element);
//         }
//     }
// }










