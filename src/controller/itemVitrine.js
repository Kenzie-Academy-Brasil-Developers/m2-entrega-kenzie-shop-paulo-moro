class ItemVitrine {
    static requisicao(){
        const produtos = fetch("https://m2-kenzie-shop.herokuapp.com/products")
        .then(response => response.json())
        .then((data)=>{
        const {products} = data
       
        products.forEach((product)=>{
            ItemVitrine.template(product)
            })   
        })
    }
    static template(objProduct){
        const ul = document.querySelector("ul")        
        const li = document.createElement("li")
        const {productName,price,promotionStatus} = objProduct

        const urlImagem = ItemVitrine.criarImgUrl(objProduct)
        const estrelas = ItemVitrine.verificarAvaliacao(objProduct)
        const precoProduto = ItemVitrine.tratarNumero(ItemVitrine.verificarPromo(objProduct))


        if(promotionStatus === true){
                li.innerHTML = `
                    <img src="${urlImagem}" alt="${productName}">
                    <span class = "avaliacao">${estrelas}</span>
                    <p class = "nome-produto">${productName}</p>
                    <p class = "container-preco"> 
                        <span class = "originalPrice">De: R$${price.productPrice},00</span>
                        <span class = "preco">Por: ${precoProduto}</span>
                    </p>
                    <button class = "comprar-btn">Comprar</button>
                    `
                
            }
            else{
                li.innerHTML = `
                    <img src="${urlImagem}" alt="${productName}">
                    <span class = "avaliacao">${estrelas}</span>
                    <p class = "nome-produto">${productName}</p>
                    <p class = "container-preco"> 
                        <span class = "preco">${precoProduto}</span>
                    </p>
                    <button class = "comprar-btn">Comprar</button>
                    `
            }
             

       
        ul.appendChild(li)
        
    }
    static verificarAvaliacao(obj){
        console.log(obj)
        const {reviews} = obj
        console.log(reviews)
        let results = ""
        if(reviews == 1){
            results = "&#9733 &#9734 &#9734 &#9734 &#9734"
        }
        else if(reviews == 2){
            results = "&#9733 &#9733 &#9734 &#9734 &#9734"
        }
        else if(reviews == 3){
            results = "&#9733 &#9733 &#9733 &#9734 &#9734"
        }
        else if(reviews == 4){
            results = "&#9733 &#9733 &#9733 &#9733 &#9734"
        }
        else if(reviews == 5){
            results = "&#9733 &#9733 &#9733 &#9733 &#9733"
        }
        return results
    }
    static verificarPromo(obj){
        let precoProduto = 0
        const {promotionStatus, price} = obj
        if(promotionStatus == true){
            precoProduto = price.productPromotionPrice
        }
        else{
            precoProduto = price.productPrice
        }
        return precoProduto
    }
    static tratarNumero(num){
        let numTratado = ""
        if(num.toString().includes(".")){
            numTratado = `R$${num.toString().replace(".",",")}0`
        }
        else{
            numTratado = `R$${num},00`
        }
        return numTratado
    }
    static criarImgUrl(obj){
        
        const {imageUrl, id} = obj
        let url = `https://kenzie-academy-brasil.gitlab.io/fullstack/frontend/modulo2/sprint3/img/consumindo-api-produtos/${id}/${imageUrl}`
        return url
    }
}

export {ItemVitrine}