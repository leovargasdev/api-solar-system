<h1 align="center">
  API Solar System
</h1>

## :rocket: Tecnologias

-  [NodeJS](https://nodejs.org/en/)
-  [Typescript](https://www.typescriptlang.org/)
-  [Express](https://expressjs.com/pt-br/)
-  [Heroku](https://www.heroku.com/)

## 💻 Projeto

Repositório contendo API REST com os dados do sistema solar.

### Rotas

1.  **`/planets`**: Listagem de todos os planetas.

2.  **`/planet/:id`**: Retorna o planeta do respectivo id.

3.  **`/find/:string`**: É feito uma comparação em cada tag de cada item, testando se esta `string` consta no array de tags, retornando os objetos que obtiveram sucesso.

### Objeto Planeta

| Campo | Valor |
|-------|--------|
| id                        | Identificador único do objeto |
| name                      | Nome do Planeta  |
| resume                    | Breve resumo do planeta |
| introduction              | Principais características do planeta, suas curiosidades, fatos históricos |
| images.svg                | Retorna uma imagem do planeta em `.svg` |
| images.png                | Retorna uma imagem do planeta em `.png` |
| searchTags                | Array de strings usado nas buscas. |
| features.orbitalPeriod    | O período orbital é o tempo que leva um planeta a fazer uma órbita completa em torno do sol. Esse campo é separado em dois value: [Número de dias, Número de anos].  |
| features.orbitalSpeed     | É velocidade orbital média de um planeta, essa medida está na escala km/s. |
| features.rotationDuration | Refere-se ao tempo gasto para uma rotação completa em si. |
| features.radius           | Raio do planeta na escala de quilômetros. |
| features.orbitalSpeed     | Diâmetro do planeta na escala de quilômetros. |
| features.sunDistance      | Distância do planeta até o Sol na escala de quilômetros. |
| features.satellites       | Número de satélites naturais que orbitam em torno do planeta. |
| features.temperature      | Temperatura média do planeta na escala de °C(graus celsius) |
| geography                 | Informações geográficas do planeta, como tipo de terreno, sua composição |


## 📥 Instalação e execução

```bash
# Clonando o repositório e acessando o diretório
$ git clone https://github.com/LeeonardoVargas/api-solar-system && cd api-solar-system

# Instalando as depedências
$ yarn install

# Executanto aplicação
$ yarn start
```
