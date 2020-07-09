export function logarTempoDeExecucao(emSegundos = false) {

    return function (target: any, propertyKey: string, descriptor: PropertyDescriptor) {
        const metodoOriginal = descriptor.value;

        descriptor.value = function (...args: any[]) {

            let unidade = 'milisegundos';
            let divisor = 1;
            if (emSegundos)
                divisor = 1000;
                unidade = 'segundos';

            console.log('-----------------------');
            console.log(`Parâmetros do método ${propertyKey}: ${JSON.stringify(args)}`);//retorna os parametros do método
            const t1 = performance.now(); //Testa performance do método no inicio da execução

            const retorno = metodoOriginal.apply(this, args); // executa o método original
            
            console.log(`Retorno do método: ${JSON.stringify(retorno)}`);
            const t2 = performance.now();
            console.log(`${propertyKey} demorou ${(t2 - t1) / divisor} ${unidade}`);
            console.log('-----------------------');

            return retorno;
        }

        return descriptor;
    }
}