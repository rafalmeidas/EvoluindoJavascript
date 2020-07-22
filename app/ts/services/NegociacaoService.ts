// app/ts/services/NegociacaoService.ts

import { NegociacaoParcial, Negociacao } from '../models/index';

export class NegociacaoService {

    obterNegociacoes(handler: HandlerFunction): Promise<Negociacao[]> {

        return fetch('http://localhost:8080/dados')
            .then(res => handler(res))
            .then(res => res.json())
            .then((dados: NegociacaoParcial[]) => 
                dados.map(dado => new Negociacao(new Date(), dado.vezes, dado.montante))
            )
            .catch(err => {
                console.log(err);
                throw new Error('Não foi possível importar as negociações!');
                return []
            });

    }
}

// Faz com que somente aceite uma função que receba uma Response e devolva uma response, 
// n permitindo que o programador passe outras unções que causem erro na execução do sistema
export interface HandlerFunction {
    (res: Response) : Response
}