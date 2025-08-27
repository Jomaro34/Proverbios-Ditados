let dicionario = [];

async function carregarDicionario() {
  try {
    const resp = await fetch('proverbios_ditados.json');
    dicionario = await resp.json();
  } catch (erro) {
    console.error("Erro ao carregar o dicionário:", erro);
  }
}

function pesquisar(termo) {
  const resultsDiv = document.getElementById('results');
  resultsDiv.innerHTML = '';
  if (!termo) return;

  const resultados = dicionario.filter(item =>
    item.Palavra.toLowerCase().includes(termo.toLowerCase())
  );

  resultados.forEach(item => {
    const div = document.createElement('div');
    div.className = 'entry';
    div.innerHTML = `<h2>${item.Palavra}</h2><p>${item.Significado}</p>`;
    resultsDiv.appendChild(div);
  });
}

window.addEventListener('DOMContentLoaded', () => {
  document.getElementById('search').addEventListener('input', (e) => {
    pesquisar(e.target.value);
  });

  carregarDicionario();
});
