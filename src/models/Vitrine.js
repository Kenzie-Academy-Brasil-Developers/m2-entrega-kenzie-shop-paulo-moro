

class Vitrine{
    static criarVitrine(){
        const section = document.createElement("section")
        const main = document.querySelector("main")
        const ul = document.createElement("ul")
        
        ul.id = "Vitrine"
        ul.classList.add("Container")
        
        main.appendChild(section)
        section.appendChild(ul)

    }
}

export {Vitrine}