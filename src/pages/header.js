function Header() {
    const view = `
        <div class="nav-content">
        <div class="logo">LONDON</div>
            <ul class="ul">
                <li><a href="#/home/">Home</a></li>
                <li><a href="#/shop/">Shop</a></li>
                <li><a href="#/pages/">Pages</a></li>
                <li><a href="#/blog/">Blog</a></li>
            </ul> 
        </div>
        <div class="content-card-search">
            <div class="content-search">
        <input type="text" class="search-input"><span><i class="fas fa-search"></i></span>
        </div>
        <button class="btn-card-shopping">
            <span class="content-number-shop">0</span>
            <a href="#/shop/"><i class="fas fa-shopping-cart"></i></a>
        </button>
        </div>
        <div class="burger">
            <div class="line1"></div>
            <div class="line2"></div>
            <div class="line3"></div>
        </div>
    `;
    return view;
}
export default Header