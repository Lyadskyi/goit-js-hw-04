// * Задача 2. Розрахунок калорій * //

function calcAverageCalories(days) {

	let totalCalories = 0;

	for (const day of days) {
		totalCalories += day.calories;
	} if (days.length === 0) {
		return 0;
	}
	let averageCalories = totalCalories / days.length;
	return averageCalories;
}

console.log(
	calcAverageCalories([
		{ day: "monday", calories: 3010 },
		{ day: "tuesday", calories: 3200 },
		{ day: "wednesday", calories: 3120 },
		{ day: "thursday", calories: 2900 },
		{ day: "friday", calories: 3450 },
		{ day: "saturday", calories: 3280 },
		{ day: "sunday", calories: 3300 }
	])); // 3180

console.log(
	calcAverageCalories([
		{ day: "monday", calories: 2040 },
		{ day: "tuesday", calories: 2270 },
		{ day: "wednesday", calories: 2420 },
		{ day: "thursday", calories: 1900 },
		{ day: "friday", calories: 2370 },
		{ day: "saturday", calories: 2280 },
		{ day: "sunday", calories: 2610 }
	])); // 2270

console.log(
	calcAverageCalories([])); // 0

	// ---------- REMARKS OF THE MENTOR ---------- //

// task-2.js - Well executed moments/Добре виконані моменти //

// Гарне іменування змінних: змінна totalCalories має гарну назву, оскільки чітко описує те, що вона зберігає - загальну кількість
// калорій. Також, параметр days ефективно комунікує те, що він представляє кілька днів.

// Гарне форматування коду: твій код має чітке форматування. Відступи є послідовними, а використання прогалин робить код легким для
// читання.
