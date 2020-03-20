import { LitElement, html, css } from 'lit-element'

class NavBar extends LitElement {

	constructor() {
		super()
		this.logo = ''
	}

	static get properties() {
		return {
			logo: {type: String}
		}
	}

	render() {
		return html`
			<div id='navbar'>
				<div id="logoGroup">
					<img id="logo" src="${this.logo}"/>
					<h1 id="logoText">Yield</h1>
				</div>
				<button @click="${this.handleClick}" id="info"><span>?</span></button>	
			</div>
		`
	}


	static get styles() {
		return css`
			#navbar {
				display: grid;
				grid-template-columns: 1fr 1fr;
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
				margin-bottom: 1rem;
			}

			#info {
				border-radius: 50%;
				width: 50px;
				height: 50px;
				font-size: 1.5rem;
				color: #FFFFFF;
				justify-self: end;
				align-self: center;
				display: block;
				border: 2px #FFFFFF solid;
				box-shadow: -10px -10px 20px 0 #FAFBFF, 10px 10px 20px 0 #A6ABBD;
				background: linear-gradient(0deg, rgba(0,118,255,1) 0%, rgba(0,174,255,1) 100%);
			}
			button:focus {
				outline-style: none;

			}
		`
	}

	handleClick(event) {
		let newEvent = new CustomEvent('click', {
			detail: {
				name: '',
				value: ''
			}
		})
		this.dispatchEvent(newEvent)
	}
}

customElements.define('nav-bar', NavBar)