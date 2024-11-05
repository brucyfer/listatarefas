async function carregarAlunos() {
    const url = 'https://670edf663e7151861656043e.mockapi.io/api/alunos'    
    const resposta = await fetch(url)
    const dadosAluno = await resposta.json()
    console.log(dadosAluno)
    const listaAlunos = document.querySelector('#studentList')
    dadosAluno.forEach(dadosDeUmAlunoSo => {
        const conteudoHtmlAluno = `
        <strong>ID:</strong>
        ${dadosDeUmAlunoSo.id}
        <br />
        <strong>Nome:</strong>
        ${dadosDeUmAlunoSo.nome}
        <br />
        <strong>Idade:</strong>
        ${dadosDeUmAlunoSo.idade}
        <button onclick="deletarEstudante(${dadosDeUmAlunoSo.id})">Deletar</button>
        <button onclick="editarEstudante(${dadosDeUmAlunoSo.id})">Editar</button>
        <hr />
        `
        listaAlunos.innerHTML += conteudoHtmlAluno
    });
}

async function cadastrarAluno() {
    const url = 'https://670edf663e7151861656043e.mockapi.io/api/alunos'    
    const nomeDigitado = document.querySelector('#name').value
    const idadeDigitada = document.querySelector('#age').value
    let dadosAluno = {
        nome: nomeDigitado,
        idade: idadeDigitada
    }

    dadosAluno = JSON.stringify(dadosAluno)
    const resposta = await fetch(url, {
        method: 'POST',
        headers: {'Content-Type': 'application/json'},
        body: dadosAluno
    })
    alert('Aluno cadastrado com sucesso!')

}

async function deletarEstudante(id) {
    
}

carregarAlunos()