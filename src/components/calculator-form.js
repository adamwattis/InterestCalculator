import { LitElement, html, css } from 'lit-element'

import FormInput from './form-input.js'

class CalculatorForm extends LitElement {

	constructor() {
		super()
		this.beginning = '',
		this.rate = '',
		this.years = ''
	}

	render() {
		return html`
			<div class="tile">
				<h2>Inputs</h2>
				<form>
					<label for="beginning">Beginning value</label>
					<span>$<input 
							type="number" 
							name="beginning" 
							value="${this.beginning}" 
							@input="${this.handleChange}"/></span>
					<label for="rate">Interest rate</label>
					<span><input 
							type="number" 
							name="rate" 
							value="${this.rate}" 
							@input="${this.handleChange}" 
							accuracy="2"/>%</span>
					<label for="years">Years to invest</label>
					<span><input 
							type="number" 
							name="years" 
							value="${this.years}" 
							@input="${this.handleChange}"/>years</span>
				</form>
			</div>
		`
	}

	static get properties() {
		return {
			beginning: {type: Number},
			rate: {type: Number},
			years: {type: Number}
		}
	}

	static get styles() {
		return css`
			.tile {
				background: #EBECF0;
				border: 1px solid rgba(255,255,255,0.40);
				box-shadow: -5px -5px 10px 0 #FAFBFF, 5px 5px 10px 0 #A6ABBD;
				border-radius: 6px;
				padding: 20px;
				margin: 8px;
				margin-bottom: 2rem;
			}
			input {
				background: #EBECF0;
				border: 1px solid rgba(255,255,255,0.40);
				box-shadow: inset -5px -5px 10px 0 #FAFBFF, inset 5px 5px 10px 0 #A6ABBD;
				border-radius: 6px;
				font-size: 1rem;
				padding: 0.5rem;
			}
			input:focus {
				outline-color: lightgray;
			}
			form {
				display: grid;
			}
		`
	}

	handleChange(event) {
		let newEvent = new CustomEvent('input', {
			detail: {
				name: event.target.name,
				value: event.target.value
			}
		})
		this.dispatchEvent(newEvent)
		this[event.target.name] = event.target.value
	}
}

customElements.define('calculator-form', CalculatorForm)