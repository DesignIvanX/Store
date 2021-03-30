
window.addEventListener('hashchange', () => funtions())
window.addEventListener('load', () => funtions())

const funtions = () => {
    setTimeout(()=>{
    const search = document.querySelector(".fa-search")
    const searchInput = document.querySelector(".search-input")
    const burger = document.querySelector(".burger")
    const ul = document.querySelector(".ul")
    const nav = document.querySelector("nav")
    search.addEventListener("click", () => {
    if(searchInput.classList.contains("width-input")){
        searchInput.classList.remove("width-input")
        searchInput.classList.add("width-input-none")
        return
    }
    searchInput.classList.remove("width-input-none")
    searchInput.classList.add("width-input")
})
burger.addEventListener("click", () => {
    burger.classList.add("toggle")
    if(ul.classList.contains("open")){
        ul.classList.remove("open")
        burger.classList.remove("toggle")
        return
    }
    ul.classList.add("open")
})
window.addEventListener("scroll", (e) => {
    if(window.scrollY >= 44){
        nav.style.background = "#eeeeee"
    }else{
        nav.style.background = "none"
    }
})
    })
    
}

