export default class StarsBar extends HTMLElement {
    constructor() {
        // Se llama al padre, ya que es una herencia
        super()

        // Se abre el sahdowDOM
        this.root = this.attachShadow({ mode: 'open' })
    }

    connectedCallback() {
        // Se obtiene el template y se rellena según los atributos
        const { shadowRoot } = this
        const template = document.getElementById('stars')
        const node = document.importNode(template.content, true)

        shadowRoot.appendChild(node)
    }


}


window.customElements.define('stars-bar', StarsBar)