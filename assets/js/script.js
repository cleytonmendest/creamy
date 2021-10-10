const search = document.querySelector('.search');
const loupe = document.querySelector('.loupe');
const menu = document.querySelector('#menu');
const sticky = menu.offsetTop;
const cart = document.querySelector('.cart');

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