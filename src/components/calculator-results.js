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
				<p>In ${this.years} years you will have $${this.endingMoney()} with a net gain of $${this.endingInterest()}.</p>
				<slot name="graph"></slot>
				<div id="payments">
					<div class="payment">Year : $${this.years}</div>
					${interestIncreases(this.beginning, this.rate, this.years).map((incr, index) => html`<div class="payment">Year ${index}: $${incr.toFixed(2)}</div>`)}
				</div>
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
				color: rgb(4,215,165);
			}

			.tile {
				overflow: scroll;
			}
			#payments {
				display: grid;
				grid-template-columns: 1fr 1fr;
				grid-gap: 6px;
			}
			.payment {
				border: 2px solid rgb(4,215,165);
				border-radius: 6px;
				padding: 0.5rem;
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