# Scraper Mercado Livre

Este é um projeto simples de web scraping utilizando o Puppeteer para extrair informações de produtos da página inicial do site Mercado Livre. Desenvolvido para ser entregue na aula de Programação de Sítios de Internet.

## Pré-requisitos

- [NodeJS](https://nodejs.org/en/) instalado na máquina
- [Puppeteer](https://pptr.dev/) instalado como dependência

## Instalação

1. Clone o repositório:

```bash
git clone https://github.com/leonardosf98/scrapper
cd scrapper
```

2. Instale as dependências:

```bash
npm i
```

## Uso

Para rodar o scrapper, execute o seguinte comando no terminal:

```bash
node main.js
```

O script visitará a página inicial do Mercado Livre, fará o scrapping dos produtos da página inicial, exibindo os nomes, preços, e links no console. Antes das informações aparecerem no console, abrirá uma janea em branco, esse é a simulação de um navegador, necessária para que o código javascript da página insira o HTML necessário para buscarmos as informações.

## Tecnologias utilizadas

- NodeJS: Ambiente de execução para Javascript no servidor
- Puppetter: Biblioteca para controle de navegadores e automação de ações em páginas web

## Funcionamento

O script realiza as seguintes ações:

1. Inicializa um navegador headless usando o Puppeteer.
2. Navega até a página inicial do Mercado Livre.
3. Aguarda que os produtos carreguem.
4. Extrai o nome, preço e link de cada produto exibido.
5. Exibe os dados no console.

## Observações

- O código está configurado para rodar em modo `headless`, o que significa que o navegador não será visível enquanto o scraper estiver sendo executado.
- Dependendo da estrutura da página, o seletor CSS `.poly-card` pode mudar. Caso o script falhe, verifique e ajuste os seletores.

## Autor

- [Leonardo Souza](https://github.com/leonardosf98)
