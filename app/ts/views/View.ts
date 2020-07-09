import { logarTempoDeExecucao } from '../helpers/decorators/logarTempoDeExecucao'
export abstract class View<T> {

    protected _elemento: JQuery;
    private _escapar: boolean;

    constructor(elemento: string, escapar: boolean = false) {
        this._elemento = $(elemento);
        this._escapar = escapar;
    }

    @logarTempoDeExecucao(true)
    update(model: T): void {

        let template = this.template(model);
        if (this._escapar)
            template = template.replace(/<script>[\s\S]*?<\/script>/, '');

        this._elemento.html(this.template(model));
    }

    abstract template(model: T): string;

}
