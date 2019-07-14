import {MAX_MEMBERS} from "./config.js";


function generateRange(min, max, count) {
	let interval = (max - min)/(count - 1);
	return Array(count).fill(max).map((val, index) => val - index * interval);
}

let damageOutputMultArr = generateRange(0.6, 1, MAX_MEMBERS);
sc.PARTY_MAX_MEMBERS = MAX_MEMBERS;

sc.PartyModel.inject({
	getDmgFactor: function() {
		const trueDmgFactor = this.parent();
		const newDmgFactor = damageOutputMultArr[this.getPartySize()];
		
		if(trueDmgFactor > newDmgFactor) {
			return trueDmgFactor;
		}
		return newDmgFactor;
	}
});