import Aluno from '../models/Aluno';

class HomeController {
  async index(req, res) {
    const novoAluno = await Aluno.create({
      nome: 'Pedro',
      sobrenome: 'neto',
      email: 'pn54781@gmail.com',
      idade: 19,
      peso: 80,
      altura: 1.80,
    });
    res.json(novoAluno);
  }
}

export default new HomeController();
