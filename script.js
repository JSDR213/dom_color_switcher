let redButton = document.querySelector('.red');
let whiteButton = document.querySelector('.white');
let blueButton = document.querySelector('.blue');
let yellowButton = document.querySelector('.yellow');
let alignButton = document.querySelector('.centerAlign');
let fontButton = document.querySelector('.serifFont');
let backgroundButton = document.querySelector('.backgroundImg');
let buttonBorders = document.querySelectorAll('.moreStyle li')
let colorBorders = document.querySelectorAll('.switcher li a')

const makeRed = () => {
    document.body.style.backgroundColor = 'red';
    document.body.style.color = 'yellow';
    alignButton.style.color = 'yellow';
    fontButton.style.color = 'yellow';
    for (let i = 0; i < buttonBorders.length; i++){
        buttonBorders[i].style.border = 'yellow 3px solid';
    }
    for (let i = 0; i < colorBorders.length; i++){
        colorBorders[i].style.border = '3px solid yellow';
    }
}

redButton.addEventListener('click', makeRed)

const makeWhite = () => {
    document.body.style.backgroundColor = 'white';
    document.body.style.color = 'red';
    alignButton.style.color = 'red';
    fontButton.style.color = 'red';
    for (let i = 0; i < buttonBorders.length; i++){
        buttonBorders[i].style.border = 'red 3px solid';
    }
    for (let i = 0; i < colorBorders.length; i++){
        colorBorders[i].style.border = '3px solid red';
    }
}
whiteButton.addEventListener('click', makeWhite)

const makeBlue = () => {
    document.body.style.backgroundColor = 'blue';
    document.body.style.color = 'white';
    alignButton.style.color = 'white';
    fontButton.style.color = 'white';
    for (let i = 0; i < buttonBorders.length; i++){
        buttonBorders[i].style.border = 'white 3px solid';
    }
    for (let i = 0; i < colorBorders.length; i++){
        colorBorders[i].style.border = '3px solid white';
    }
}
blueButton.addEventListener('click', makeBlue)

const makeYellow = () => {
    document.body.style.backgroundColor = 'Yellow';
    document.body.style.color = 'red';
    alignButton.style.color = 'red';
    fontButton.style.color = 'red';
    for (let i = 0; i < buttonBorders.length; i++){
        buttonBorders[i].style.border = 'red 3px solid';
    }
    for (let i = 0; i < colorBorders.length; i++){
        colorBorders[i].style.border = '3px solid red';
    }
}
yellowButton.addEventListener('click', makeYellow)



function toggleAlignment () {
    if (document.body.style.textAlign === "left"){
        document.body.style.textAlign = "center";
        document.querySelector('.switcher').style.margin = 'auto'
    }
    else {
        document.body.style.textAlign = "left";
        document.querySelector('.switcher').style.margin = ''
    }
}
alignButton.addEventListener('click', toggleAlignment)

function toggleFont () {
    if (document.body.style.fontFamily === "sans-serif"){
        document.body.style.fontFamily = "serif"
    }
    else {
        document.body.style.fontFamily = "sans-serif";
    }
}
fontButton.addEventListener('click', toggleFont)

function toggleBackground () {
    if (document.body.style.backgroundImage === ""){
        document.body.style.backgroundImage = "url(https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRCidJVTix4ZEsg7mzCK6AfEBuv0q5JdTue-bOnuvEghhhqG54rSht8zCtdM_axAsg4_M8&usqp=CAU)"
    }
    else {
        document.body.style.backgroundImage = "";
    }
}
backgroundButton.addEventListener('click', toggleBackground)