System.register([], function (exports_1, context_1) {
    "use strict";
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __moduleName = context_1 && context_1.id;
    function meuDecoratorDeClasse() {
        return function (constructor) {
            const original = constructor;
            const novo = function (...args) {
                console.log("Criando uma instância com New: " + original.name);
                return new original(...args);
            };
            novo.prototype = original.prototype;
            return novo;
        };
    }
    exports_1("meuDecoratorDeClasse", meuDecoratorDeClasse);
    var NegociacaoController;
    return {
        setters: [],
        execute: function () {
            NegociacaoController = class NegociacaoController {
            };
            NegociacaoController = __decorate([
                meuDecoratorDeClasse()
            ], NegociacaoController);
            exports_1("NegociacaoController", NegociacaoController);
        }
    };
});
