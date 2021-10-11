const search = document.querySelector('.search');
const loupe = document.querySelector('.loupe');
const menu = document.querySelector('#menu');
const sticky = menu.offsetTop;
const cart = document.querySelector('.cart');
const qt1 = document.querySelector('#quant1');
const qt2 = document.querySelector('#quant2');
const qt3 = document.querySelector('#quant3');
const qt4 = document.querySelector('#quant4');
const cartP = document.querySelector('.cart-prod');
// sticky menu
window.onscroll = () =>{
    if(window.pageYOffset >= sticky){
        menu.classList.add("sticky");
    }else{
        menu.classList.remove("sticky");
    }
}

//TOGGLE INPUT BUSCAR - CARRINHO
document.addEventListener('click', (e) => {
    const el = e.target;
    if(el.classList.contains("loupe")){
        if(search.classList.contains("active")){
            search.classList.remove("active")
        }else{
            search.classList.add("active");
        }
    }
    if(el.classList.contains("cart-img") || el.classList.contains("cart") || el.classList.contains("close")){
        if(cart.classList.contains("active")){
            cart.classList.remove("active");
        }else{
            cart.classList.add("active");
        }
    }
})

function bProd1(){
    qt1.value = 1;
    cartP.classList.add("w-prod")
    cartP.childNodes[3].classList.add("active");
}
function bProd2(){
    qt2.value = 1;
    cartP.classList.add("w-prod")
    cartP.childNodes[5].classList.add("active");
}
function bProd3(){
    qt3.value = 1;
    cartP.classList.add("w-prod")
    cartP.childNodes[7].classList.add("active");
}
function bProd4(){
    qt4.value = 1;
    cartP.classList.add("w-prod")
    cartP.childNodes[9].classList.add("active");
}
