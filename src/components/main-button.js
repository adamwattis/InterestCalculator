import { LitElement, html, css } from 'lit-element'

class MainButton extends LitElement {

	constructor() {
		super(),
		this.title = 'title'
	}

	static get styles() {
		return css`
			button {
				background: linear-gradient(0deg, rgba(4,215,165,1) 0%, rgba(10,237,209,1) 100%);
				padding: 1rem;
				color: #FFFFFF;
				width: 100%;
				box-shadow: -10px -10px 20px 0 #FAFBFF, 10px 10px 20px 0 #A6ABBD;
				border-radius: 6px;
				border: 3px solid #EBECF0;
				font-size: 1rem;
				font-family: 'Comfortaa', cursive;
			}
			button:focus {
				outline-color: lightgray;
			}
		`
	}

	static get properties() {
		return {
			title: {type: String}
		}
	}

	render() {
		return html`
			<button>
				${this.title}
			</button>
		`
	}
}

customElements.define('main-button', MainButton)