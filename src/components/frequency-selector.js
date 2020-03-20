import { LitElement, html, css } from 'lit-element'

class FrequencySelector extends LitElement {
	constructor() {
		super()
		this.label,
		this.name
	}

	static get properties() {
		return {
			label: {type: String},
			name: {type: String}
		}
	}

	render() {
		return html`
			<div>
				<label>${this.label}</>
				<select name="${this.name}" @change="${this.handleChange}">
					<option value="1">Yearly</option>
					<option value="12">Monthly</option>
				</select>

			</div>
		`
	}

	static get styles() {
		return css`
			:host {
				align-self: center;
			}
			div {
				display: grid;
			}
			select {
				display: block;
					font-size: 1rem;
					padding: 0.7rem;
					width: 100%;
					max-width: 100%;
					font-family: 'M PLUS Rounded 1c', sans-serif;
					color: #00AEFF;
					text-indent: 45%;
					box-sizing: border-box;
					margin-top: 8px;
					background: #EBECF0;
					border: none;
					box-shadow: -10px -10px 20px 0 #FAFBFF, 10px 10px 20px 0 #A6ABBD;
					border-radius: 6px;
					-moz-appearance: none;
					-webkit-appearance: none;
					appearance: none;
					background-image: url('data:image/svg+xml;charset=US-ASCII,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20width%3D%22292.4%22%20height%3D%22292.4%22%3E%3Cpath%20fill%3D%22%23007CB2%22%20d%3D%22M287%2069.4a17.6%2017.6%200%200%200-13-5.4H18.4c-5%200-9.3%201.8-12.9%205.4A17.6%2017.6%200%200%200%200%2082.2c0%205%201.8%209.3%205.4%2012.9l128%20127.9c3.6%203.6%207.8%205.4%2012.8%205.4s9.2-1.8%2012.8-5.4L287%2095c3.5-3.5%205.4-7.8%205.4-12.8%200-5-1.9-9.2-5.5-12.8z%22%2F%3E%3C%2Fsvg%3E');
					background-repeat: no-repeat, repeat;
					background-position: right .7em top 50%, 0 0;
					background-size: .65em auto, 100%;
			}
			@media only screen and (max-width: 455px) {
				select {
					text-indent: 0;
				}
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
	}

}

customElements.define('frequency-selector', FrequencySelector)