function fillTable(tabela){
    var form = document.getElementById("form-pessoa");

    var tabela = document.getElementById('tabela-pessoa');

    var nome =  form.nomeCompleto.value;
    var cor = form.corFavorita.value;
    var nascimento = form.nascimento.value;
    var salario = form.salario.value;

    var row = tabela.insertRow(-1);

    var cell1 = row.insertCell(0);
    var cell2 = row.insertCell(1);
    var cell3 = row.insertCell(2);
    var cell4 = row.insertCell(3);

    cell1.innerHTML = nome;
    cell2.innerHTML = cor;
    cell3.innerHTML = nascimento;
    cell4.innerHTML = salario;

    /*
    var tabelaHTML = tabela.innerHTML;
    var string = "<tr><td>" + nome + "</td><td>" + cor +"</td><td>" + nascimento + "</td><td>" + salario + "</td></tr>";
    tabela.innerHTML = tabelaHTML + string;
    */
    document.getElementById("limpar").click();
}