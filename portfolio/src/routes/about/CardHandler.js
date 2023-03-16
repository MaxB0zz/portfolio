import Card from './cardsdata.json';

export class CardHandler {
	constructor() {
		this.cards = [];
		for (const c of Card) this.cards.push(c);
		this.cards.sort(() => Math.random() - 0.5);
	}

	sleep(ms) {
		return new Promise((resolve) => setTimeout(resolve, ms));
	}
	render(cardIndex, nbCards) {
		let res = [];
		for (let i = 0; i < nbCards; i++) {
			res.push(this.cards[(cardIndex + i) % this.cards.length]);
		}
		return res;
	}
}
