const root = document.documentElement;
const changeBtn = document.getElementById('changeBtn');
let mode = false;

let whiteColor = getComputedStyle(root).getPropertyValue("--white");
let blackColor = getComputedStyle(root).getPropertyValue("--black");

changeBtn.addEventListener('click', (e) => changeColor());

function changeColor() {
    mode = !mode;
    if(mode) {
        root.style.setProperty('--white', blackColor);
        root.style.setProperty('--black', whiteColor);
    } else {
        root.style.setProperty('--white', whiteColor);
        root.style.setProperty('--black', blackColor);
    }
}

