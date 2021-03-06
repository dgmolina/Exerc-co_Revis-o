var numberOfTableRows = 0;

function msgLogo(){
    console.log("Logo Clicado!");
}

function msgOrdenedList(item){
    alert('Item Ordenado com Texto ' + item.innerHTML);
}

function msgUnordenedList(item){
    alert('Item Desordenado com Texto ' + item.innerHTML);
}

function validateField(input){
    if (input.value == ''){
        alert("Campo não preenchido!");
    }
}

function validateForm(form){
    var form = document.getElementById("form-pessoa");
    var tabela = document.getElementById("tabela-pessoa");

    if (tabela.getElementsByTagName('tr').length <= 5){
        if (form.nomeCompleto.value == '' || form.nascimento.value == '' || form.salario.value == '') {
            alert("Preencher campos obrigatórios!");
        }
        else {
            fillTable();
        }
    }
    else {
        alert("Tabela cheia!");
    }
}

function fillTable(){
    var form = document.getElementById("form-pessoa");

    var tabela = document.getElementById('tabela-pessoa');

    var nome =  form.nomeCompleto.value;
    var cor = form.corFavorita.value;
    var nascimento = form.nascimento.value;
    var salario = form.salario.value;


    
    var row = tabela.insertRow(-1);

    row.addEventListener("click", deleteRow);

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
    var string = '<tr onclick="deleteRow2(this)"><td>' + nome + "</td><td>" + cor +"</td><td>" + nascimento + "</td><td>" + salario + "</td></tr>";
    tabela.innerHTML = tabelaHTML + string;
    */
    
    document.getElementById("limpar").click();
}

function deleteRow(){
    var index = this.rowIndex;
    document.getElementById("tabela-pessoa").deleteRow(index);
}
/*
function deleteRow2(row){
    alert("DEBUG");
    if (row.rowIndex == 0){
        alert("Esta linha não pode ser deletada!");
    }
    else {
        document.getElementById("tabela-pessoa").deleteRow(row.rowIndex);
    }
}
*/
