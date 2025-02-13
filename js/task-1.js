Задача 1. Пакування товарів

function isEnoughCapacity(products, containerSize) {
  // Обчислюємо загальну кількість товарів у контейнері
  const totalProducts = Object.values(products).reduce((sum, quantity) => sum + quantity, 0);
  
  // Перевіряємо, чи загальна кількість не перевищує розмір контейнера
  return totalProducts <= containerSize;
}

// Перевірка коректності роботи функції
console.log(
  isEnoughCapacity({ apples: 2, grapes: 3, carrots: 1 }, 8)
); // true

console.log(
  isEnoughCapacity({ apples: 4, grapes: 6, lime: 16 }, 12)
); // false

console.log(
  isEnoughCapacity({ apples: 1, lime: 5, tomatoes: 3 }, 14)
); // true

console.log(
  isEnoughCapacity({ apples: 18, potatoes: 5, oranges: 2 }, 7)
); // false
