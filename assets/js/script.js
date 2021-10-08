const search = document.querySelector('.search');
const loupe = document.querySelector('.loupe');

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
