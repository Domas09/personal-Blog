const formArray = JSON.parse(localStorage.getItem('formArray'));
const cardSection = document.querySelector('#card-section');

function makeCard(title, name, content){
    const card = document.createElement("section");
    card.classList.add('card');
    cardSection.appendChild(card);
    makeEl("", "h1", title, card);
    makeEl("Author: ","h2", name, card);
    makeEl("","p", content, card);
}

function makeEl(preText, elementType, content, section){
    const el = document.createElement(elementType);
    el.textContent = preText + content;
    section.appendChild(el);
}


// for(let i = 0; i < formArray.length; i++){
    
// }

makeCard("Im bored", "Domas", "Im working on this project and its taking a bit.");
makeCard("Im exited", "Domas", "I got something to work for once :).");
makeCard("Im confused", "Domas", "Now something isnt working :(.");

