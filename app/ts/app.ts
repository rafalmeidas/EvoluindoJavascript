const controller = new NegocaciacaoController();

$('.form').submit(controller.adiciona.bind(controller));
// document.querySelector('.form').addEventListener('submit', controller.adiciona.bind(controller));