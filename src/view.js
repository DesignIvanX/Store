import Router from '../src/router/router.js'
export default class FashionAPI {
    constructor(){
        this.model = null
        this.router = new Router()
        this.router.onClick((hash) => this.check(hash))  
    }
    setModel(model){
        return this.model = model
    }
<<<<<<< HEAD
    check(hash){
        if (hash === '/home' || hash === '/') {
            const todos = this.model.getTodos()
            this.createCard(todos)
        }else if(hash === '/shop'){
            const getLocal = this.model.getLocal()
            getLocal.map(local => {
                this.createAddShop(local) 
            })  
            this.addShopItem(getLocal)
        }else if(hash === '/pay'){
            const getLocal = this.model.getLocal()
            this.addShopItem(getLocal)
        }else{
            return
=======
    render(){
        const todos = this.model.getTodos()
        this.createCard(todos)
    }
    renderLocal(){
        const getLocal = this.model.getLocal()
        getLocal.map(local => {
            this.addShopItem(local, getLocal)
        })
    }
    sumPrice(todos){
        let total = 0
        for (let i = 0; i < todos.length; i++) {
            total += parseFloat(todos[i].price.replace(",",""))
>>>>>>> 6bf4f7feb48264cd48c1bc3ef14bbc17a4d27167
        }
    }
    createCard(todo){  
        for (let i = 0; i < todo.length; i++) {
            const container = document.querySelectorAll(".content-card-fashion")
            const content = container[todo[i].container]
            const card = document.createElement("div")
            card.setAttribute("id", todo[i].id)
            card.classList.add("card")
            content.appendChild(card)
            card.innerHTML = `    
            <div>
                <img src="${todo[i].img}" alt="${todo[i].name}">
                <div class="background-card-img"></div>
            </div>                                    
            <div class="content-info-card">
                <div class="content-text">
                    <h3>${todo[i].name.toUpperCase()}</h3>
                    <h4>${todo[i].category.toUpperCase()}</h4>
                    <h5>$${todo[i].price}</h5>
                </div>             
            </div>`
            const div = document.createElement("div")
            const btn = document.createElement("button")
            div.classList.add("content-more")
            btn.classList.add("btn-plus-cart")
            card.children[1].appendChild(div)
            div.appendChild(btn)
            btn.innerHTML = `<i class="fas fa-cart-plus"></i>`
            btn.onclick = () => this.model.setValues({
                container: todo[i].container,
                id: todo[i].id,
                img: todo[i].img,
                name: todo[i].name,
                category: todo[i].category,
                description: todo[i].description,
                price: todo[i].price
            })
        } 
    }
    createAddShop(todo){
        const contentObjectShop = document.createElement("div")
        document.querySelector(".products").appendChild(contentObjectShop)
        contentObjectShop.setAttribute("id", todo.id)
        contentObjectShop.innerHTML = `
        <div class="content-product">
            <div class="container-img-shop">
                <img src="${todo.img}" alt="${todo.name}">
            </div>
            <div class="container-text-shop">
                <h2>${todo.name.toUpperCase()}</h2>
                <p>${todo.description}</p>
                <strong>${todo.price}</strong>
            </div>
        </div>
        `
        const buttonDeleteShop = document.createElement("button")
        buttonDeleteShop.textContent = "Delete"
        contentObjectShop.childNodes[1].childNodes[3].appendChild(buttonDeleteShop)
        buttonDeleteShop.onclick = () => this.deleteObject(todo.id)
    }
<<<<<<< HEAD
    addShopItem(todos){
        let total = 0
        todos.map(todo => {
            let price = parseFloat(todo.price.replace(",",""))
            total += price
            price = total.toString()
            const priceTotal = price.slice(0, price.length - 2)+","+price.slice(2) 
            document.querySelector(".subtotal-produts").textContent = `Subtotal(${todos.length} produts): $${priceTotal}`
        })
        if (todos.length <= 0) document.querySelector(".subtotal-produts").textContent = `Subtotal(${todos.length} produts): $0`
    }  
    deleteObject(id){
        document.getElementById(id).remove()
        this.model.removeTodo(id)
    }   
    numberProduts(todos){
        const content = document.querySelector(".content-number-shop")
        content.textContent = todos.length
    }
}
=======
}




































// bags(){
//     const container = document.querySelectorAll(".content-card-fashion")
//     const content = container[1]
//     this.fashion.bags.womman.map(item => {
//         const card = document.createElement("div")
//         card.classList.add("card")
//         content.appendChild(card)
//         card.innerHTML = `    
//         <div>
//             <img src="${item.img}" alt="${item.name}">
//             <div class="background-card-img"></div>
//         </div>                                    
//         <div class="content-info-card">
//             <div class="content-text">
//                 <h3>${item.name.toUpperCase()}</h3>
//                 <h4>${item.category.toUpperCase()}</h4>
//                 <h5>${item.price}</h5>
//             </div>             
//         </div>`
//         const div = document.createElement("div")
//         const btn = document.createElement("button")
//         div.classList.add("content-more")
//         btn.classList.add("btn-plus-cart")
//         card.children[1].appendChild(div)
//         div.appendChild(btn)
//         btn.innerHTML = `<i class="fas fa-cart-plus"></i>`
//     })
// }
>>>>>>> 6bf4f7feb48264cd48c1bc3ef14bbc17a4d27167
