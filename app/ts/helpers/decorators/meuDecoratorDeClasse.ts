// Em TypeScript também podemos criar decoradores de classes. Um decorador de classe 
// nos dá acesso ao constructor da classe que estamos decorando. Vejamos um exemplo:

export function meuDecoratorDeClasse() {

    return function(constructor: any) {

       // guarda o constructor original, pois iremos definir um novo
        const original = constructor;

       // cria um novo constructor. Como ele pode receber nenhum ou mais parâmetros, usamos ...args: any[]
        const novo: any = function (...args: any[]) {
            console.log("Criando uma instância com New: " + original.name); 
            // cria a instância da classe quando for chamado 
            return new original(...args);
        }

       // importante! O prototype do novo constructor deve ser o mesmo do original
        novo.prototype = original.prototype;

        // retorna o novo constructor
        return novo;
    }
}

// Nosso decorator exibirá apenas uma mensagem no console indicando que chamará o constructor da classe.
@meuDecoratorDeClasse()
export class NegociacaoController {
   // código omitido 
}