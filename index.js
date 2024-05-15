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
const mainContent = manageDomValues("mainContent");
const contact__buttonn = manageDomValues("contact__button"); 

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

// /* Button contact */
// const main__contentClass = document.querySelector(".main__content");
// contact__buttonn.addEventListener("click",function(evt){
//     const main__contentClass = document.querySelector(".content__add-contact");
//     // console.log(main__contentClass);
//     if (main__contentClass) {
//         // mainContactsNoExist.remove();
//         // hr.remove();
//         // main__content.append(div);
//         // div.append(divImg);
//         // setTimeout(function(){
//         //     divImg.src = "https://ssl.gstatic.com/social/contactsui/images/emptycontacts/emptycontacts_animation_cell3.png";
//         // },3000);
//         // div.append(p);
//         console.log((main__contentClass));
//     }
//     // alert("Bonjour");  
    
// });




/*  Added functionality to add contacts */
const content__img = manageDomValues("content__img");
const divv = document.createElement("div");
divv.className = "content__add-contact";
const divvv = document.createElement("div");
divvv.className = "content__div-vide";
const divNavigation = document.createElement("div");
divNavigation.className = "add-contact__navigation"; 
const btnNavition = document.createElement("button");
btnNavition.textContent ="Enregistrer";
btnNavition.disabled = true;
btnNavition.className = "navigation__btn";
btnNavition.id = "enregistrer";
const backTouch = document.createElement("img");
backTouch.alt = "Retour";
backTouch.src = "img/logo/retour.png";
backTouch.className = "navigation__img-back-touch";
const divPicture = document.createElement("div");
divPicture.className = "add-contact__picture";
const pictureImg = document.createElement("img");
pictureImg.alt = "";
pictureImg.src = "img/logo/addPicturee.png";
pictureImg.className = "picture__width";
const divAdd = document.createElement("div");
divAdd.className = "add-contact__bloc";
const divForm = document.createElement("div");
divForm.className = "add-contact__form";
const btnLibelle = document.createElement("button");
btnLibelle.className = "form__btn";
btnLibelle.textContent = "Libellé"
btnLibelle.title = "Gerer les libellés";
const spanLibelle = document.createElement("span");
spanLibelle.textContent = "+";
spanLibelle.className = "btn__span-libelle";
const divInput = document.createElement("div");
divInput.className = "form__input";
const divInputName = document.createElement("div");
divInputName.className = "input__name";
const divInputPrenom = document.createElement("div");
divInputPrenom.className = "input__prenom";

const inputPrenom = document.createElement("input");
inputPrenom.type = "text";
inputPrenom.className = "prenom__input";
inputPrenom.id = "prenom__input";
inputPrenom.placeholder = "Prénom";

const inputIconePrenom = document.createElement("img");
inputIconePrenom.className = "prenom__icone-prenom";
inputIconePrenom.alt = "Titre";
inputIconePrenom.src = "img/logo/person.PNG";


const inputNom = document.createElement("input");
inputNom.type = "text";
inputNom.className = "input__nom";
inputNom.placeholder = "Nom";

const divInputEntreprise = document.createElement("div");
divInputEntreprise.className = "form__entreprise";
const sectionEntreprise = document.createElement("div");
sectionEntreprise.className = "entreprise__div";
const divEntreprise = document.createElement("div");
divEntreprise.className = "entreprise__div";
const inputEntreprise = document.createElement("input");
inputEntreprise.type = "text";
inputEntreprise.className = "entreprise__input";
inputEntreprise.placeholder = "Entreprise";
const inputFonction = document.createElement("input");
inputFonction.className = "div__function";
inputFonction.placeholder = "Fonction";


const divMail = document.createElement("div");
divMail.className = "form__mail";
const sectionMail = document.createElement("div");
sectionMail.className = "mail__div";
const inputMail = document.createElement("input");
inputMail.placeholder = "E-mail";
inputMail.className = "div__input";

