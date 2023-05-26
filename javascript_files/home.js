const menu = document.getElementById('menu');
const menudiv = document.getElementById('menu-div');
const back = document.getElementById('back');
const menuoptions = document.querySelectorAll('.menu-option');

menu.addEventListener('click',()=>{
    menudiv.style.left = '0%';

    gsap.fromTo(
        menuoptions,
        {
             opacity: 0,
              x: -100 
            },
        { 
            opacity: 1,
             x: 0,
            stagger : 0.1,
            duration: 1,
            delay : 1,
            ease : Power3.easeIn}
    )
    gsap.fromTo(".menu-account-div",{
        opacity : 0,
    },{
        opacity : 1,
        duration : 1,
        ease: Power4.easeInOut,
        delay : 0.5
    })
    gsap.fromTo(".back",{
        opacity : 0,
    },{
        opacity : 1,
        duration : 1,
        ease: Power4.easeInOut,
        delay : 0.5
    })
    gsap.fromTo(".menu-white-bottom-div",{
        opacity : 0,
    },{
        opacity : 1,
        duration : 1,
        ease: Power4.easeInOut,
        delay : 3
    })

});
back.addEventListener('click',()=>{
    menudiv.style.left = '-31%';
});

localStorage.setItem("name", "Sanidhya");

console.log("localStorage.name")