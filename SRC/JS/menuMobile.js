let menu = document.querySelector(".menu");
on = 1;

function showMenu(){
    if(on == 1){
        menu.style.animationName = 'showMenu';
        on = 0;
    } else {
        menu.style.animationName = 'hiddenMenu'
        on = 1;
    }
}