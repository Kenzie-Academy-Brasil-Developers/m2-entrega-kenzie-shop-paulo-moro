const body = document.querySelector("body")
const tituloPrincipal = document.createElement("h1")
const segundoTitulo = document.createElement("h2")
const main = document.createElement("main")
const header = document.createElement("header")


class Screen{
    static criarTela(){

        tituloPrincipal.innerText = "Ecommerce template"
        segundoTitulo.innerText = "Kenzie Shop"
        body.appendChild(header)
        body.appendChild(main)
        header.appendChild(tituloPrincipal)
        header.appendChild(segundoTitulo)



    }
}

export {Screen}