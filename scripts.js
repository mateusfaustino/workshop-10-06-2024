// Função para atualizar o tempo e exibir na interface
function updateTime() {
    // Lista de meses
    const monthNames = [
        'janeiro', 'fevereiro', 'março', 'abril', 'maio', 'junho',
        'julho', 'agosto', 'setembro', 'outubro', 'novembro', 'dezembro'
    ];

    // Obter o tempo atual
    const currentTime = new Date();
    
    // Extrair partes do tempo
    let seconds = currentTime.getSeconds();
    let minutes = currentTime.getMinutes();
    let hours = currentTime.getHours();
    let day = currentTime.getDate();
    let monthIndex = currentTime.getMonth();
    let year = currentTime.getFullYear();

    // Obter o nome do mês
    const month = monthNames[monthIndex];
    
    // Adicionar zero à esquerda se o valor for menor que 10
    seconds = seconds < 10 ? `0${seconds}` : seconds;
    minutes = minutes < 10 ? `0${minutes}` : minutes;
    hours = hours < 10 ? `0${hours}` : hours;

    // Array com valores do tempo
    const timeValues = [day, month, year, hours, minutes, seconds];
    // Array com os IDs dos elementos HTML correspondentes
    const timeIds = ['dia', 'mes', 'ano', 'horas', 'minutos', 'segundos'];
    
    // Atualizar os elementos HTML com os valores do tempo
    timeIds.forEach((id, index) => {
        document.getElementById(id).innerText = timeValues[index];
    });

    // Alternar a classe 'blink' em cada elemento com a classe 'separacao'
    document.querySelectorAll('.separacao').forEach(separator => {
        separator.classList.toggle("blink");
    });
}

// Função para inicializar a atualização do tempo em intervalos regulares
function initTime() {
    setInterval(updateTime, 500);
}
