/*
	Interest calculator functions
*/
function compoundedInterest(principal, rate, time) {
	let dRate = decimalRate(rate)
	return principal * Math.pow((1 + dRate), time) - principal
}

function compoundedTotal(principal, rate, time) {
	let dRate = decimalRate(rate)
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

function decimalRate(rate) {
	return rate / 100
}
export {compoundedInterest, compoundedTotal, interestIncreases}