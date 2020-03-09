import { LitElement, html, css } from 'lit-element'

import { compoundedInterest, compoundedTotal, interestIncreases } from '../calculator.js'

class CalculatorResults extends LitElement {

	constructor() {
		super()
		this.beginning,
		this.rate,
		this.years
	}

	render() {
		return html`
			<div class="tile">
				<div class="results">
					<p>Beginning money: $${this.beginning}</p>
					<p>Ending money: $${this.endingMoney()}</p>
					<p>Interest earned: $${this.endingInterest()}</p>
				</div>
				<slot name="graph"></slot>
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
				margin-bottom: 2rem;
				height: 100%;
			}
			.results {
				display: grid;
				grid-template-columns: 1fr 1fr 1fr;
				justify-items: center;
			}
		`
	}

	endingInterest() {
		let interest = compoundedInterest(this.beginning, this.rate, this.years).toFixed(2)
		return interest
	}

	endingMoney() {
		let total = compoundedTotal(this.beginning, this.rate, this.years).toFixed(2)
		return total
	}
}

customElements.define('calculator-results', CalculatorResults)