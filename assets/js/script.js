const search = document.querySelector('.search');
const loupe = document.querySelector('.loupe');

//TOGGLE INPUT BUSCAR
document.addEventListener('click', (e) => {
    const el = e.target;
    if(el.classList.contains("loupe")){
        if(search.classList.contains("active")){
            search.classList.remove("active")
        }else{
            search.classList.add("active");
        }
    }
})

const menu = document.querySelector('#menu');
const sticky = menu.offsetTop;

window.onscroll = () =>{
    if(window.pageYOffset >= sticky){
        menu.classList.add("sticky");
    }else{
        menu.classList.remove("sticky");
    }
}