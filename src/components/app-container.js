import { LitElement, html, css } from 'lit-element'

import CalculatorForm from './calculator-form.js'
import CalculatorResults from './calculator-results.js'
import CalculatorGraph from './calculator-graph.js'

class AppContainer extends LitElement {

	constructor() {
		super()
		this.beginning = 100,
		this.rate = 7,
		this.years = 40
	}

	render() {
		return html`
			<div>
				<h1>Interest Calculator</h1>
				<calculator-form @input="${this.handleInput}"></calculator-form>
				<calculator-results 
				beginning="${this.beginning}"
				rate="${this.rate}"
				years="${this.years}">
				</calculator-results>
				<calculator-graph
				beginning="${this.beginning}"
				rate="${this.rate}"
				years="${this.years}"></calculator-graph>
			</div>
		`
	}

	static get styles() {
		return css`
			:host {
				background-color: #EBECF0;
				font-family: 'M PLUS Rounded 1c', sans-serif;
				font-style: normal;
				font-weight: 200;
			}
		`
	}

	static get properties() {
		return {
			beginning: {type: String},
			rate: {type: String},
			years: {type: String}
		}
	}

	handleInput(event) {
		this[event.detail.name] = event.detail.value
	}
}
customElements.define('app-container', AppContainer)