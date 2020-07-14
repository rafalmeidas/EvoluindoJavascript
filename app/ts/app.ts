import { NegocaciacaoController } from './controllers/NegociacaoController'
const controller = new NegocaciacaoController();

$('.form').submit(controller.adiciona.bind(controller));
$('#importa-dados').click(controller.importarDados.bind(controller));