const inputAddMail = document.createElement("button");
const spanMail = document.createElement("span");
spanMail.textContent = "+";
const spanMailText = document.createElement("span");
spanMailText.textContent = "Ajouter une adresse e-mail";
inputAddMail.className = "mail__button";

const divTelInput = document.createElement("div");
divTelInput.className = "form__tel-input";
const inputTel = document.createElement("input");
inputTel.type = "tel";
inputTel.className = "input__tel";
inputTel.id = "phone";
inputTel.value = "+243";
inputTel.placeholder = "Téléphone";

// spanMail.className = ""
// spanMail.textContent = "+";
// inputAddMail.className = "input__button";


// const divMail = document.createElement("div");
// divMail.className = "mail__div";
// const inputEntreprise = document.createElement("input");
// inputEntreprise.type = "text";
// inputEntreprise.className = "entreprise__input";
// inputEntreprise.placeholder = "Entreprise";
// const inputFonction = document.createElement("input");
// inputFonction.className = "div__function";
// inputFonction.placeholder = "Fonction";

// inputEntreprise.type = "text";
// const inputFonction = document.createElement("input");
// inputFonction.type = "text";
// const inputEmail = document.createElement("input");
// inputEmail.type = "email";
// const inputButton = document.createElement("button");
// inputButton.textContent = "+ Ajouter une adresse e-mail";

// imgBtnLibelle.atl = "";
// imgBtnLibelle.src =  "img/logo/add.png";
// imgBtnLibelle.className = "btn__libelle";



btnCreateContacts.addEventListener("click",function(){
    checkContactsExist.remove();
    content__img.remove();
    main__content.append(divv);
    main__content.append(divvv);
    mainContent.classList.add("main__content--overflow");

    divv.append(divNavigation);
    divNavigation.append(backTouch);
    divNavigation.append(btnNavition);
    divv.append(divPicture);
    divPicture.append(pictureImg);
    divPicture.append(divAdd);
    divv.append(divForm);

    divForm.append(btnLibelle);
    btnLibelle.append(spanLibelle);

    divForm.append(divInput);
    divInput.append(divInputPrenom);
    divInputPrenom.append(inputPrenom);
    // divInput.append(inputIconePrenom);
    divInput.append(inputNom);

    divForm.append(divInputEntreprise);
    divInputEntreprise.append(sectionEntreprise);
    sectionEntreprise.append(inputEntreprise);
    divInputEntreprise.append(inputFonction);

    divForm.append(divMail);
    divMail.append(sectionMail);
    sectionMail.append(inputMail);
    divMail.append(inputAddMail);
    inputAddMail.append(spanMail);
    inputAddMail.append(spanMailText);

    divForm.append(divTelInput);
    divTelInput.append(inputTel);
    // console.log("bonjour")
    // divInputEntreprise.append(inputEntreprise);
    
}
);

/* change color border input if click */
inputPrenom.addEventListener("click",function(evt){
    inputPrenom.classList.add("prenom__input--border-color");
}
);
document.addEventListener("click",function(evt){
    if (evt.target != inputPrenom) {
        inputPrenom.classList.remove("prenom__input--border-color");
    } 
}
);

inputNom.addEventListener("click",function(evt){
    inputNom.classList.add("input__nom--border-color");
}
);
document.addEventListener("click",function(evt){
    if (evt.target != inputNom) {
        inputPrenom.classList.remove("input__nom--border-color");
    } 
}
);

inputEntreprise.addEventListener("click",function(evt){
    inputEntreprise.classList.add("entreprise__input--border-color");
}
);
document.addEventListener("click",function(evt){
    if (evt.target != inputEntreprise) {
        inputEntreprise.classList.remove("entreprise__input--border-color");
    } 
}
);

inputFonction.addEventListener("click",function(evt){
    inputFonction.classList.add("div__function--border-color");
}
);
document.addEventListener("click",function(evt){
    if (evt.target != inputFonction) {
        inputFonction.classList.remove("div__function--border-color");
    } 
}
);

