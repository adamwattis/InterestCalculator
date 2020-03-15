import { LitElement, html, css } from 'lit-element'

class CardFlipper extends LitElement {

	constructor() {
		super()
		this.state = 'none'
	}

	static get styles() {
		return css`
			.card {
			  width: 100%;
			  perspective: 600px;
			  margin-bottom: 5rem;

			}

			.content {
			  height: 60vh;
			  transition: transform 0.5s;
			  transform-style: preserve-3d;
			}

			.flip .content {
			  transform: rotateY( 180deg ) ;
			  -webkit-transform: rotateY(180deg);
			  transition: transform 0.5s;
			}

			.front,
			.back {
			  position: absolute;
			  height: 100%;
			  width: 100%;
			  backface-visibility: hidden;
			  -webkit-backface-visibility: hidden;
			}

			.back {
			  transform: rotateY( 180deg );
			  -webkit-transform: rotateY(180deg)
			}
		`
	}


	static get properties() {
		return {
			state: {type: String}
		}
	}

	// render() {
	// 	return html`
	// 		<div id="${this.state} card">
	// 			<div id="content">
	// 				<div id="front">
	// 					<slot name="front"></slot>
	// 				</div>
	// 				<div id="back">
	// 					<slot name="back"></slot>
	// 				</div>
	// 			</div>
	// 		</div>
	// 	`
	// }
	render() {
		return html`
			<div class="card ${this.state == 'flip' ? 'flip' : 'none'}">
			  <div class="content">
			    <div class="front">
			      <slot name="front"></slot>
			    </div>
			    <div class="back">
			      <slot name="back"></slot>
			    </div>
			  </div>
			</div>
		`
	}
}

customElements.define('card-flipper', CardFlipper)