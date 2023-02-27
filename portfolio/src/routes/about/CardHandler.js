import Card from "./cardsdata.json";

export class CardHandler {
    constructor() {
        this.cards = [];
        for (let i = 0; i < Card.length; i++) {
            this.cards.push(Card[i]);
        }
        this.cards.sort(() => Math.random() - 0.5);
    }

    getNbcards() {
        return this.cards.length;
    }

    render(cardIndex, nbCards) {
        console.log(cardIndex)
        return this.cards.slice(cardIndex, cardIndex + nbCards);
    }
}