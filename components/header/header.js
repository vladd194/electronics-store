class Header{
    handlerOpenShoppingPage(){
        shoppingPage.render();
    }

    render(count){
        const html = `
            <div class="header-container">
                    <div class="row">
                        <input type="text" id="input-box" placeholder="Search anything" autocomplete="off">
                        <div class="search-button"  onclick=" ">
                            <img class="search-img" src="img/other/magnifying-glass.png"></img>
                        
                    </div>
                </div>
            
                <div class="header-counter" onclick=" headerPage.handlerOpenShoppingPage();">
                    🛒${count}
                </div>
            </div>

            
            
        `;

        rootHeader.innerHTML = html;
    }
};

const headerPage = new Header();

const productsStore = localStorageUntils.getProducts();

headerPage.render(productsStore.length);

