export default class RetailItem extends HTMLElement {
    constructor() {
        // Se llama al padre, ya que es una herencia
        super()

        // Se abre el sahdowDOM
        this.root = this.attachShadow({ mode: 'open' })
    }

    connectedCallback() {
        let percetage = true

        // Se inicializan los parámetros
        if (!this.hasAttribute('url')) {
            this.setAttribute('url', 'https://www.google.com/')
        }
        if (!this.hasAttribute('product_name')) {
            this.setAttribute('product_name', 'attr product_name is missing')
        }
        if (!this.hasAttribute('old_price')) {
            this.setAttribute('old_price', 'attr old_price is missing')
            percetage = false
        }
        if (!this.hasAttribute('new_price')) {
            this.setAttribute('new_price', 'attr new_price is missing')
            percetage = false
        }

        let sale_percentage = 0
        // Se puede calcular el procentaje de 
        if (percetage) {
            sale_percentage = Math.round((this.old_price - this.new_price) / (this.old_price) * 100)
        }

        // Se obtiene el template y se rellena según los atributos
        const { shadowRoot } = this
        const template = document.getElementById('retail-item')
        const node = document.importNode(template.content, true)

        node.getElementById("product-name").innerHTML = this.product_name
        node.getElementById("old-price").innerHTML = this.old_price
        node.getElementById("new-price").innerHTML = this.new_price
        if (percetage) {
            node.getElementById("sale-percentage").innerHTML = String(sale_percentage) + "% DCTO"
        } else {
            node.getElementById("sale-percentage").innerHTML = "X% DCTO"
        }

        if (this.hasAttribute('image_url')) {
            node.getElementById("product-image").src = this.image_url
        }

        node.getElementById("image-container").href = this.url

        shadowRoot.appendChild(node)
    }

    // Se define un getter para así ocupar el this.url
    get url() {
        return this.getAttribute('url')
    }
    get product_name() {
        return this.getAttribute('product_name')
    }
    get old_price() {
        return this.getAttribute('old_price')
    }
    get new_price() {
        return this.getAttribute('new_price')
    }
    get image_url() {
        return this.getAttribute('image_url')
    }

    // En caso que se quisiera modificar url se tendria que definir un setter para hacer this.url = "nueva_url"
    /*set url(newValue) {
        this.setAttribute('url', newValue);
    }*/
}
window.customElements.define('retail-item', RetailItem)
