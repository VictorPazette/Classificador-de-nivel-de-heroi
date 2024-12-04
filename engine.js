// engine.js

// Evento para o botão "Classificar"
document.getElementById('processar').addEventListener('click', function () {
  const input = document.getElementById('input').value.trim() // Pega o valor do textarea
  const dados = input.split(',') // Divide a entrada em uma lista de heróis
  let resultado = [] // Armazena os resultados no formato desejado

  // Itera sobre cada item da lista de heróis
  dados.forEach(item => {
    let [nome, xp] = item.trim().split(':') // Divide o nome e o XP
    xp = parseInt(xp) // Converte o XP para número inteiro

    // Verifica se os dados são válidos
    if (!nome || isNaN(xp)) {
      resultado.push(
        `Entrada inválida para "${item.trim()}". Verifique o formato.`
      )
      return
    }

    // Determina o nível baseado no XP
    let nivel
    if (xp <= 1000) {
      nivel = 'Ferro'
    } else if (xp <= 2000) {
      nivel = 'Bronze'
    } else if (xp <= 5000) {
      nivel = 'Prata'
    } else if (xp <= 7000) {
      nivel = 'Ouro'
    } else if (xp <= 8000) {
      nivel = 'Platina'
    } else if (xp <= 9000) {
      nivel = 'Ascendente'
    } else if (xp <= 10000) {
      nivel = 'Imortal'
    } else {
      nivel = 'Radiante'
    }

    // Adiciona a mensagem no formato desejado
    resultado.push(
      `O Herói de nome <strong>${nome}</strong> está no nível de <strong>${nivel}</strong>`
    )
  })

  // Exibe os resultados na div 'resultado'
  document.getElementById('resultado').innerHTML = resultado.join('<br>')
})

// Evento para o botão "Limpar"
document.getElementById('limpar').addEventListener('click', function () {
  document.getElementById('input').value = '' // Limpa o campo de texto
  document.getElementById('resultado').innerHTML = '' // Limpa os resultados
})
