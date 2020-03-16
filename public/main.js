const updateButton1 = document.querySelector('.update-team-1-name')
const updateButton2 = document.querySelector('.update-team-2-name')
const addButton1 = document.querySelector('.team-1-add-1-button')
const subtractButton1 = document.querySelector('.team-1-subtract-1-button')
const addButton2 = document.querySelector('.team-2-add-1-button')
const subtractButton2 = document.querySelector('.team-2-subtract-1-button')
const resetButton = document.querySelector('.reset-button')
const addPeriod = document.querySelector('.add-period')

const updateTeamName1 = () => {
  const newTeamName1 = document.querySelector('.team-1-input').value
  document.querySelector('.team-1-name').textContent = newTeamName1
}

const updateTeamName2 = () => {
  const newTeamName2 = document.querySelector('.team-2-input').value
  document.querySelector('.team-2-name').textContent = newTeamName2
}

const addTeam1 = () => {
  const currentScore = parseInt(
    document.querySelector('.team-1-score').textContent
  )
  const finalScore = parseInt(currentScore) + 1
  if (currentScore < 21) {
    document.querySelector('.team-1-score').textContent = finalScore
  }
  if (finalScore === 21) {
    const buttons = document.querySelectorAll('button')
    buttons.forEach(button => (button.disabled = true))
    resetButton.disabled = false
    document.querySelector('.team1-end-game-message').textContent = 'Winner'
    document.querySelector('.team2-end-game-message').textContent = 'Loser'
    document.querySelector('.team-1-score').classList.add('winner')
    document.querySelector('.team-2-score').classList.add('loser')
  }
}

const addTeam2 = () => {
  const currentScore = parseInt(
    document.querySelector('.team-2-score').textContent
  )
  const finalScore = parseInt(currentScore) + 1
  if (currentScore < 21) {
    document.querySelector('.team-2-score').textContent = finalScore
  }
  if (finalScore === 21) {
    const buttons = document.querySelectorAll('button')
    buttons.forEach(button => (button.disabled = true))
    resetButton.disabled = false
    document.querySelector('.team2-end-game-message').textContent = 'Winner'
    document.querySelector('.team1-end-game-message').textContent = 'Loser'
    document.querySelector('.team-1-score').classList.add('loser')
    document.querySelector('.team-2-score').classList.add('winner')
  }
}

const subtractTeam1 = () => {
  const currentScore = parseInt(
    document.querySelector('.team-1-score').textContent
  )
  if (currentScore !== 0) {
    const finalScore = currentScore - 1
    document.querySelector('.team-1-score').textContent = finalScore
  }
}

const subtractTeam2 = () => {
  const currentScore = parseInt(
    document.querySelector('.team-2-score').textContent
  )
  if (currentScore !== 0) {
    const finalScore = parseInt(currentScore) - 1
    document.querySelector('.team-2-score').textContent = finalScore
  }
}

const subtract1Period = () => {
  const currentPeriod = parseInt(document.querySelector('.period').textContent)
  const newPeriod = currentPeriod - 1
  document.querySelector('.period').textContent = newPeriod
}

const add1Period = () => {
  const currentPeriod = parseInt(document.querySelector('.period').textContent)
  const newPeriod = currentPeriod + 1
  document.querySelector('.period').textContent = newPeriod
}

const resetGame = () => {
  document.querySelector('.team-1-score').textContent = 0
  document.querySelector('.team-2-score').textContent = 0
  const buttons = document.querySelectorAll('button')
  buttons.forEach(button => (button.disabled = false))
  document.querySelector('.team1-end-game-message').textContent = ''
  document.querySelector('.team2-end-game-message').textContent = ''
  document.querySelector('.team-1-score').classList.remove('winner')
  document.querySelector('.team-1-score').classList.remove('loser')
  document.querySelector('.team-2-score').classList.remove('winner')
  document.querySelector('.team-2-score').classList.remove('loser')
}

updateButton1.addEventListener('click', updateTeamName1)
updateButton2.addEventListener('click', updateTeamName2)
addButton1.addEventListener('click', addTeam1)
addButton2.addEventListener('click', addTeam2)
subtractButton1.addEventListener('click', subtractTeam1)
subtractButton2.addEventListener('click', subtractTeam2)
resetButton.addEventListener('click', resetGame)
addPeriod.addEventListener('click', add1Period)
