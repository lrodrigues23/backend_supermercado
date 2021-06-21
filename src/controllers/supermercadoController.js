// Define a utilização do model cliente e a dependência http-status
const Supermercado = require("../models/cliente");
const status = require("http-status");

// Cria o método Insert, obtendo os dados da request
exports.Insert = (req, res, next) => {
  const nomeProduto = req.body.nomeProduto;
  const descricaoProduto = req.body.descricaoProduto;
  const precoProduto = req.body.precoProduto;
  const quantidadeEstoque = req.body.quantidadeEstoque;

  Supermercado.create({
    nomeProduto: nomeProduto,
    descricaoProduto: descricaoProduto,
    precoProduto: precoProduto,
    quantidadeEstoque: quantidadeEstoque,
  })
    .then((produto) => {
      if (produto) {
        res.status(status.OK).send(produto);
      } else {
        res.status(status.NOT_FOUND).send();
      }
    })
    .catch((error) => next(error));
};

exports.SelectAll = (req, res, next) => {
  Supermercado.findAll()
    .then((produto) => {
      if (produto) {
        res.status(status.OK).send(produto);
      }
    })
    .catch((error) => next(error));
};

exports.SelectDetail = (req, res, next) => {
  const id = req.params.id;

  Supermercado.findByPk(id)
    .then((produto) => {
      if (produto) {
        res.status(status.OK).send(produto);
      } else {
        res.status(status.NOT_FOUND).send();
      }
    })
    .catch((error) => next(error));
};

exports.Update = (req, res, next) => {
  const id = req.params.id;
  const nomeProduto = req.body.nomeProduto;
  const descricaoProduto = req.body.descricaoProduto;
  const precoProduto = req.body.precoProduto;
  const quantidadeEstoque = req.body.quantidadeEstoque;

  Supermercado.findByPk(id)
    .then((produto) => {
      if (produto) {
        produto
          .update(
            {
              nomeProduto: nomeProduto,
              descricaoProduto: descricaoProduto,
              precoProduto: precoProduto,
              quantidadeEstoque: quantidadeEstoque,
            },
            {
              where: { id: id },
            }
          )
          .then(() => {
            res.status(status.OK).send();
          })
          .catch((error) => next(error));
      } else {
        res.status(status.NOT_FOUND).send();
      }
    })
    .catch((error) => next(error));
};

exports.Delete = (req, res, next) => {
  const id = req.params.id;

  Supermercado.findByPk(id)
    .then((produto) => {
      if (produto) {
        produto
          .destroy({
            where: { id: id },
          })
          .then(() => {
            res.status(status.OK).send();
          })
          .catch((error) => next(error));
      } else {
        res.status(status.NOT_FOUND).send();
      }
    })
    .catch((error) => next(error));
};
