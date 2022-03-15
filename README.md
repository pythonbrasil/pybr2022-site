# Congresso Nacional de Meio Ambiente de Ceará-Mirim 2022

http://meioambiente.cm.ifrn.edu.br


## Ambiente de desenvolvimento

Siga os passos seguintes para fazer a instalação das dependências e configuração
mínima do ambiente de desenvolvimento:

```
$ git clone https://github.com/IFRN-CM/2022-meioambiente-site
$ cd 2022-meioambiente-site
$ python -m venv .venv
$ source .venv/bin/activate
$ pip install -r requirements.txt
```

Para executar o projeto, digite o seguinte comando em seu terminal:

```
$ make html & make serve
```

Para ter acesso ao site em seu ambiente local, acesse: https://localhost:8081


## Créditos

Código-fonte original foi criado para o site da [Python Brasil 2022
(https://2022.pythonbrasil.org.br/), pela comunidade brasileira de usuários de
Python, em especial a comunidade do Amazonas.
