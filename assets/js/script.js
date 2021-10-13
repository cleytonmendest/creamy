const c = (el) => document.querySelector(el);
const cs = (el) => document.querySelectorAll(el);


const qt1 = c('#quant1');
const qt2 = c('#quant2');
const qt3 = c('#quant3');
const qt4 = c('#quant4');
const cartP = c('.cart-prod');

const menu = document.querySelector('#menu');
const sticky = menu.offsetTop;

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
    const cart = c('.cart');
    const search = c('.search');
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
    if(el.classList.contains("close-card")) card.classList.remove("active");
})

const card = c('.card');
function bProd1(){
    qt1.value = 1;
    cartP.classList.add("w-prod")
    cartP.childNodes[3].classList.add("active");
    verifyInput();
    card.classList.add("active");
    setTimeout(()=>{
        card.classList.remove("active");
    }, 3000);
}
function bProd2(){
    qt2.value = 1;
    cartP.classList.add("w-prod")
    cartP.childNodes[5].classList.add("active");
    verifyInput();
    card.classList.add("active");
    setTimeout(()=>{
        card.classList.remove("active");
    }, 3000);
}
function bProd3(){
    qt3.value = 1;
    cartP.classList.add("w-prod")
    cartP.childNodes[7].classList.add("active");
    verifyInput();
    card.classList.add("active");
    setTimeout(()=>{
        card.classList.remove("active");
    }, 3000);
}
function bProd4(){
    qt4.value = 1;
    cartP.classList.add("w-prod")
    cartP.childNodes[9].classList.add("active");
    verifyInput();
    card.classList.add("active");
    setTimeout(()=>{
        card.classList.remove("active");
    }, 3000);
}

const prod = cs('.cart-w-prod');
const qtd = cs('.qtd');
const valueP = cs('.value-prod');

function changeValue(){
    verifyInput();
}
function verifyInput(){
    let arr = []
    for(let i = 0; prod.length > i; i++){
        console.log("oi")
        if(prod[i].classList.contains("active") && parseInt(qtd[i].value) === 0){
            prod[i].classList.remove("active");
            calcule(i);
        }
        if(prod[i].classList.contains("active")){
            c('.cart-total').classList.add("active");
            arr.push(prod[i]);
            calcule(i);
        }
    }
    if(arr.length === 0){
        cartP.classList.remove("w-prod");
        c('.cart-total').classList.remove("active");
    }
}

const values = [79, 61, 127.80, 49];
function calcule(i){
    const vptotal = parseInt(qtd[i].value) * values[i];
    valueP[i].innerHTML = `R$ ${vptotal.toFixed(2)}`;
    calcTotal(i, vptotal);
}
let array = [0,0,0,0];
function calcTotal(i, vl){
    array[i] = vl;
    let vltotal = array[0] + array[1] + array[2] + array[3];
    c('.value-total').innerHTML = `R$ ${vltotal.toFixed(2)}`;
}
