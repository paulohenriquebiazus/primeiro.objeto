function chama_aluno(){

    let aluno = {
        aluno: 'Paulo Henrique',
        idade: 14,
        altura: 1.70,
        nota: 6.50
    };
    //alert(aluno.nome);

    document.getElementById('nome_aluno').textContent = 'Nome: ' + aluno.nome;
    document.getElementById('idade_aluno').textContent = 'Idade: ' + aluno.idade;
    document.getElementById('altura_aluno').textContent = 'Altura: ' + aluno.altura;
    document.getElementById('nota_aluno').textContent = 'Nota: ' + aluno.nota;
    
}