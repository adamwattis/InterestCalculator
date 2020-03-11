import { LitElement, html, css } from 'lit-element'

import CalculatorForm from './calculator-form.js'
import CalculatorResults from './calculator-results.js'
import CalculatorGraph from './calculator-graph.js'
import MainButton from './main-button.js'
import CardFlipper from './card-flipper.js'
const logo = require('../assets/yield_logo.svg')

class AppContainer extends LitElement {

	constructor() {
		super()
		this.beginning = 100,
		this.rate = 5,
		this.years = 10,
		this.contribution = 0,
		this.flip = false
	}

	render() {
		return html`
			<div id="app">
				<div id="logoGroup">
					<img id="logo" src="${logo}"/>
					<h1 id="logoText">Yield</h1>
				</div>
				<card-flipper state="${this.flip ? 'flip' : 'none'}">
					<calculator-form slot="front" @input="${this.handleInput}"></calculator-form>
					<calculator-results 
						slot="back"
						beginning="${this.beginning}"
						rate="${this.rate}"
						years="${this.years}">
						<calculator-graph
							slot="graph"
							beginning="${this.beginning}"
							rate="${this.rate}"
							years="${this.years}"></calculator-graph>
					</calculator-results>
				</card-flipper>
				<main-button @click="${this.handleClick}" title="${this.flip ? 'Reset' : 'Calculate'}"></main-button>
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
			#app {
				margin: 1rem;
			}
			#logo {
				width: 100%;
			}
			#logoText {
				padding: 1rem;
				font-size: 1.5rem;
			}
			#logoGroup {
				display: grid;
				grid-template-columns: 4rem 1fr;
				align-items: center;
				margin-bottom: 2rem;
			}
		`
	}

	static get properties() {
		return {
			beginning: {type: String},
			rate: {type: String},
			years: {type: String},
			contribution: {type: String},
			flip: {type: Boolean}
		}
	}
	handleClick(event) {
		this.flip = this.flip ? false : true
	}

	handleInput(event) {
		this[event.detail.name] = event.detail.value
	}
}
customElements.define('app-container', AppContainer)