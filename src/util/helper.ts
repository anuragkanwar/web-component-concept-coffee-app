export const giveRandomPrice = (): number => {
  const items = [245, 240, 235, 230, 265, 260, 250, 235, 200, 300, 280, 275];
  return items[Math.floor(Math.random() * items.length)];
};