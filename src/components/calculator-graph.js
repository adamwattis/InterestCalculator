import { LitElement, html, css } from 'lit-element'

import { interestIncreases, decimalRate } from '../calculator.js'


class CalculatorGraph extends LitElement {

	constructor() {
		super()
		this.beginning,
		this.rate,
		this.years,
		this.contribution
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
			#graph {
				box-sizing: border-box;
				width: 100%;
				height: 30vh;
				display: grid;
				grid-gap: 2px;
				grid-auto-flow: column;
				align-items: end;
				padding: 0.5rem;
				border-left: 2px solid rgb(4,215,165);
				border-bottom: 2px solid rgb(4,215,165);
				margin-bottom: 1rem;
			}
			.bar {
				background: linear-gradient(0deg, rgba(4,215,165,1) 0%, rgba(10,237,209,1) 100%);
				border-radius: 12px;
			}
			.bar:hover, .bar:active {
				padding: 1rem;
			}
			
			.bar:hover > .bar_price, .bar:active > .bar_price {
				display: block;
				padding: 0;
				margin: 0;
				transform: rotate(-90deg);
			}
			.bar_price {
				display: none;
				color: #FFFF;
				font-weight: bold;
			}
			
		`
	}

	render() {
		return html`
			<div id="graph">
				${this.incrementPairs().map((pair) => html`<div class="bar" style="height:${pair[1]}%;"><p class="bar_price">$${pair[0].toFixed(0)}</p></div>`)}
			</div>
		`
	}
	increments() {
		let increases = interestIncreases(this.beginning, this.rate, this.years, this.contribution)
		return increases
	}
	scaledIncrements() {
		let increments = this.increments()
		let maxRange = increments[increments.length-1]
		let scaled = increments.map((incr => {
			return ((incr * 100) / maxRange)
		}))
		return scaled
	}
	incrementPairs() {
		let incr = this.increments()
		let scale = this.scaledIncrements()
		return incr.map((inc, i) => {
			return [inc, scale[i]]
		})
	}
}

customElements.define('calculator-graph', CalculatorGraph)