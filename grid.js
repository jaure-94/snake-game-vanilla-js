const GRID_SIZE = 21;

export function randomGridPosition() {
  return {
    x: Math.ceil(Math.random() * GRID_SIZE),
    y: Math.ceil(Math.random() * GRID_SIZE)
  }
}