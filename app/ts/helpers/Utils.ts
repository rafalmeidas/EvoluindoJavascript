import { Imprimivel } from "../models/Imprimivel";

export function imprime (...negociacoes: Imprimivel[]){
    negociacoes.forEach(negociacao =>  negociacao.paraTexto());
}