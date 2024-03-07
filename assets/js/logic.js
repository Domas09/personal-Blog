const buttonDarkLight = document.querySelector(".dark-light-mode");
const bodyMode = document.querySelector("body");

if(localStorage.getItem('darkMode') === null){
     localStorage.setItem('darkMode', JSON.stringify(true));
}
function switchMode(){
    modeDark = JSON.parse(localStorage.getItem('darkMode'));
    if(modeDark === true){
        bodyMode.classList.remove("dark");
        buttonDarkLight.textContent="☀️";
        localStorage.setItem('darkMode', JSON.stringify(false));
    } else {
        bodyMode.classList.add("dark");
        buttonDarkLight.textContent= "🌙";
        localStorage.setItem('darkMode', JSON.stringify(true));
    }
}

function confirmMode(){
    modeDark = JSON.parse(localStorage.getItem('darkMode'));
    if(modeDark === true){
        bodyMode.classList.add("dark");
        buttonDarkLight.textContent= "🌙";
    } else {
        bodyMode.classList.remove("dark");
        buttonDarkLight.textContent="☀️";
    }
}

buttonDarkLight.addEventListener('click', switchMode)

confirmMode();