import { LitElement, html, css } from 'lit-element'

import FormInput from './form-input.js'
import FrequencySelector from './frequency-selector.js'

class CalculatorForm extends LitElement {

	constructor() {
		super()
		this.beginning = '100',
		this.rate = '5',
		this.years = '10',
		this.contribution = '100',
		this.contributionFreq = '1'
	}

	render() {
		return html`
			<div class="tile">
				<form class="input_form">
					<form-input 
						title="Initial Investment" 
						type="number" 
						name="beginning" 
						value="${this.beginning}" 
						prefix="$"
						@input="${this.handleChange}"
						></form-input>
					<form-input 
						title="Rate of Interest" 
						type="number" 
						name="rate" 
						value="${this.rate}" 
						suffix="%"
						@input="${this.handleChange}"
						></form-input>
					<form-input 
						title="Calculation Period" 
						type="number" 
						name="years" 
						value="${this.years}" 
						suffix="years"
						@input="${this.handleChange}"
						></form-input>
					<div class="input_group">
						<form-input 
							title="Periodic Contribution" 
							type="number" 
							name="contribution" 
							value="${this.contribution}" 
							prefix="$"
							@input="${this.handleChange}"
							></form-input>
						<frequency-selector @input="${this.handleChange}" name="contributionFreq"></frequency-selector>
					</div>
					<frequency-selector label="Compounding frequency"></frequency-selector>
				</form>
			</div>
		`
	}

	static get properties() {
		return {
			beginning: {type: Number},
			rate: {type: Number},
			years: {type: Number},
			contribution: {type: Number},
			contributionFreq: {type: Number}
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
			.tile {
				overflow: scroll;
			}
			.input_form {
				display: grid;
				position:relative;
				height: 100%;
			}
			.input_group {
				display: grid;
				grid-template-columns: 1fr 1fr;
				grid-gap: 8px;
			}
			
			@media only screen and (max-width: 455px) {
				.input_group {
					grid-template-columns: 60% 1fr;
				}
			}
		`
	}

	handleChange(event) {
		let newEvent = new CustomEvent('input', {
			detail: {
				name: event.detail.name,
				value: event.detail.value
			}
		})
		this.dispatchEvent(newEvent)
		this[event.detail.name] = event.detail.value
	}
}

customElements.define('calculator-form', CalculatorForm)