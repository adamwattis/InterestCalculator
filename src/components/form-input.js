import { LitElement, html, css } from 'lit-element'


class FormInput extends LitElement {

	constructor() {
		super(),
		this.title = '',
		this.name = '',
		this.type = '',
		this.value = '',
		this.prefix = '',
		this.suffix = ''
	}

	static get properties() {
		return {
			title: {type: String},
			name: {type: String},
			type: {type: String},
			value: {type: Number},
			prefix: {type: String},
			suffix: {type: String}
		}
	}

	static get styles() {
		return css`
			input {
				border: 1px solid rgba(255,255,255,0.40);
				box-shadow: inset -5px -5px 10px 0 #FAFBFF, inset 5px 5px 10px 0 #A6ABBD;
				background: #EBECF0;
				border-radius: 8px;
				width: 80%;
				font-size: 1rem;
				padding: 1rem;
				margin-bottom: 1rem;
				backface-visibility: hidden;
			}
			input:focus {
				outline-color: lightgray;
			}
			div {
				display: grid;
				grid-template-rows:;
			}
			.input_icon {
				position: relative;
			}
		`
	}

	render() {
		return html`
			<div>
				<label for="${this.name}">${this.title}</label>
				<div id="inputGroup">
					<span class="input_icon">${this.prefix}
					<span class="input_icon"><input @input="${this.handleInput}" type="${this.type}" name="${this.name}" value="${this.value}"/></span>
					${this.suffix}</span>
				 </div>
			</div>
		`
	}

	handleInput(event) {
		let newEvent = new CustomEvent('input', {
			detail: {
				name: event.target.name,
				value: event.target.value
			}
		})
		this.dispatchEvent(newEvent)
	}
}
customElements.define('form-input', FormInput)