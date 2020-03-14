import { LitElement, html, css } from 'lit-element'


class FormInput extends LitElement {

	constructor() {
		super(),
		this.title = '',
		this.name = '',
		this.value = '',
		this.prefix = '',
		this.suffix = ''
	}

	static get properties() {
		return {
			title: {type: String},
			name: {type: String},
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
				font-size: 1rem;
				padding: 0.5rem;
				margin-bottom: 1rem;
				backface-visibility: hidden;
			}
			input:focus {
				outline-color: lightgray;
			}
			div {
				display: grid;
				width: 100%;
			}
		`
	}

	render() {
		return html`
			<div>
			<label for="${this.name}">${this.title}</label>
			<input type="number" name="${this.name}" value="${this.value}"/>


			<label for="beginning">Initial Investment</label>
			<span class="input_icon"> $ <input 
					type="number" 
					name="beginning" 
					value="${this.beginning}" 
					@input="${this.handleChange}"/></span>


			</div>
		`
	}
}
customElements.define('form-input', FormInput)