// 1. Numbers sorting and mapping
const numbers: number[] = [40, 34, 5, 100, 6];

console.log(numbers.sort((a, b) => a - b));

// Imperative approach
const doubledImperative: number[] = [];
for (let i = 0; i < numbers.length; i++) {
  doubledImperative.push(numbers[i] * 2);
}

// Declarative approach
const doubledDeclarative: number[] = numbers.map(num => num * 2);


// 2. Prices filtering
const prices: number[] = [100, 250, 80, 400];
const expensivePrices: number[] = [];

// Imperative approach
for (let i = 0; i < prices.length; i++) {
  if (prices[i] > 150) {
    expensivePrices.push(prices[i]);
  }
}

// Declarative approach
const expensivePricesDeclarative: number[] = prices.filter(price => price > 150);


// 3. Objects filtering (Students)
interface Student {
  name: string;
  average: number;
}

const students: Student[] = [
  { name: "Juan", average: 85 },
  { name: "Luis", average: 67 },
  { name: "Sara", average: 92 },
];

const topStudents: Student[] = students.filter(student => student.average > 80);
console.log(topStudents);