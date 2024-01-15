// * Задача 1. Пакування товарів * //

function isEnoughCapacity(products, containerSize) {
	let totalNumberProducts = 0;
	let fruits = Object.values(products);
	for (let things of fruits) {
		totalNumberProducts += things;
	}
	let result = totalNumberProducts <= containerSize ? true : false;
	return result;
}

console.log(isEnoughCapacity({ apples: 2, grapes: 3, carrots: 1 }, 8)); // true
console.log(isEnoughCapacity({ apples: 4, grapes: 6, lime: 16 }, 12)); // false
console.log(isEnoughCapacity({ apples: 1, lime: 5, tomatoes: 3 }, 14)); // true
console.log(isEnoughCapacity({ apples: 18, potatoes: 5, oranges: 2 }, 7)); // false

// ---------- REMARKS OF THE MENTOR ---------- //

// task-1.js - Well executed moments/Добре виконані моменти //

// Гарне іменування змінних: назви змінних totalNumberProducts, fruits і result чітко вказують, що вони представляють.
// Це полегшує читання і розуміння коду.

// Гарне форматування коду: код має чітке форматування зі стандартним відступом і проміжками, що покращує читабельність.
