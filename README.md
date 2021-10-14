# Python Brasil 2022


https://pythonbrasil.github.io/pybr2022-site/

https://2022.pythonbrasil.org.br/


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
