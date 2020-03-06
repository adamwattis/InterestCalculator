/*
	Interest calculator functions
*/
function compoundedInterest(principal, rate, time) {
	return principal * Math.pow((1 + rate), time) - principal
}

function compoundedTotal(principal, rate, time) {
	return principal + compoundedInterest(principal, rate, time)
}

function interestIncreases(principal, rate, time) {
	let interests = []
	for (var i=0; i <= time; i++) {
		let interest = compoundedTotal(principal, rate, i)
		interests.push(interest)
	}
	return interests
}
export {compoundedInterest, compoundedTotal, interestIncreases}