/*
	Interest calculator functions
*/
function compoundedInterest(principal, rate, time, contribution=0, contributionFreq=1) {
	let compounded = principal * Math.pow((1 + decimalRate(rate)), time) - principal
	let contrib = (contributionFreq * contribution * Math.pow((1 + decimalRate(rate)), time) - contributionFreq * contribution) / decimalRate(rate)
	contrib = contrib - (contributionFreq * contribution * time)
	return compounded + contrib
}

function compoundedTotal(principal, rate, time, contribution=0, contributionFreq) {
	let ret = principal + compoundedInterest(principal, rate, time, contribution, contributionFreq) + (contributionFreq * contribution * time)
	console.log(ret)
	return ret
}

function interestIncreases(principal, rate, time, contribution=0, contributionFreq) {
	let interests = []
	for (var i=0; i <= time; i++) {
		let interest = compoundedTotal(principal, rate, i, contribution, contributionFreq)
		interests.push(interest)
	}
	return interests
}

function decimalRate(rate) {
	return rate / 100
}
export {compoundedInterest, compoundedTotal, interestIncreases}