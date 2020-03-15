import { LitElement, html, css } from 'lit-element'

import NavBar from './nav-bar.js'
import CalculatorForm from './calculator-form.js'
import CalculatorResults from './calculator-results.js'
import CalculatorGraph from './calculator-graph.js'
import MainButton from './main-button.js'
import CardFlipper from './card-flipper.js'
import InfoModal from './info-modal.js'
const logo = require('../assets/yield_logo.svg')

class AppContainer extends LitElement {

	constructor() {
		super()
		this.beginning = 100,
		this.rate = 5,
		this.years = 10,
		this.contribution = 0,
		this.flip = false,
		this.infoModal = false
	}

	render() {
		return html`
			<div id="app">
				<nav-bar logo="${logo}" @click="${this.handleInfoButton}"></nav-bar>
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
				<info-modal open="${this.infoModal ? 'open' : 'none'}"></info-modal>
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
				display: grid;
			}
			#app {
				margin-right: 1rem;
				margin-left: 1rem;
				margin-top: 0;
				margin-bottom: 0;
				padding-top: 0;
				padding-bottom: 0;
				display: grid;
				grid-template-rows: 15vh  auto;
			}
			@media only screen and (min-width: 1024px) {
				#app {
					width: 70vw;
					justify-self: center;
				}
			}
		`
	}

	static get properties() {
		return {
			beginning: {type: String},
			rate: {type: String},
			years: {type: String},
			contribution: {type: String},
			flip: {type: Boolean},
			infoModal: {type: String}
		}
	}
	handleInfoButton(event) {
		this.infoModal = this.infoModal ? false : true
		setTimeout(() => {this.infoModal = false}, 3000)
	}
	handleClick(event) {
		this.flip = this.flip ? false : true
	}

	handleInput(event) {
		this[event.detail.name] = event.detail.value
	}
}
customElements.define('app-container', AppContainer)