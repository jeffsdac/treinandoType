export class Negociacoes {
    constructor() {
        this.negociacoes = [];
    }
    add(negociacoa) {
        this.negociacoes.push(negociacoa);
    }
    lista() {
        return this.negociacoes;
    }
}
