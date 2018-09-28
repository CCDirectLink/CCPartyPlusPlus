document.body.addEventListener('modsLoaded', function() {
	// damageOutput multiplier
	let damageOutputMultArr = [1,0.8, 0.6, 0.6,0.4, 0.4, 0.2];
	let getPartyDamageMultiplier = cc.sc.party.rawFunctionNames.getPartyDamageMultiplier;
	cc.sc.party[getPartyDamageMultiplier] = function() {
		return damageOutputMultArr[cc.sc.party.getPartyCount()];
	}
	// Can add up to 100 party members now
	sc[cc.sc.party.varNames.MAX_PARTY_MEMBERS] = 100
});