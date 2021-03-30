import Fashion from './components/fashion.js'
export default class Model {
    constructor(){
        this.view = null
        this.todos = JSON.parse(localStorage.getItem("shop"));
        this.fashion = Fashion
        if (!this.todos || this.todos.length < 1) {
            this.todos = []
            this.currentId = 0;
        }else{
            this.currentId = this.todos[this.todos.length - 1].id + 1
        }
    }
    setView(view){
        return this.view = view
    }
    getTodos(){
        return this.fashion.fashion.map(fashion => ({...fashion}))
    }
    getLocal(){
        return this.todos
    }
    save(){
        localStorage.setItem("shop", JSON.stringify(this.todos))
    }
    setValues(item){
        this.todos.push(item)
        this.view.numberProduts(this.todos);
        this.save()
    }
    removeTodo(id){
        const index = this.findIndex(id)
        this.todos.splice(index, 1) 
        this.view.addShopItem(this.todos)
        this.view.numberProduts(this.todos);  
        this.save()
    }
    findIndex(id){
        for (let i = 0; i < this.todos.length; i++) {
            if(this.todos[i].id == id){
                return this.todos[i]
            }
        }
    }
}