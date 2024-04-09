// Função para fazer a requisição HTTP
function fetchData() {
  fetch('https://sheets.googleapis.com/v4/spreadsheets/1wjSp9kOEwOn4hPg0Px1psUjfC2-yg38OuQXrXRvNrIo/values/grupos!A1:Z200?majorDimension=ROWS&key=AIzaSyAVbkJxfxctVsI0DxtReILS3MYZaTxWoUw')
    .then(response => response.json())
    .then(data => {displayData1(data.values); displayData2(data.values)} )
    .catch(error => console.error('Erro ao recuperar os dados:', error));
}

function displayData1(data) {
  const vagasTable = document.getElementById('teorico');

  // Limite de 3 primeiros lugares
  const limit = 3;

  // Índices das colunas de nome e de teórico
  const nomeIndex = 0; // Assumindo que a coluna de nome é a primeira (índice 0)
  const teoricoIndex = 1; // Assumindo que a coluna de teórico é a segunda (índice 1)

  // Exibir apenas os 3 primeiros lugares tanto para Teórico quanto para Prático
  data.slice(1, limit + 1).forEach((vaga, index) => {
    const row = vagasTable.insertRow(index);

    // Exibir apenas as colunas de nome e teórico
    const nomeCell = row.insertCell(0);
    nomeCell.textContent = vaga[nomeIndex];

    const teoricoCell = row.insertCell(1);
    teoricoCell.textContent = vaga[teoricoIndex];
  });
}


function displayData2(data) {
  const vagasTable = document.getElementById('pratico');

  // Limite de 3 primeiros lugares
  const limit = 3;

  // Índices das colunas de nome e de teórico
  const nomeIndex = 0; // Assumindo que a coluna de nome é a primeira (índice 0)
  const teoricoIndex = 1; // Assumindo que a coluna de teórico é a segunda (índice 1)

  // Exibir apenas os 3 primeiros lugares tanto para Teórico quanto para Prático
  data.slice(1, limit + 1).forEach((vaga, index) => {
    const row = vagasTable.insertRow(index);

    // Exibir apenas as colunas de nome e teórico
    const nomeCell = row.insertCell(0);
    nomeCell.textContent = vaga[nomeIndex];

    const teoricoCell = row.insertCell(1);
    teoricoCell.textContent = vaga[teoricoIndex];
  });
}

// Chama a função fetchData ao carregar a página
window.onload = fetchData;
