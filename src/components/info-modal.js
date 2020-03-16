import { LitElement, html, css } from 'lit-element'

class InfoModal extends LitElement {

	constructor() {
		super()
		this.open = 'none'
	}

	static get properties() {
		return {
			open: {type: String}
		}
	}

	render() {
		return html`
			<div id="modal" class="${this.open == 'open' ? 'open' : 'none'}">
				<div id="modalContainer">
					<p>Yield is a compounded interest calculator that shows you how your
					investments will grow over time.</p>
				</div>
			</div>
		`
	}

	static get styles() {
		return css`
			#modal {
				position: fixed;
				z-index: 9998;
				top: 0;
				left: 0;
				width: 100%;
				height: 100%;
				background-color: rgba(0, 0, 0, .5);
				display: grid;
				transition: opacity .3s ease;
				justify-items: center;
				align-items: center;
				grid-gap: 5rem;
			}
			#modalContainer {
				background-color: #EBECF0;
				border-radius: 6px;
				width: 80vw;
				padding: 1rem;
			}
			.open {
				background-color: green;
				visibility: visible;
			}
			.none {
				visibility: hidden;
			}
		`
	}
} 

customElements.define('info-modal', InfoModal)