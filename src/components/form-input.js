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
			#inputGroup {
				display: flex;
			}
			input {
				border: 1px solid rgba(255,255,255,0.40);
				box-shadow: inset -5px -5px 10px 0 #FAFBFF, inset 5px 5px 10px 0 #A6ABBD;
				background: #EBECF0;
				border-radius: 8px;
				font-size: 1rem;
				padding: 0.8rem;
				min-width: 10%;
				margin-bottom: 1rem;
				backface-visibility: hidden;
				flex: 1;
			}
			input:focus {
				outline-color: lightgray;
			}
			.input_icon {
				padding: 1rem;
			}
		`
	}

	render() {
		return html`
			<div>
				<label for="${this.name}">${this.title}</label>
				<div id="inputGroup">
					<span class="${this.prefix ? 'input_icon' : ''}">${this.prefix}</span>
					<input @input="${this.handleInput}" type="${this.type}" name="${this.name}" value="${this.value}"/>
					<span class="${this.suffix ? 'input_icon' : ''}">${this.suffix}</span>
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