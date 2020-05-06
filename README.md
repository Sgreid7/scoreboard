# Scoreboard

This is a web app build with JavaScript that allows us to keep track of the score of two teams up to 21 at which the team will win. You may increment up to 3 periods and reset the game with the reset button

# Objectives

- Become familiar with DOM element selection
- Work with event listeners
- Add classes via Javascript

# Includes

- [HTML](https://developer.mozilla.org/en-US/docs/Web/HTML)
- [CSS](https://developer.mozilla.org/en-US/docs/Web/CSS)
- [JAVASCRIPT](https://developer.mozilla.org/en-US/docs/Web/JavaScript)

# Requirements

- Implement the design using the given HTML & CSS.
- Assign click events to the update buttons to update the corresponding values on the page. - The score buttons should adjust the current score by a "hard-coded" value
- Add an if statement to stop each team's score from going below 0.
- Add an if statement to stop each team's score from going above 21
- When a team gets 21 points, disable the buttons and display a message to the user of who won
- Add a reset button that resets the scoreboard back to each team having 0 points and re-enables the buttons
- Add more CSS to the winning teams score to indicate who won
- Implement a Quarter/Period Tracker

# Featured Code

```JSX
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
```

# Live Site

- [LIVE SITE](https://scoreboard-sam.netlify.app/)
