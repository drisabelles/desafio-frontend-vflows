var nomearquivo;

function calcularTotal() {
    var valor_uni = $("#valor_unitario").val();
    var quantidade = $("#quantidade").val();
    var total = (valor_uni * quantidade).toFixed(2);
    $("#valor_total").val(total);
}

function excluirProduto(button) {
    var tr = button.closest('tr');
    tr.remove();
    $("#incProd").show();
}

function buscarEnderecoPorCep() {
    var cep = document.getElementById('cep').value;
    cep = cep.replace("-", "");

    document.getElementById('endereco').value = '';
    document.getElementById('bairro').value = '';
    document.getElementById('municipio').value = '';
    document.getElementById('estado').value = '';

    if (cep.length === 8) {
        $.get(`https://viacep.com.br/ws/${cep}/json/`, function (data) {
            if (!data.erro) {
                document.getElementById('cep').value = data.cep;
                document.getElementById('endereco').value = data.logradouro;
                document.getElementById('bairro').value = data.bairro;
                document.getElementById('municipio').value = data.localidade;
                document.getElementById('estado').value = data.uf;
            } else {
                alert('O CEP não pôde ser encontrado! Digite um válido.');
            }
        });
    } else {
        alert('O CEP é inválido! Atente-se ao mínimo de 8 dígitos.');
    }
}


function adicionarProduto() {
    var tabela = document.getElementById("tabela_produtos");
    var novalinha = $("<tr>").addClass("produto");
    var linha = "";
    linha += '<td class="text-center align-middle">';
    linha += '  <button onclick="excluirProduto(this)" class="btn btn-danger">';
    linha += '      <svg xmlns="http://www.w3.org/2000/svg" width="20" height="30" fill="currentColor" class="bi bi-trash3" viewBox="0 0 17 16">';
    linha += '          <path d="M6.5 1h3a.5.5 0 0 1 .5.5v1H6v-1a.5.5 0 0 1 .5-.5M11 2.5v-1A1.5 1.5 0 0 0 9.5 0h-3A1.5 1.5 0 0 0 5 1.5v1H1.5a.5.5 0 0 0 0 1h.538l.853 10.66A2 2 0 0 0 4.885 16h6.23a2 2 0 0 0 1.994-1.84l.853-10.66h.538a.5.5 0 0 0 0-1zm1.958 1-.846 10.58a1 1 0 0 1-.997.92h-6.23a1 1 0 0 1-.997-.92L3.042 3.5zm-7.487 1a.5.5 0 0 1 .528.47l.5 8.5a.5.5 0 0 1-.998.06L5 5.03a.5.5 0 0 1 .47-.53Zzm5.058 0a.5.5 0 0 1 .47.53l-.5 8.5a.5.5 0 1 1-.998-.06l.5-8.5a.5.5 0 0 1 .528-.47M8 4.5a.5.5 0 0 1 .5.5v8.5a.5.5 0 0 1-1 0V5a.5.5 0 0 1 .5-.5"></path>';
    linha += '      </svg>';
    linha += '  </button>';
    linha += '</td>';
    linha += '<td>';
    linha += '  <div class="border rounded border-dark p-2">';
    linha += '      <h5>Produto 1</h5>';
    linha += '          <div class="row mt-3 mb-3">';
    linha += '              <div class="col-md-2 d-flex justify-content-center align-items-center">';
    linha += '                   <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" class="bi bi-box-seam-fill" viewBox="0 0 16 16" style="width: 80px; height: 80px;">';
    linha += '                       <path fill-rule="evenodd" d="M15.528 2.973a.75.75 0 0 1 .472.696v8.662a.75.75 0 0 1-.472.696l-7.25 2.9a.75.75 0 0 1-.557 0l-7.25-2.9A.75.75 0 0 1 0 12.331V3.669a.75.75 0 0 1 .471-.696L7.443.184l.01-.003.268-.108a.75.75 0 0 1 .558 0l.269.108.01.003zM10.404 2 4.25 4.461 1.846 3.5 1 3.839v.4l6.5 2.6v7.922l.5.2.5-.2V6.84l6.5-2.6v-.4l-.846-.339L8 5.961 5.596 5l6.154-2.461z"></path>';
    linha += '                  </svg>';
    linha += '              </div>';
    linha += '          <div class="col-md-10">';
    linha += '              <label for="produto" class="text-sm">Produto</label>';
    linha += '              <input type="text" class="form-control" id="produto" name="produto" required>';
    linha += '              <div class="row">';
    linha += '                  <div class="col-md-3">';
    linha += '                      <label for="unidade_medida" style="font-size: 13px">UND. Medida</label>';
    linha += '                      <select type="text" class="form-control" id="unidade_medida" name="unidade_medida" required>';
    linha += '                          <option value="" selected></option>';
    linha += '                          <option value="KG">KG</option>';
    linha += '                          <option value="Unidade">Unidade</option>';
    linha += '                          <option value="Caixa">Caixa</option>';
    linha += '                          <option value="Pacote">Pacote</option>';
    linha += '                      </select>';
    linha += '                  </div>';
    linha += '                  <div class="col-md-3">';
    linha += '                      <label for="quantidade" style="font-size: 13px">QTDE em Estoque</label>';
    linha += '                      <input type="number" class="form-control" id="quantidade" name="quantidade" min="0" required oninput="calcularTotal()">';
    linha += '                  </div>';
    linha += '                  <div class="col-md-3">';
    linha += '                      <label for="valor_unitario" style="font-size: 13px">Valor Unitário</label>';
    linha += '                      <input type="number" class="form-control" id="valor_unitario" name="valor_unitario" min="0" step="0.01" required oninput="calcularTotal()">';
    linha += '                  </div>';
    linha += '                  <div class="col-md-3">';
    linha += '                      <label for="valor_total" style="font-size: 13px">Valor Total</label>';
    linha += '                      <input type="number" class="form-control" id="valor_total" name="valor_total" readonly required>';
    linha += '                  </div>';
    linha += '              </div>';
    linha += '          </div>';
    linha += '          </div>';
    linha += '  </div>';
    linha += '</td>';
    linha += '</tr>';
    novalinha.append(linha);
    $("#tabela_produtos tbody").append(novalinha);

}

