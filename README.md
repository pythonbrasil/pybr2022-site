# Congresso Nacional de Meio Ambiente de Ceará-Mirim 2022

http://meioambiente.cm.ifrn.edu.br


## Ambiente de desenvolvimento

Primeiro instale a [virtualenv](https://gist.github.com/Geoyi/d9fab4f609e9f75941946be45000632b) em sua máquina. Logo em seguida, siga os passos seguintes para fazer a instalação das dependências:

```
$ git clone https://github.com/pythonbrasil/pybr2022-site
$ cd pybr2022-site
$ virtualenv pybr
$ . pybr/bin/activate
$ pip install -r requirements.txt
```

Para executar o projeto, digite o seguinte comando em seu terminal:

```
$ make html & make serve
```

Para ter acesso ao site em seu ambiente local, acesse: https://localhost:8081

## Executar usando docker

É necessário instalar o [docker](https://docs.docker.com/get-docker/) em seu computador. Após isso, siga os passos seguintes:

```
$ git clone https://github.com/pythonbrasil/pybr2022-site
$ cd pybr2022-site
$ docker-compose up -d
```

Para ter acesso ao site em seu ambiente local, acesse: https://localhost:8081


sudo lsof -i tcp:8081

## Créditos

Código-fonte original foi criado para o site da [Python Brasil 2022
(https://2022.pythonbrasil.org.br/), pela comunidade brasileira de usuários de
Python, em especial a comunidade do Amazonas.
