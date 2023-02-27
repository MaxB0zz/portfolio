import Card from "./cardsdata.json";

export class CardHandler {
    constructor() {
        this.cards = [];
        for (const c of Card) this.cards.push(c);
        this.cards.sort(() => Math.random() - 0.5);
    }

    render(cardIndex, nbCards) {
        return this.cards.slice(cardIndex, cardIndex + nbCards);
    }
}