function incluirAnexo() {

    var input = document.getElementById('documentoInput');
    var file = input.files[0];
    if (file) {
        nomearquivo = file.name;
        var blob = new Blob([file], { type: file.type });

        var blobURL = URL.createObjectURL(blob);

        sessionStorage.setItem('documentoBlobURL', blobURL);
        alert('Seu documento foi anexado com sucesso!');
    }
    else {
        alert('É necessário selecionar um documento para ser anexado!');
        return;
    }

    var novalinha = $("<tr>").addClass("anexo");
    var linha = "";
    linha += '    <td>';
    linha += '        <div class="border rounded border-dark p-2">';
    linha += '            <h5>Itens </h5>';
    linha += '            <div class="row mt-3 mb-3">';
    linha += '                <div class="col-md-1">';
    linha += '                    <button onclick="excluirAnexo(this)" id="teste_2" class="btn btn-danger">';
    linha += '                        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="30" fill="currentColor" class="bi bi-trash3" viewBox="0 0 17 16">';
    linha += '                            <path d="M6.5 1h3a.5.5 0 0 1 .5.5v1H6v-1a.5.5 0 0 1 .5-.5M11 2.5v-1A1.5 1.5 0 0 0 9.5 0h-3A1.5 1.5 0 0 0 5 1.5v1H1.5a.5.5 0 0 0 0 1h.538l.853 10.66A2 2 0 0 0 4.885 16h6.23a2 2 0 0 0 1.994-1.84l.853-10.66h.538a.5.5 0 0 0 0-1zm1.958 1-.846 10.58a1 1 0 0 1-.997.92h-6.23a1 1 0 0 1-.997-.92L3.042 3.5zm-7.487 1a.5.5 0 0 1 .528.47l.5 8.5a.5.5 0 0 1-.998.06L5 5.03a.5.5 0 0 1 .47-.53Zm5.058 0a.5.5 0 0 1 .47.53l-.5 8.5a.5.5 0 1 1-.998-.06l.5-8.5a.5.5 0 0 1 .528-.47M8 4.5a.5.5 0 0 1 .5.5v8.5a.5.5 0 0 1-1 0V5a.5.5 0 0 1 .5-.5"></path>';
    linha += '                        </svg>';
    linha += '                    </button>';
    linha += '                </div>';
    linha += '                <div class="col-md-1">';
    linha += '                    <button onclick="visualizarDocumento()" class="btn btn-primary">';
    linha += '                        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="30" fill="currentColor" class="bi bi-eye" viewBox="0 0 17 16">';
    linha += '                            <path d="M16 8s-3-5.5-8-5.5S0 8 0 8s3 5.5 8 5.5S16 8 16 8M1.173 8a13 13 0 0 1 1.66-2.043C4.12 4.668 5.88 3.5 8 3.5s3.879 1.168 5.168 2.457A13 13 0 0 1 14.828 8q-.086.13-.195.288c-.335.48-.83 1.12-1.465 1.755C11.879 11.332 10.119 12.5 8 12.5s-3.879-1.168-5.168-2.457A13 13 0 0 1 1.172 8z"></path>';
    linha += '                            <path d="M8 5.5a2.5 2.5 0 1 0 0 5 2.5 2.5 0 0 0 0-5M4.5 8a3.5 3.5 0 1 1 7 0 3.5 3.5 0 0 1-7 0"></path>';
    linha += '                        </svg>';
    linha += '                    </button>';
    linha += '                </div>';
    linha += '                <div class="col-md-10 d-flex align-items-center">';
    linha += '                    <label for="" class="text-sm">' + nomearquivo + '</label>';
    linha += '                </div>';
    linha += '            </div>';
    linha += '        </div>';
    linha += '    </td>';
    linha += '</tr>';
    novalinha.append(linha);
    $("#tabela_anexos tbody").append(novalinha);
}

