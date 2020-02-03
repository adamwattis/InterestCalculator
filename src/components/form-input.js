import { LitElement, html, css } from 'lit-element'


class FormInput extends LitElement {

	constructor() {
		super()
		this.title = '',
		this.name = '',
		this.value = ''
	}

	static get properties() {
		return {
			title: {type: String},
			name: {type: String},
			value: {type: Number}
		}
	}

	static get styles() {
		return css`
			input {
				background-color: #E1E5E8;
				border-radius: 8px;
				font-size: 1rem;
				padding: 0.5rem;
				border: 0;
				box-shadow: inset -3px -3px 10px 6px #ffff, inset 3px 3px 10px 2px #AEB4C1;
			}
			div {
				display: grid;
			}
		`
	}

	render() {
		return html`
			<div>
			<label for="${this.name}">${this.title}</label>
			<input type="number" name="${this.name}" value="${this.value}"/>
			</div>
		`
	}
}
customElements.define('form-input', FormInput)