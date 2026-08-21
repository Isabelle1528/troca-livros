
const nomeEntrada = document.getElementById("nome-entrada");
const nomeSaida = document.getElementById("nome-saida");
const btsTroca = document.getElementById("btn-troca");

btsTroca.addEventListener('mouseenter', () => {
    nomeSaida.textContent = nomeEntrada.value;
    nomeSaida.style.color = "rgb(231, 15, 15)";
});

btsTroca.addEventListener('mouseout', () => {
    nomeSaida.style.color = "rgb(231, 15, 15)";
}); 