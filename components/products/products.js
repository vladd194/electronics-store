class Products{
    constructor(){
        this.classNameActive = 'products-elementButton_active';
        this.labelAdd = 'Add to cart';
        this.labelRemove = 'Remove from cart';
    }

    handlSetLocationStorage(element, id){
       const {pushProduct, products} = localStorageUntils.putProducts(id);
    
       if(pushProduct){
            element.classList.add(this.classNameActive);
            element.innerHTML = this.labelRemove;
       }
       else{
            element.classList.remove(this.classNameActive);
            element.innerText = this.labelAdd;
       }

       headerPage.render(products.length);

    }

    render(){
        const productsStore = localStorageUntils.getProducts();
        
        let htmlCatalog = '';
        Catalog.forEach(({id, name, price, img}) => {
            let activeClass = '';
            let activeText = '';

            if(productsStore.indexOf(id) === -1){
                activeText =  this.labelAdd;
            }
            else{
                activeClass = ' ' + this.classNameActive;
                activeText =  this.labelRemove;
            }
            
            htmlCatalog += `
                <li class="products-element">
                    <span class="products-elementName">${name}</span>
                    <img class="products-elementImg" src="${img}" />
                    <span class="products-elementPrice">
                    ${price.toLocaleString()} UAH
                    </span>
                    <button class="products-elementButton ${activeClass}" onclick="productsPage.handlSetLocationStorage(this, '${id}');">
                        ${activeText}
                    </button>
                </li>
            
            `; 
            
        });

        const html = `
            <ul class="products-container">
                ${htmlCatalog}
            </ul>
        `;
        
        rootProducts.innerHTML = html;
    }
}


const productsPage = new Products();
productsPage.render();