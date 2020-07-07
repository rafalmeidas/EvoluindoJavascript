import { Negociacao, Negociacoes } from '../models/index'
import { NegociacoesView, MensagemView } from '../views/index'

export class NegocaciacaoController {

    private _inputData: JQuery;
    private _inputQuantidade: JQuery;
    private _inputValor: JQuery;
    private _negociacoes = new Negociacoes();
    private _negociacoesView = new NegociacoesView('#negociacoesView');
    private _mensagemView = new MensagemView('#mensagemView');


    constructor() {
        this._inputData = $('#data');
        this._inputQuantidade = $('#quantidade');
        this._inputValor = $('#valor');

        //Atualiza views no index
        this._negociacoesView.update(this._negociacoes);
    }

    adiciona(event: Event) {
        event.preventDefault();

        //Validação de data utilizando Enum e metodo criados no fim desta classe.
        let data = new Date(this._inputData.val().replace(/-/g, ','));
        if(!this._ehDiaUtil(data)){
            this._mensagemView.update('Negociações só podem ser efetuadas em dias úteis.');
            return
        }

        const negociacao = new Negociacao(
            data,
            parseInt(this._inputQuantidade.val()),
            parseFloat(this._inputValor.val())
        );

        this._negociacoes.adiciona(negociacao);

        this._negociacoes.paraArray().forEach(n => {
            console.log(n.data);
            console.log(n.quantidade);
            console.log(n.valor);
            console.log(n.volume);
        });

        //Atualiza views no index
        this._negociacoesView.update(this._negociacoes);
        this._mensagemView.update('Negociação adicionada com sucesso!');
    }

    private _ehDiaUtil(data: Date){
        return data.getDay() != DiaDaSemana.Sabado && data.getDay() != DiaDaSemana.Domingo;
    }
}

enum DiaDaSemana {
    Domingo,
    Segunda,
    Terca,
    Quarta,
    Quinta,
    Sexta,
    Sabado
}