function Pesquisar() {
    // Obtém a seção HTML onde os resultados serão exibidos
    let section = document.getElementById("resultado-pesquisa");

    let campoPesquisa = document.getElementById("campo-pesquisa").value; 
    console.log(campoPesquisa);

    

    if (!campoPesquisa){
        section.innerHTML = "<p>Nada foi encontrado! Nenhum dado foi enviado.</p>"
        return
    }
    campoPesquisa = campoPesquisa.toLowerCase()

    // Inicializa uma string vazia para armazenar os resultados da pesquisa
    let resultados = "";
    let nome = "";
    let descricao = "";
    let time = "";

    // Itera sobre cada jogador na lista de jogadoresNBA
    for (let dado of jogadoresNBA) {
        nome = dado.nome.toLowerCase();
        descricao = dado.descricao.toLowerCase();
        time = dado.time.toLowerCase();

        if(nome.includes(campoPesquisa) || descricao.includes(campoPesquisa) || time.includes(campoPesquisa)){
            // Constrói o HTML para cada jogador, formatando o nome, número, time e descrição
            resultados += `
            <div class="item-resultado">
                <h2>${dado.nome} #${dado.numero}</h2>
                <h3>Time: ${dado.time}</h3>
                <p>${dado.descricao}</p>
            </div>
            `
        }
    }
    if (!resultados) {
        section.innerHTML = "<p>Nada foi encontrado!</p>"
        return
    }
    // Atribui o HTML construído à seção de resultados, substituindo o conteúdo anterior
    section.innerHTML = resultados;
}
