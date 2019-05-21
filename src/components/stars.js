export default class StarsBar extends HTMLElement {
    constructor() {
        // Se llama al padre, ya que es una herencia
        super()

        // Se abre el sahdowDOM
        this.root = this.attachShadow({ mode: 'open' })

        this.status = {
            rating: 0
        }

        this.handleClick = this.handleClick.bind(this)
        this.getStar = this.getStar.bind(this)
        this.getInactiveStar = this.getInactiveStar.bind(this)
        this.updateRating = this.updateRating.bind(this)
    }



    connectedCallback() {
        // Se inicializan los parámetros
        if (!this.hasAttribute('max_value')) {
            this.setAttribute('max_value', 5)
        }
        if (!this.hasAttribute('selected_value')) {
            this.setAttribute('selected_value', 0)
        }

        // Se obtiene el template y sobre el se añaden estrellas
        // segun las props ingresadas
        const { shadowRoot } = this
        const template = document.getElementById('stars')
        const node = document.importNode(template.content, true) // Se copia el contenido del template

        // Se procede a rellenar las estrellas
        const container = node.getElementById('container')

        let i = 1

        while (this.selected_value >= i) {
            container.appendChild(this.getStar())
            i += 1
        }

        while (this.max_value >= i) {
            container.innerHTML += this.getInactiveStar()
            i += 1
        }

        container.childNodes.forEach((x, index) => {
            x.addEventListener('click', this.handleClick(index + 1))
        })

        shadowRoot.appendChild(node)
    }

    // Función que ve el estado de rating y en base a eso asigna las clases css
    updateRating() {
        const { shadowRoot } = this

        let container = shadowRoot.getElementById('container')

        container.childNodes.forEach((x, index) => {
            if (index + 1 <= this.status['rating']) {
                x.className = "star"
            }
            else {
                x.className = "star is-inactive"
            }
        })
    }

    // Función que se ejecuta cuando clickean las estrella
    // x viene a ser el número de la estrella
    handleClick(x) {
        return () => {
            this.status['rating'] = x
            this.updateRating()
        }
    }

    // Genera una estrella solida
    getStar(number_of_star) {
        let img = document.createElement('img')
        img.src = "/static/star.png"
        img.className = "star"

        return img
    }

    // Genera una estrella trasparente
    getInactiveStar() {
        return `<img src="/static/star.png" class="star is-inactive">`
    }

    // Getters
    get max_value() {
        return this.getAttribute('max_value')
    }
    get selected_value() {
        return this.getAttribute('selected_value')
    }
}


window.customElements.define('stars-bar', StarsBar)