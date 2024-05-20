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

/* Add contact fonctionality 1  */
const contactData = {
    names: [],
    emails: [],
    phones: [],
    functions: []
};



// Save contacts to localStorage
function saveContacts() {
    localStorage.setItem('tabNam', JSON.stringify(contactData.names));
    localStorage.setItem('tabEmail', JSON.stringify(contactData.emails));
    localStorage.setItem('tabPhone', JSON.stringify(contactData.phones));
    localStorage.setItem('tabFonction', JSON.stringify(contactData.functions));
}

// Display contacts from localStorage
function getContactsLocalStorage() {
    contactData.names = JSON.parse(localStorage.getItem('tabNam')) || [];
    contactData.emails = JSON.parse(localStorage.getItem('tabEmail')) || [];
    contactData.phones = JSON.parse(localStorage.getItem('tabPhone')) || [];
    contactData.functions = JSON.parse(localStorage.getItem('tabFonction')) || [];
}

getContactsLocalStorage()

enregistre.addEventListener("click", function(evt) {
    const title = `${prenom__input.value} ${nom__input.value}`;
    const fonction = `${fonction__input.value}, ${entreprise__input.value}`;

    if (!prenom__input.value || !nom__input.value || !phone.value) {
        alert("S'il vous-plait remplissez tous les champs requis.");
        return;
    }

    contactData.names.push(title);
    contactData.emails.push(email__input.value);
    contactData.phones.push(phone.value);
    contactData.functions.push(fonction);

    saveContacts();

    prenom__input.value = "";
    nom__input.value = "";
    email__input.value = "";
    phone.value = "";
    fonction__input.value = "";
    entreprise__input.value = "";

    displayContacts();
});

const divListTitle = manageDomValues("listTitle");
let i ;
let id ;
function displayContacts() {
    mainContentListContact.innerHTML = ""; // Clear space list contact
    // for (let i = 0; i < contactData.phones.length; i++) {
    //     const contactDiv = document.createElement("div");
    //     contactDiv.className = "contact-item";
    //     contactDiv.textContent = `${contactData.names[i]} - ${contactData.phones[i]} - ${contactData.emails[i]} - ${contactData.functions[i]}`;
    //     mainContentListContact.appendChild(contactDiv);
    // }
   
    for ( i = 0; i < contactData.phones.length; i++) {

        //Generation de color random 
        function randomColor() {
            let red = Math.floor(Math.random() * 256); 
            let green = Math.floor(Math.random() * 256);
            let blue = Math.floor(Math.random() * 256);

            // Color the css
            let color = 'rgb(' + red + ',' + green + ',' + blue + ')';
    
            return color;
        }
        randomColor();
        const contactDiv= document.createElement("div") ;
        contactDiv.className = "contact-item";
        contactDiv.id = "contactItem" + i ;
       

        const divIcone = document.createElement("div");
        divIcone.className = "contact-icone";
        divIcone.id = "contactIcone" + i;
        let lengthName = contactData.names.length;


        const divInput = document.createElement("div");
        divInput.className = "contact-input-bloc";
        divInput.id = "contactInput" + i;

       
        


        //Disay first name for the contact
        for (let j = 0; j < lengthName; j++) {
              divIcone.textContent = contactData.names[i][0];
        }

        divIcone.style.backgroundColor = (randomColor());
        const nameDiv = document.createElement("div");
        nameDiv.className = "contact-name";
        nameDiv.textContent = contactData.names[i];
        

        const phoneDiv = document.createElement("div");
        phoneDiv.className = "contact-phone";
        phoneDiv.textContent = contactData.phones[i];

        const emailDiv = document.createElement("div");
        emailDiv.className = "contact-email";
        emailDiv.textContent = contactData.emails[i];

        const functionDiv = document.createElement("div");
        functionDiv.className = "contact-function";
        functionDiv.textContent = contactData.functions[i];

        // add div in contactDIv
        contactDiv.appendChild(divInput);
        contactDiv.appendChild(divIcone);
        contactDiv.appendChild(nameDiv);
        contactDiv.appendChild(emailDiv);
        contactDiv.appendChild(phoneDiv);
        contactDiv.appendChild(functionDiv);
      
        const inputCheckbox = document.createElement("input");
        inputCheckbox.type = "checkbox";
        inputCheckbox.className = "contact-input";

        divInput.append(inputCheckbox);
        // console.log(inputCheckbox);
       

        // add contactDiv in main contener 
        mainContentListContact.appendChild(contactDiv);

        divIcone.addEventListener("mouseover",function(evt){
            divIcone.style.backgroundColor = "";
            divIcone.style.display = "none";
            divInput.style.display = "flex";
        });
        // document.addEventListener("mouseover",function(evt){
        //     if (evt.target !==  divIcone ) {
        //             divInput.style.display = "none";
        //             divIcone.style.backgroundColor = (randomColor());
        //             divIcone.classList.add("effect-trasition-icone");
        //         }
        //     }
        // ); 
    }
}

displayContacts();

//Display number the contact
// console.log(checkContactsExist);
let compt = i +1;
checkContactsExist.textContent = "Contact" + " " + "(" + i +")";
let checkContactsExistt = manageDomValues("checkContactsExistt");
checkContactsExistt.textContent = "Contact" + " " + "(" + i +")";




