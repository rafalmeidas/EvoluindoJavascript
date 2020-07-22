import { Negociacao, Negociacoes, NegociacaoParcial } from '../models/index';
import { NegociacoesView, MensagemView } from '../views/index';
import { logarTempoDeExecucao, domInject, meuDecoratorDeClasse, throttle } from '../helpers/decorators/index';
import { NegociacaoService } from '../services/index';
import { imprime } from '../helpers/Utils';


@meuDecoratorDeClasse()
export class NegocaciacaoController {

    @domInject('#data')
    private _inputData: JQuery;

    @domInject('#quantidade')
    private _inputQuantidade: JQuery;

    @domInject('#valor')
    private _inputValor: JQuery;

    private _negociacoes = new Negociacoes();
    private _negociacoesView = new NegociacoesView('#negociacoesView');
    private _mensagemView = new MensagemView('#mensagemView');

    private _service = new NegociacaoService();


    constructor() {

        //Atualiza views no index
        this._negociacoesView.update(this._negociacoes);
    }


    @throttle()
    adiciona() {

        //Validação de data utilizando Enum e metodo criados no fim desta classe.
        let data = new Date(this._inputData.val().replace(/-/g, ','));
        if (!this._ehDiaUtil(data)) {
            this._mensagemView.update('Negociações só podem ser efetuadas em dias úteis.');
            return
        }

        const negociacao = new Negociacao(
            data,
            parseInt(this._inputQuantidade.val()),
            parseFloat(this._inputValor.val())
        );

        this._negociacoes.adiciona(negociacao);

        imprime(negociacao, this._negociacoes);

        //Atualiza views no index
        this._negociacoesView.update(this._negociacoes);
        this._mensagemView.update('Negociação adicionada com sucesso!');
    }

    private _ehDiaUtil(data: Date) {
        return data.getDay() != DiaDaSemana.Sabado && data.getDay() != DiaDaSemana.Domingo;
    }

    @throttle()
    async importarDados() {

        const negociacoesParaImportar = await this._service.obterNegociacoes((res: Response) => {
            if (res.ok) {
                return res;
            } else {
                throw new Error(res.statusText);
            }
        });

        const negociacoesJaImportadas = this._negociacoes.paraArray();

        negociacoesParaImportar
            .filter(negociacao =>
                !negociacoesJaImportadas.some(jaImportada =>
                    negociacao.ehIgual(jaImportada)))
            .forEach(negociacao =>
                this._negociacoes.adiciona(negociacao));

        this._negociacoesView.update(this._negociacoes);
    };
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