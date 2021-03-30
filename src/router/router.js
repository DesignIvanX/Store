import Header from '../pages/header.js'
import Home from '../pages/home.js'
import Main from '../pages/main.js'
import Footer from '../pages/footer.js'
import Shop from '../pages/shop.js'
import Pay from '../pages/pay.js' 
import Error404 from '../pages/error404.js'
import GetHash from '../utils/getHash.js'     
import ResolveHash from '../utils/resolveHash.js'
const header = null || document.querySelector('.header');
const nav = null || document.querySelector('.nav')
const main = null || document.querySelector('.main');
const footer = null || document.querySelector('.footer');
const routes = {
    '/home': async function () {
        header.innerHTML = await Home();
        main.innerHTML = await Main();
    },
    '/shop': async function () {
        header.innerHTML = await Shop();
        main.innerHTML = "";
    },
    '/pay': async function () {
        header.innerHTML = await Pay();
        main.innerHTML = "";
    },
    '/error404': async function () {
        header.innerHTML = await Error404();
        main.innerHTML = "";
    },
};
export default class router {
    constructor(){
        this.lazy = document.querySelector('.loading')
        this.loading();
        this.init()
    }
    loading(){
        this.lazy.classList.add('d-block')
        setTimeout(() => {
            this.lazy.classList.remove('d-block')
        },2300)
    }
    async init(){
        nav.innerHTML = await Header();
        footer.innerHTML = await Footer();
    }
    async onClick(callback){        
    window.addEventListener('hashchange', async () => {
        this.loading();
        let hash = GetHash();
        let route = await ResolveHash(hash);      
        let render = routes[route] ? routes[route] : routes['/error404'];
        render();
        setTimeout(()=>{
            callback(route)  
        },1000)     
    })
    window.addEventListener('load', async () => {
        let hash = GetHash();
        let route = await ResolveHash(hash);      
        let render = routes[route] ? routes[route] : routes['/error404'];
        render();
        setTimeout(()=>{
            callback(route)  
        },1000)
    })
    }
}