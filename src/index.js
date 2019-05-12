import '../node_modules/bulma/css/bulma.min.css'

class ItemContainer extends HTMLElement {
    constructor() {
        super()
        this.root = this.attachShadow({ mode: 'open' })
    }

    attributeChangedCallback(attrName, oldValue, newValue) {
        if (newValue !== oldValue) {
            this[attrName] = this.hasAttribute(attrName);
        }
    }

    connectedCallback() {
        const { shadowRoot } = this
        const template = document.getElementById('retail-item')
        const node = document.importNode(template.content, true)

        node.getElementById("product-name").innerHTML = "Nombre del producto"
        node.getElementById("old-price").innerHTML = "20000"
        node.getElementById("new-price").innerHTML = "15000"
        node.getElementById("sale-percentage").innerHTML = "10"

        shadowRoot.appendChild(node)
    }
}
window.customElements.define('item-container', ItemContainer);

$(document).ready(() => {

})



if (module.hot) {
    module.hot.accept()
}