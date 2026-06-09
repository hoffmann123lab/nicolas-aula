function fomis(){
    let nome = document.querySelector('#nome').value
    let sobrenome = document.querySelector('#sobrenome').value
    let idade = document.querySelector('#idade').value
    let profisao = document.querySelector('#profisao').value

    let spanMensagem = document.querySelector('#mensagem');

    if(!nome || !sobrenome || !idade || !profisao){
        spanMensagem.textContent = "Preencha todos os campos!";
        document.querySelector("form").reset();
    }else{
        spanMensagem.style.color = "green"; // mensagem de sucesso em verde
        spanMensagem.textContent = `O cliente ${nome} ${sobrenome} tem ${idade} anos e trabalha como ${profisao}`;
        document.querySelector("form").reset();
    }
}