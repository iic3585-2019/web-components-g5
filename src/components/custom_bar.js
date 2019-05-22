export default class CustomBar extends HTMLElement {
    constructor() {
        super()

        //Se obtienen los elementos a desplegar en la barra
        this.obj = {}
        Array.from(this.getElementsByTagName("ul")).forEach(element => {
            this.obj[element.className] = []
            Array.from(element.getElementsByTagName("li")).forEach(item => {
                this.obj[element.className].push([item.className, item.innerText])
            })
        })

        this.root = this.attachShadow({ mode: 'open' })
    }

    connectedCallback() {
        const { shadowRoot } = this
        const template = document.getElementById('custom-bar')
        const node = document.importNode(template.content, true)

        this.mainContainer = node.getElementById("container")

        //Se añade el html de los elementos presentes en la barra
        Object.keys(this.obj).forEach(key=>{
            let html = ''
            if (this.obj[key].length == 0) {
                html += '<a href="'
                console.log(key)
                html += key.split(" ")[1]
                html += '" class="navbar-item">'
                html += key.split(" ")[0]
                html += '</a>'
            }
            else{
                html += '<div class="navbar-item has-dropdown is-hoverable">'
                html += '<a class="navbar-link is-arrowless">'
                html += key
                html += '</a>' 
                html += '<div class="navbar-dropdown is-boxed">'
                
                this.obj[key].forEach(val => {
                    html += '<a href="'
                    html += val[1]
                    html += '" class="navbar-item">'
                    html += val[0]
                    html += '</a>'
                }) 

                html += '</div></div>'
            }
            
            this.mainContainer.innerHTML += html
        })    
        
        shadowRoot.appendChild(node)
    }
}

window.customElements.define('custom-bar', CustomBar)