import { NegocaciacaoController } from './controllers/NegociacaoController'
const controller = new NegocaciacaoController();

$('.form').submit(controller.adiciona.bind(controller));
$('#importa-dados').click(controller.importarDados.bind(controller));

interface MeuCallback {

    (mensagem: string): void;
}


// function executaAssincrono(cb: MeuCallback) {

//     setTimeout(() => cb('terminou'), 0);
// }

// let callback1: MeuCallback = resultado => alert(resultado);
// let callback2: MeuCallback = resultado => alert(`**${resultado}**`);

// executaAssincrono(callback1);
// //executaAssincrono(callback2);