inputMail.addEventListener("click",function(evt){
    inputMail.classList.add("mail__button--border-color");
}
);
document.addEventListener("click",function(evt){
    if (evt.target != inputMail) {
        inputMail.classList.remove("mail__button--border-color");
    } 
}
);

inputTel.addEventListener("click",function(evt){
    inputTel.classList.add("mail__button--border-color");
}
);
document.addEventListener("click",function(evt){
    if (evt.target != inputTel) {
        inputTel.classList.remove("mail__button--border-color");
    } 
}
);

/* keyboard click management evenement */
inputPrenom.addEventListener("keydown",function(evt){
    if (inputPrenom.value.trim() !== "") {
        btnNavition.disabled = false;
        btnNavition.style.backgroundColor = "#1E64D4";
        btnNavition.style.color = "white";
        btnNavition.style.fontWeight = "bold";
        btnNavition.style.cursor = "pointer";
    } else {
        btnNavition.disabled = true;
        btnNavition.style.backgroundColor = "";
        btnNavition.style.color = ""; // 
        btnNavition.style.fontWeight = "";
        btnNavition.style.cursor = "pointer";
    }
}
);

inputNom.addEventListener("keydown",function(evt){
    if (inputNom.value.trim() !== "") {
        btnNavition.disabled = false;
        btnNavition.style.backgroundColor = "#1E64D4";
        btnNavition.style.color = "white";
        btnNavition.style.fontWeight = "bold";
        btnNavition.style.cursor = "pointer";
    } else {
        btnNavition.disabled = true;
        btnNavition.style.backgroundColor = "";
        btnNavition.style.color = ""; // 
        btnNavition.style.fontWeight = "";
    }
}
);

inputEntreprise.addEventListener("keydown",function(evt){
    if (inputEntreprise.value.trim() !== "") {
        btnNavition.disabled = false;
        btnNavition.style.backgroundColor = "#1E64D4";
        btnNavition.style.color = "white";
        btnNavition.style.fontWeight = "bold";
        btnNavition.style.cursor = "pointer";
    } else {
        btnNavition.disabled = true;
        btnNavition.style.backgroundColor = "";
        btnNavition.style.color = ""; // 
        btnNavition.style.fontWeight = "";
    }
}
);

inputFonction.addEventListener("keydown",function(evt){
    if (inputFonction.value.trim() !== "") {
        btnNavition.disabled = false;
        btnNavition.style.backgroundColor = "#1E64D4";
        btnNavition.style.color = "white";
        btnNavition.style.fontWeight = "bold";
        btnNavition.style.cursor = "pointer";
    } else {
        btnNavition.disabled = true;
        btnNavition.style.backgroundColor = "";
        btnNavition.style.color = ""; // 
        btnNavition.style.fontWeight = "";
    }
}
);

inputMail.addEventListener("keydown",function(evt){
    if (inputMail.value.trim() !== "") {
        btnNavition.disabled = false;
        btnNavition.style.backgroundColor = "#1E64D4";
        btnNavition.style.color = "white";
        btnNavition.style.fontWeight = "bold";
        btnNavition.style.cursor = "pointer";
    } else {
        btnNavition.disabled = true;
        btnNavition.style.backgroundColor = "";
        btnNavition.style.color = ""; // 
        btnNavition.style.fontWeight = "";
    }
}
);

inputTel.addEventListener("keydown",function(evt){
    if (inputTel.value.trim() !== "") {
        btnNavition.disabled = false;
        btnNavition.style.backgroundColor = "#1E64D4";
        btnNavition.style.color = "white";
        btnNavition.style.fontWeight = "bold";
        btnNavition.style.cursor = "pointer";
    } else {
        btnNavition.disabled = true;
        btnNavition.style.backgroundColor = "";
        btnNavition.style.color = ""; // 
        btnNavition.style.fontWeight = "";
    }
}
);



