// Lists
const feature = document.querySelector('#features');
const featuresList = document.querySelector('#feature-list');

const arrowUp = document.querySelector('.arrow-up')
const arrowDown = document.querySelector('.arrow-down')

const arrowUp2 = document.querySelector('.arrow-up2')
const arrowDown2 = document.querySelector('.arrow-down2')

const company = document.querySelector('#company')
const companyList = document.querySelector('#company-list')

feature.addEventListener('click', () => {
    if (featuresList.style.display != 'flex') {

        arrowUp.style.display = 'none';
        arrowDown.style.display = 'inline-block';
        featuresList.style.display = 'flex'

    } else {
        featuresList.style.display = 'none';  
        arrowUp.style.display = 'inline-block'
        arrowDown.style.display = 'none'
} 
        
})

company.addEventListener('click', () => {
    if (companyList.style.display != 'flex') {

    companyList.style.display = 'flex'
    arrowUp2.style.display = 'none';
    arrowDown2.style.display = 'inline-block';

    } else {

        companyList.style.display = 'none';
        arrowUp2.style.display = 'inline-block';
        arrowDown2.style.display = 'none';
    } 
        
})

// Mobile version

const openMenu = document.querySelector('#open')
const closeMenu = document.querySelector('#close')
const ul = document.querySelector('#ul')

openMenu.addEventListener('click', () => {
    ul.classList.toggle('navbar-toggle');
    openMenu.classList.toggle('open-toggle');
    closeMenu.classList.toggle('close-toggle');
    
})

closeMenu.addEventListener('click', () => {
    ul.classList.toggle('navbar-toggle');
    openMenu.classList.toggle('open-toggle');
    closeMenu.classList.toggle('close-toggle');
    
}) 

/*
openMenu.addEventListener('click', () => {
    if (window.innerWidth <= 600 && ul.style.display != 'flex') {
        ul.style.display = 'flex'
        console.log ('oi')
    } else {}

})

closeMenu.addEventListener('click', () => {
    if (window.innerWidth <= 600 && ul.style.display != 'none') {
        ul.style.display = 'none'

    } else {}

}) */