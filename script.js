function calcularIrrigacao() {
    const planta = document.getElementById('planta').value;
    const solo = document.getElementById('solo').value;
    const clima = document.getElementById('clima').value;

    let texto = "";
    let tempoGotejo = "";
    let frequencia = "";

    if(planta === "alface") {
        frequencia = "De 1 a 2 vezes ao dia em dias quentes, ou de 2 em 2 dias em clima ameno";
        tempoGotejo = "5 a 8 minutos por ciclo";
    } else if(planta === "cenoura") {
        frequencia = "De 2 em 2 dias, ou diariamente se o solo for muito seco";
        tempoGotejo = "8 a 12 minutos por ciclo";
    } else if(planta === "tomate") {
        frequencia = "De 1 em 1 dia no crescimento; de 2 em 2 dias quando der frutos";
        tempoGotejo = "10 a 15 minutos por ciclo";
    } else if(planta === "rabanete") {
        frequencia = "Regar sempre que a superfície secar — geralmente todo dia ou dia sim, dia não";
        tempoGotejo = "4 a 6 minutos por ciclo";
    }

    if(solo === "arenoso") {
        tempoGotejo += " → Aumente um pouco o tempo, pois a água escorre rápido";
    } else if(solo === "argiloso") {
        tempoGotejo += " → Diminua o tempo, pois esse solo retém muita água";
    }

    if(clima === "calor") {
        frequencia += " ⚠️ No calor, regue sempre no início da manhã ou final da tarde para evitar perda por calor!";
    } else if(clima === "frio") {
        frequencia = "🌧️ Com chuva ou frio, reduza muito a irrigação — observe a umidade do solo!";
    }

    texto = `
        <h3>📋 Recomendação para sua cultura:</h3>
        <p><strong>Frequência:</strong> ${frequencia}</p>
        <p><strong>Tempo ideal no sistema de gotejo:</strong> ${tempoGotejo}</p>
        <br>
        <p>✅ <strong>Economia:</strong> Você evita desperdiçar água e deixa as plantas saudáveis sem encharcar o solo.</p>
    `;

    document.getElementById('resultado').innerHTML = texto;
}
