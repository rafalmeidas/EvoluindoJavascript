System.register([], function (exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var View;
    return {
        setters: [],
        execute: function () {
            View = class View {
                constructor(elemento) {
                    this._elemento = $(elemento);
                }
                update(model) {
                    this._elemento.html(this.template(model));
                }
            };
            exports_1("View", View);
        }
    };
});
