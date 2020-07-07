System.register([], function (exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var View;
    return {
        setters: [],
        execute: function () {
            View = class View {
                constructor(elemento, escapar = false) {
                    this._elemento = $(elemento);
                    this._escapar = escapar;
                }
                update(model) {
                    let template = this.template(model);
                    if (this._escapar)
                        template = template.replace(/<script>[\s\S]*?<\/script>/, '');
                    this._elemento.html(this.template(model));
                }
            };
            exports_1("View", View);
        }
    };
});
