class View {
    constructor(elemento) {
        this._elemento = document.querySelector(elemento);
    }
    update(model) {
        this._elemento.innerHTML = this.template(model);
    }
    template(model) {
        throw new Error('Você deve sobreescrever este método.');
    }
}
