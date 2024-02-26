<div align="center">

<img src="docs/assets/logo.png"> 

<br />

  # Desafio Front-End VFlows

</div>

<div align="center">

[Sobre o desafio](#desafio) | [Requisitos Tecnológicos](#tech-requirements) | [Requisitos do Formulário](form-requirements) | [Layout](#layout) | [Organização das Pastas](#folders) | [Autor](#autor)

</br>

</div>

##  🚀 Sobre o desafio <a name="desafio"></a>
O objetivo deste desafio é avaliar seus conhecimentos técnicos, como lida com os requisitos e capacidade de pensar em soluções.

Durante esse desafio vamos construir um formulário para cadastro de fornecedores e produtos.

O desenvolvimento do formulário deve seguir o layout existente na guia: [Layout](#layout)

</br>

## ⚒️ Requisitos Tecnológicos<a name="tech-requirements"></a>

- HTML: na versão 5;

- JAVASCRIPT: Dar preferência a ao ECMA-6 no desenvolvimento do código;

- BOOTSTRAP:
    - [CSS](https://fluig.totvs.com/style-guide/css/fluig-style-guide.min.css)
    - [JQUERY-3.5.1](https://jquery.com/download/)


- Outras Considerações:

    - Usar documentação de recursos e estilos conforme [este link](https://style.fluig.com/)
    - Não deverão ser utilizados outros recursos tecnológicos para desenvolvimento
 
<br />

## 📋 Requisitos do Formulário<a name="form-requirements"></a>

- Razão Social: obrigatório
- Nome Fantasia: obrigatório
- CNPJ: obrigatório
- Inscrição Estadual: opcional
- Inscrição Municipal: opcional
- Endereço: obrigatório 
    - Obs.: deve ser preenchido automaticamente usando a API via CEP
- Nome da pessoa de contato: obrigatório
- Telefone: obrigatório
- E-mail: obrigatório
- Tabela de Produtos: obrigatório a inclusão de pelo menos 1 item
- Descrição: obrigatório
- Unidade de Medida: obrigatório
- Quantidade em Estoque: obrigatório
- Valor Unitário: obrigatório
- Valor Total: obrigatório 
    - Obs.: bloqueado, deve ser preenchido automaticamente considerando o valor unitário x a quantidade em estoque
- Tabela de Anexos: obrigatório a inclusão de pelo menos 1 documento
- Os documentos anexados deverão ser armazenados em memória (blob e session storage) para envio
- Botão Excluir (lixeira)
    - Ao excluir o documento, deverá ser excluído da memória
- Botão Visualizar (olho)
    - Ao visualizar o documento, deve ser feito o download
- Botão Salvar Fornecedor
    - Obs.: ao clicar no botão, deverá ser aberto modal de loading de envio, e deverá ser formatado um JSON com os dados a serem enviados, conforme exemplo: [jsonExemplo](https://github.com/drisabelles/desafio-frontend-vflows/blob/main/jsonExemplo/jsonExemplo.json)
    - Obs. sobre o JSON: o JSON de resultado pode ser baixado ou apenas exibido no console do browser.

<br />

## 🎨 Layout <a name="layout"></a>

O layout do desafio está em anexo na pasta [docs](https://github.com/drisabelles/desafio-frontend-vflows/blob/main/docs/CadastroFornecedorModelo.pdf) deste repositório.

<br />

## 🗂️ Organização das pastas <a name="folders"></a>

```bash
📂 desafio-frontend-vflows
|- 📁 docs
|--- 📄 CadastroFornecedorModelo.pdf
|--- 📁 assets
|----- 🖼️ logo.png
|- 📁 js
|--- 📄 script.js
|- 📁 jsonExemplo
|--- 📄 jsonExemplo.json
|- 📄 index.html
```

</br>

## 👩‍💻 Autor <a name="autor"></a>

- LinkedIn - [Isabelle Ribeiro](https://www.linkedin.com/in/drisabelles/)
