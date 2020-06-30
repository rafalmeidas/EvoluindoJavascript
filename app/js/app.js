const controller = new NegocaciacaoController();
document.querySelector('.form').addEventListener('submit', controller.adiciona.bind(controller));
