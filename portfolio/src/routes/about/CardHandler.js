import Card from "./cardsdata.json";

export class CardHandler {
    constructor() {
        this.cards = [];
        for (const c of Card) this.cards.push(c);
        this.cards.sort(() => Math.random() - 0.5);
    }

    render(cardIndex, nbCards) {
        let maxIndex = Math.min(cardIndex, this.cards.length - nbCards);
        return this.cards.slice(maxIndex, maxIndex + nbCards);
    }
}