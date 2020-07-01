abstract class View<T> {
    protected _elemento: JQuery;

    constructor(elemento: string) {
        this._elemento = $(elemento);
    }

    update(model: T): void {
        this._elemento.html(this.template(model));
    }

    abstract template(model: T): string;

}