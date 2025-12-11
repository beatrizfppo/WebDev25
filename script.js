const btn = document.getElementById("btn-nav-menu");
const btnInscricao = document.getElementById("inscricao-btn");
const dialog = document.getElementById("dialog");
const inscricao = document.getElementById("inscricao");

btn.addEventListener("click", () => {
    dialog.showModal();
});
dialog.addEventListener("click", (event) => {
    if (event.target === dialog) {
        dialog.close();
    }
});

btnInscricao.addEventListener("click", confirmacao);

tarefa.addEventListener('keypress', function(e){
    if(e.key === 'Enter') confirmacao();
});

function confirmacao(){
    const pConfirmacao = document.createElement('p');
    pConfirmacao.textContent = "Inscrição confirmada!";
    inscricao.appendChild(pConfirmacao);
}