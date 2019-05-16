document.body.addEventListener('modsLoaded', function() {
	function generateRange(min, max, count) {
		let interval = (max - min)/(count - 1);
		return Array(count).fill(max).map((val, index) => val - index * interval);
	}
	const MAX_MEMBERS = 5;
	
	let damageOutputMultArr = generateRange(0.6, 1, MAX_MEMBERS);
	let getDmgFactor = sc.party.getDmgFactor.bind(sc.party);
	
	sc.party.getDmgFactor = function() {
		
		const trueDmgFactor = getDmgFactor();
		const newDmgFactor = damageOutputMultArr[sc.party.getPartySize()];
		
		if(trueDmgFactor > newDmgFactor) {
			return trueDmgFactor;
		}
		return newDmgFactor;
	};
	
	sc.PARTY_MAX_MEMBERS = damageOutputMultArr.length;
});
