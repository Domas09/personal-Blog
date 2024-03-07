// const declaration
const titleEl = document.querySelector('#title-input');
const usernameEl = document.querySelector('#username-input');
const contentEl = document.querySelector('#content-input');
const buttonEl = document.querySelector('#button')
// couldn't figure out how to not have the array reset in local storage used this link
// https://stackoverflow.com/questions/49606576/array-data-in-localstorage-resets-after-page-reload
const formArray = JSON.parse(localStorage.formArray || '[]');


function getForm(event){
    event.preventDefault();
    const formObject = {
        title: titleEl.value,
        username: usernameEl.value,
        content: contentEl.value
    }
    formArray.push(formObject);
    localStorage.setItem('formArray', JSON.stringify(formArray));
    titleEl.value = '';
    usernameEl.value = '';
    contentEl.value = '';
}

buttonEl.addEventListener('click', getForm);
