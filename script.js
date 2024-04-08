// Função para fazer a requisição HTTP
function fetchData() {
  fetch('https://sheets.googleapis.com/v4/spreadsheets/1wjSp9kOEwOn4hPg0Px1psUjfC2-yg38OuQXrXRvNrIo/values/grupos!A1:Z200?majorDimension=ROWS&key=AIzaSyAVbkJxfxctVsI0DxtReILS3MYZaTxWoUw')
    .then(response => response.json())
    .then(data => displayData(data.values))
    .catch(error => console.error('Erro ao recuperar os dados:', error));
}

// Função para exibir os dados em uma tabela
function displayData(data) {
  const vagasTable = document.getElementById('vagasTable');
  
  data.slice(1).forEach((vaga, index) => {
    const row = vagasTable.insertRow(index);

    vaga.forEach((cellData, cellIndex) => {
      const cell = row.insertCell(cellIndex);
      cell.textContent = cellData;
    });

    row.addEventListener('click', function () {
      // Redireciona para a página de detalhes passando o ID da vaga como parâmetro
      window.location.href = `detalhes.html?vagaId=${vaga[0]}`;
    });
  });
}

// Chama a função fetchData ao carregar a página
window.onload = fetchData;
