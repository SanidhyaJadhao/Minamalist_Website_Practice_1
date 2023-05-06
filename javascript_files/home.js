const menu = document.getElementById('menu');
const menudiv = document.getElementById('menu-div');
const back = document.getElementById('back');

menu.addEventListener('click',()=>{
    menudiv.style.left = '0%';
})
back.addEventListener('click',()=>{
    menudiv.style.left = '-31%';
})