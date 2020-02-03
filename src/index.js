import AppContainer from './components/app-container.js'

function render(element, app) {
	window.onload = () => {
		document.getElementById(element).appendChild(app)
	}
}

const app = customElements.get('app-container')
const appElement = new app()

render('app', appElement)