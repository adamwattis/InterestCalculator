import { LitElement, html, css } from 'lit-element'

import CalculatorForm from './calculator-form.js'
import CalculatorResults from './calculator-results.js'
import CalculatorGraph from './calculator-graph.js'
const logo = require('../assets/yield_logo.svg')

class AppContainer extends LitElement {

	constructor() {
		super()
		this.beginning = 100,
		this.rate = 7,
		this.years = 40
	}

	render() {
		return html`
			<div id="app">
				<div id="logoGroup">
					<img id="logo" src="${logo}"/>
					<h1 id="logoText">Yield</h1>
				</div>
				<calculator-form @input="${this.handleInput}"></calculator-form>
				<button @click="${this.handleClick}">Calculate</button>
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
			#app {
				margin: 1rem;
			}
			#logo {
				width: 100%;
			}
			#logoText {
				padding: 1rem;
				font-size: 1rem;
			}
			#logoGroup {
				display: grid;
				grid-template-columns: 4rem 1fr;
				align-items: center;
				margin-bottom: 2rem;
			}
			.flip_card {
				transform:rotatey(-180deg);
				transform-style: preserve-3d;
				transition: 0.5s;
				backface-visability: hidden;
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
	handleClick(event) {
		console.log("clicked!")
	}

	handleInput(event) {
		this[event.detail.name] = event.detail.value
	}
}
customElements.define('app-container', AppContainer)