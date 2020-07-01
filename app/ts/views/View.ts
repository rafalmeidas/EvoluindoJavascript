class View<T> {
    protected _elemento: Element;

    constructor(elemento: string) {
        this._elemento = document.querySelector(elemento);
    }

    update(model: T): void {
        this._elemento.innerHTML = this.template(model);
    }

    template(model: T): string {
        throw new Error('Você deve sobreescrever este método.')
    }
}