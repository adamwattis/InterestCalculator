/*
	Interest calculator functions
*/
function compoundedInterest(principal, rate, time, contribution=0) {
	let compounded = principal * Math.pow((1 + decimalRate(rate)), time) - principal
	let contrib = (12 * contribution * Math.pow((1 + decimalRate(rate)), time) - 12 * contribution) / decimalRate(rate)
	contrib = contrib - (12 * contribution * time)
	return compounded + contrib
}

function compoundedTotal(principal, rate, time, contribution=0) {
	return principal + compoundedInterest(principal, rate, time, contribution) + (12 * contribution * time)
}

function interestIncreases(principal, rate, time, contribution=0) {
	let interests = []
	for (var i=0; i <= time; i++) {
		let interest = compoundedTotal(principal, rate, i, contribution)
		interests.push(interest)
	}
	return interests
}

function decimalRate(rate) {
	return rate / 100
}
export {compoundedInterest, compoundedTotal, interestIncreases}