// script.js
function calcularMedia() {
    // Capturando os valores das notas
    const nota1 = parseFloat(document.getElementById('nota1').value);
    const nota2 = parseFloat(document.getElementById('nota2').value);
    const nota3 = parseFloat(document.getElementById('nota3').value);

    // Verificando se as notas são válidas
    if (isNaN(nota1) || isNaN(nota2) || isNaN(nota3)) {
        alert("Por favor, insira todas as notas corretamente.");
        return;
    }

    // Calculando a média
    const media = (nota1 + nota2 + nota3) / 3;

    // Exibindo o resultado
    const resultadoDiv = document.getElementById('resultado');

    // Verificando se o aluno foi aprovado ou reprovado
    if (media >= 7) {
        resultadoDiv.textContent = `Aprovado! Média: ${media.toFixed(2)}`;
        resultadoDiv.style.color = "green";
    } else {
        resultadoDiv.textContent = `Reprovado! Média: ${media.toFixed(2)}`;
        resultadoDiv.style.color = "red";
    }
}
