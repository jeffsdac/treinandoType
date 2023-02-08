import { Negociacao } from "./negociacao.js";

export class Negociacoes{
    private negociacoes: Negociacao[] = [];

    add (negociacoa: Negociacao) : void{
        this.negociacoes.push(negociacoa);
    }

    lista (): readonly Negociacao[]{
        return this.negociacoes;
    }
}