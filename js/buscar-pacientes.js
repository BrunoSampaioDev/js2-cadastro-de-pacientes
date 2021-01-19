var botaoAdicionar = document.querySelector('#buscar-pacientes');

botaoAdicionar.addEventListener('click', function () {

    // chama o metodo do js para trabalhar com requisicoes http:
    var xhr = new XMLHttpRequest();

    //configurando a requisicao
    // 1 parametro metodo GET para pegar o que esta na url que e o segundo parametro
    xhr.open('GET', 'https://api-pacientes.herokuapp.com/pacientes');

    //evento load que executa uma funcao apos buscar e carregar as informacoes da url
    xhr.addEventListener('load', function () {

        //conferindo o status da requisicao, para somente se der tudo certo 
        //realizar o processo de importacao
        if (xhr.status == 200) {

            //resposta no formato texto (JSON)
            var resposta = xhr.responseText;

            //usando JSON para conrver em um array de objetos js
            var pacientes = JSON.parse(resposta)

            //adicionando os paciente da api na tabela
            pacientes.forEach(function (paciente) {
                adicionaPacienteNaTabela(paciente);
            });
        }else{
            console.log(xhr.status);
            console.log(xhr.responseText);
        }
    });

    //envia a requisicao
    xhr.send();
});