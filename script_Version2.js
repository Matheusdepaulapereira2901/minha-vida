// Data importante: 10 de novembro (data de vocês)
// Altere o ano se necessário
const startDate = new Date(2025, 10, 10); // 10 de novembro de 2024

function updateTimer() {
    const now = new Date();
    const difference = now - startDate;

    // Calcular dias, horas, minutos e segundos
    const days = Math.floor(difference / (1000 * 60 * 60 * 24));
    const hours = Math.floor((difference / (1000 * 60 * 60)) % 24);
    const minutes = Math.floor((difference / 1000 / 60) % 60);
    const seconds = Math.floor((difference / 1000) % 60);

    // Atualizar os elementos na página
    document.getElementById('days').textContent = days;
    document.getElementById('hours').textContent = String(hours).padStart(2, '0');
    document.getElementById('minutes').textContent = String(minutes).padStart(2, '0');
    document.getElementById('seconds').textContent = String(seconds).padStart(2, '0');
}

// Atualizar o timer a cada segundo
setInterval(updateTimer, 1000);

// Chamar uma vez ao carregar a página
updateTimer();