function excluirAnexo(button) {
    sessionStorage.removeItem('documentoBlobURL');
    blobURL = null;
    nomearquivo = "";
    alert('Seu documento foi removido com sucesso!');
    var tr = button.closest('tr');
    tr.remove();
    $("#documentoInput").val('');
}

function visualizarDocumento() {
    blobURL = sessionStorage.getItem('documentoBlobURL');

    if (blobURL) {
        var link = document.createElement('a');
        link.href = blobURL;
        link.download = nomearquivo;
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
    } else {
        alert('É necessário ter um documento anexado para visualizá-lo!');
    }
}

function salvarFornecedor() {
    var camposObrigatoriosPreenchidos = validarCamposObrigatorios();

    if (!camposObrigatoriosPreenchidos) {
        alert("É necessário que todos os campos obrigatórios estejam preenchidos!");
        return;
    }

    $('#loadingModal').modal('show');
    var fornecedor = {};
    fornecedor.razaoSocial = document.getElementById('razao_social').value;
    fornecedor.nomeFantasia = document.getElementById('nome_fantasia').value;
    fornecedor.cnpj = document.getElementById('cnpj').value;
    fornecedor.inscricaoEstadual = document.getElementById('inscricao_estadual').value;
    fornecedor.inscricaoMunicipal = document.getElementById('inscricao_municipal').value;
    fornecedor.cep = document.getElementById('cep').value;
    fornecedor.endereco = document.getElementById('endereco').value;
    fornecedor.numero = document.getElementById('numero').value;
    fornecedor.complemento = document.getElementById('complemento').value;
    fornecedor.bairro = document.getElementById('bairro').value;
    fornecedor.municipio = document.getElementById('municipio').value;
    fornecedor.estado = document.getElementById('estado').value;
    fornecedor.contato = document.getElementById('contato').value;
    fornecedor.telefone = document.getElementById('telefone').value;
    fornecedor.email = document.getElementById('email').value;

    fornecedor.produtos = [];
    var produtosRows = document.querySelectorAll('#tabela_produtos .produto');
    produtosRows.forEach(function (row) {
        var produto = {
            descricaoProduto: row.querySelector('#produto').value,
            unidadeMedida: row.querySelector('#unidade_medida').value,
            qtdeEstoque: row.querySelector('#quantidade').value,
            valorUnitario: row.querySelector('#valor_unitario').value,
            valorTotal: row.querySelector('#valor_total').value
        };
        fornecedor.produtos.push(produto);
    });

    fornecedor.anexos = [];
    var anexosRows = document.querySelectorAll('#tabela_anexos .anexo');
    anexosRows.forEach(function (row) {
        var anexo = {
            nomeArquivo: row.querySelector('label.text-sm').textContent,
            blobArquivo: sessionStorage.getItem('documentoBlobURL') || ''
        };
        fornecedor.anexos.push(anexo);
    });

    var dadosJSON = JSON.stringify(fornecedor);

    setTimeout(function () {
        $('#loadingModal').modal('hide');
        console.log('Dados enviados:', dadosJSON);
    }, 1000);

}

function validarCamposObrigatorios() {

    var camposObrigatorios = document.querySelectorAll('[required]');
    for (var i = 0; i < camposObrigatorios.length; i++) {
        if (!camposObrigatorios[i].value.trim()) {
            return false;
        }
    }
    return true;
}
