import { LitElement, html, css } from 'lit-element'

import FormInput from './form-input.js'

class CalculatorForm extends LitElement {

	constructor() {
		super()
		this.beginning = '100',
		this.rate = '5',
		this.years = '10',
		this.contribution = '0'
	}

	render() {
		return html`
			<div class="tile">
				<form class="input_form">
					<label for="beginning">Initial Investment</label>
					<span class="input_icon"> $ <input 
							type="number" 
							name="beginning" 
							value="${this.beginning}" 
							@input="${this.handleChange}"/></span>
					<label for="rate">Rate of Interest</label>
					<span><input 
							type="number" 
							name="rate" 
							value="${this.rate}" 
							@input="${this.handleChange}" 
							step="any"/> % </span>
					<label for="years">Calculation Period</label>
					<span><input 
							type="number" 
							name="years" 
							value="${this.years}" 
							@input="${this.handleChange}"/> years</span>
					<label for="contribution">Periodic Contribution</label>
					<span> $ <input 
							type="number" 
							name="contribution" 
							value="${this.contribution}" 
							@input="${this.handleChange}"/></span>
				</form>
			</div>
		`
	}

	static get properties() {
		return {
			beginning: {type: Number},
			rate: {type: Number},
			years: {type: Number},
			contribution: {type: Number}
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
				height: 100%;
				margin-bottom: 2rem;
			}
			.input_form {

			}
			input {
				background: #EBECF0;
				border: 1px solid rgba(255,255,255,0.40);
				box-shadow: inset -5px -5px 10px 0 #FAFBFF, inset 5px 5px 10px 0 #A6ABBD;
				border-radius: 6px;
				font-size: 1rem;
				padding: 0.5rem;
				margin-bottom: 1rem;
				backface-visibility: hidden;
				width: 85%;
			}
			input:focus {
				outline-color: lightgray;
			}
			.input_icon {
				padding: 0;
				position: relative;
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