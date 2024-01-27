const weekdays = document.querySelectorAll('.weekday');
const daynums = document.querySelectorAll('.daynum');
const weeknums = document.querySelectorAll('.weeknum');
const plantoes = document.querySelectorAll('.day');
let index = 0;
let indice = 0;
const shortMonth = document.querySelector('.shortday');
const normalMonth = document.querySelector('.normalday');
const longMonth = document.querySelector('.longday');
const tabela = document.querySelector('#tabela');
const nextBtn = document.querySelector('.nextBtn');
const currentBtn = document.querySelector('.currentBtn');
const previousBtn = document.querySelector('.previousBtn');
const diasDaSemana = ['Domingo', 'Segunda-feira', 'Terça-feira', 'Quarta-feira', 'Quinta-feira', 'Sexta-feira', 'Sábado'];
const mesesDoAno = ['Janeiro', 'Fevereiro', 'Março', 'Abril', 'Maio', 'Junho', 'Julho', 'Agosto', 'Setembro', 'Outubro', 'Novembro', 'Dezembro'];


previousBtn.addEventListener('click', () => {
  tabela.style.opacity = .5;
  
  setTimeout(() => {
    index = index - 1;
    nextMonth()
    tabela.style.opacity = 1;
  }, 100)
})

currentBtn.addEventListener('click', () => {
  tabela.style.opacity = .5;
  
  setTimeout(() => {
    index = 0;
    currentMonth()
    tabela.style.opacity = 1;
  }, 100)

})

nextBtn.addEventListener('click', () => {
  tabela.style.opacity = .5;
  
  setTimeout(() => {
    index = index + 1;
    nextMonth()
    tabela.style.opacity = 1;
  }, 100)

})

function fillScale(dia) {
    
    for (let i = 0; i < plantoes.length; i++) { 
        plantoes[i].innerHTML = scales[dia][i];
    }
}

function hideDays(dia) {
    if (dia == 28) {
        shortMonth.style.opacity = '0';
        normalMonth.style.opacity = '0';
        longMonth.style.opacity = '0';
    } if (dia == 29) {
        shortMonth.style.opacity = '1';
        normalMonth.style.opacity = '0';
        longMonth.style.opacity = '0';
    } if (dia == 30) {
        shortMonth.style.opacity = '1';
        normalMonth.style.opacity = '1';
        longMonth.style.opacity = '0';
    } else if (dia == 31) {
        shortMonth.style.opacity = '1';
        normalMonth.style.opacity = '1';
        longMonth.style.opacity = '1';
    }

}
function nextMonth() {
    // Criar um objeto Date para a data atual
    const dataAtual = new Date();
  
    // Obter o mês atual
    const mesAtual = dataAtual.getMonth();
  
    // Configurar a data para o primeiro dia do próximo mês
    dataAtual.setMonth(mesAtual + index, 1);

    // Obter o nome do mês seguinte
    let mesSeguinte = dataAtual.getMonth();
    mesSeguinte = mesesDoAno[mesSeguinte];
    let anoAtual = dataAtual.getFullYear();
  
    // Obter o dia da semana para o primeiro dia do próximo mês (0 a 6)
    const diaDaSemanaProximoMes = dataAtual.getDay();

    //obter o ultimo dia do mes
    const ultimoDiaDoMes = new Date(dataAtual.getFullYear(), dataAtual.getMonth() + 1, 0).getDate()
    console.log(ultimoDiaDoMes)
    //passando o ultimo dia do mes como parametro para a função que oculta o dia 29, 30 e/ou 31
    hideDays(ultimoDiaDoMes)
  
    // Obter o nome do dia da semana
    const nomeDoDiaDaSemana = diasDaSemana[diaDaSemanaProximoMes];

    // Obter o dia da semana para cada dia do mês
    for (let i = 0; i < 31; i++) {
      const diaDaSemanaAtual = (diaDaSemanaProximoMes + i) % 7; // Lidando com os dias além do índice 6
      weekdays[i].textContent = diasDaSemana[diaDaSemanaAtual];
    }

    fillScale(diaDaSemanaProximoMes);

    // Atualizar o titulo da pagina com o primeiro dia do mes
    document.querySelector('.title').innerHTML =('Escala para o mes de ' + mesSeguinte +'/'+ anoAtual + '.');

    
}

function currentMonth() {
  // Criar um objeto Date para a data atual
  const dataAtual = new Date();
  
  // Obter o mês atual
  const mesAtual = dataAtual.getMonth();

  // Configurar a data para o primeiro dia do próximo mês
  dataAtual.setMonth(mesAtual, 1);

  // Obter o nome do mês seguinte
  let mesSeguinte = dataAtual.getMonth();
  mesSeguinte = mesesDoAno[mesSeguinte];

  // Obter o dia da semana para o primeiro dia do próximo mês (0 a 6)
  const diaDaSemanaProximoMes = dataAtual.getDay();
  let anoAtual = dataAtual.getFullYear();

  //obter o ultimo dia do mes
  const ultimoDiaDoMes = new Date(dataAtual.getFullYear(), dataAtual.getMonth() + 1, 0).getDate()
  console.log(ultimoDiaDoMes)
  //passando o ultimo dia do mes como parametro para a função que oculta o dia 29, 30 e/ou 31
  hideDays(ultimoDiaDoMes)

  // Obter o nome do dia da semana
  const nomeDoDiaDaSemana = diasDaSemana[diaDaSemanaProximoMes];

  // Obter o dia da semana para cada dia do mês
  for (let i = 0; i < 31; i++) {
    const diaDaSemanaAtual = (diaDaSemanaProximoMes + i) % 7; // Lidando com os dias além do índice 6
    weekdays[i].textContent = diasDaSemana[diaDaSemanaAtual];
  }

  fillScale(diaDaSemanaProximoMes);

  // Atualizar o titulo da pagina com o primeiro dia do mes
  document.querySelector('.title').innerHTML =('Escala para o mes de ' + mesSeguinte +'/'+ anoAtual + '.');

}

function definirCoresNaTabela() {
    const tabela = document.querySelector('.tabela');
    const linhas = document.querySelectorAll('tr');
  
    // Array com as classes de cor
    const classesDeCor = ['cor1', 'cor2', 'cor3', 'cor4', 'cor5', 'cor6', 'cor7'];
  
    // Loop para atribuir classes de cor às linhas
    linhas.forEach((linha, indice) => {
      const classeDeCor = classesDeCor[indice % classesDeCor.length];
      linha.classList.add(classeDeCor);
    });
}

function setDayNum () {
  for (let i = 0; i < daynums.length; i++) {
    daynums[i].innerHTML = i+1;
  }  
}

function setWeekNum () {
  for (let i = 0; i < 7; i++) {
    weeknums[i].innerHTML = '1';
  }
  for (let i = 7; i < 14; i++) {
    weeknums[i].innerHTML = '2';
  }
  for (let i = 14; i < 21; i++) {
    weeknums[i].innerHTML = '3';
  }
  for (let i = 21; i < 28; i++) {
    weeknums[i].innerHTML = '4';
  }
  for (let i = 28; i < weeknums.length; i++) {
    weeknums[i].innerHTML = '5';
  }
}

window.onload = () => {
  currentMonth()
}

definirCoresNaTabela();
setDayNum();
setWeekNum();


