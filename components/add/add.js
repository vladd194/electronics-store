class Shopping{
    handleClear(){
        rootAdd.innerHTML = '';
    }
    render(){

        const productsStore = localStorageUntils.getProducts();
        let htmlCatalog = '';
        let sumCatalog = 0;

        Catalog.forEach(({id, name, price, img}) =>{
            if(productsStore.indexOf(id) !== -1){
                htmlCatalog += `
                    <tr>
                        <td>
                            <img class="shopping-elementImg" src="${img}" />
                        </td>
                        <td class="shopping-elementName">${name}</td>
                        <td class="shopping-elementPrice">${price.toLocaleString()} UAH</td>
                    </tr>
                `;
                sumCatalog += price;
            }
        });

        const html = `
            <div class="shopping-container">
                <div class="shopping-close" onclick="shoppingPage.handleClear()">
                    ✖️
                </div>
                
                <table>
                    ${htmlCatalog}
                    <tr>
                        <td class="shopping-elementName"> Sum:</td>
                        <td class="shopping-elementPrice">${sumCatalog.toLocaleString()} UAH</td>
                    </tr>
                </table>
            </div>
        `;
        rootAdd.innerHTML = html;
    }
}

const shoppingPage = new Shopping;