import { update as updateSnake, draw as drawSnake, SNAKE_SPEED, getSnakeHead, snakeIntersection } from './snake.js';
import { update as updateFood, draw as drawFood } from './food.js';
import { outsideGrid } from './grid.js';

/* Set up game speed -
how many times snake moves per second */
let lastRenderTime = 0;

// Initialize game over state
let gameOver = false;

// Get gameBoard Element
const gameBoard = document.querySelector('#game-board');

// Set up a game loop
function main(currentTime) {
  if (gameOver) {
    if(confirm('You lost. Press OK to restart.')) {
      window.location = '/';
    }
    return;
  }

  window.requestAnimationFrame(main);
  const secondsSinceLastRender = (currentTime - lastRenderTime) / 1000;
  if (secondsSinceLastRender < (1 / SNAKE_SPEED)) return;
  lastRenderTime = currentTime;

  update();
  draw();
}

window.requestAnimationFrame(main)

function update() {
  updateSnake();
  updateFood();
  checkDeath();
}

function draw() {
  gameBoard.innerHTML = '';
  drawSnake(gameBoard);
  drawFood(gameBoard);
}

function checkDeath() {
  gameOver = outsideGrid(getSnakeHead()) || snakeIntersection()
}