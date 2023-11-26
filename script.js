const key = 'cebcd482eda57fa9a6714c1c2ba91885';

function colocarDadosNaTela(dados) {
    document.querySelector('.cidade').innerHTML = 'Tempo em ' + dados.name
    document.querySelector('.temperatura').innerHTML = 'Temperatura: ' + Math.floor(dados.main.temp) + '°C'
    document.querySelector('.maxima').innerHTML = 'Maxima: ' + Math.floor(dados.main.temp_max) + '°C'
    document.querySelector('.minima').innerHTML = 'Minima: ' + Math.floor(dados.main.temp_min) + '°C'
    document.querySelector('.texto-previsao').innerHTML = dados.weather[0].description
    document.querySelector('.umidade').innerHTML = 'Umidade: ' + dados.main.humidity + '%'
    document.querySelector('.img-previsao').src = `https://openweathermap.org/img/wn/${dados.weather[0].icon}.png`
}

async function buscarCidade(cidade) {
    const dados = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${cidade}&appid=${key}&lang=pt_br&units=metric`).then(response => response.json());

    colocarDadosNaTela(dados)
}

function buttonClick() {
    const cidade = document.querySelector('.input-cidade').value;

    buscarCidade(cidade)
}