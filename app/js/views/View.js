class View {
    constructor(elemento) {
        this._elemento = $(elemento);
    }
    update(model) {
        this._elemento.html(this.template(model));
    }
}
