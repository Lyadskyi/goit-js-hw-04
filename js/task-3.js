// * Задача 3. Профіль гравця * //

const profile = {
	username: 'Jacob',
	playTime: 300,
	changeUsername(newName) {
		this.username = newName;
	},
	updatePlayTime(hours) {
		this.playTime += hours;
	},
	getInfo() {
		return `${this.username} has ${this.playTime} active hours!`;
	},
};

console.log(profile.getInfo()); // "Jacob has 300 active hours!"
profile.changeUsername('Marco');
console.log(profile.getInfo()); // "Marco has 300 active hours!"
profile.updatePlayTime(20);
console.log(profile.getInfo()); // "Marco has 320 active hours!"

// ---------- REMARKS OF THE MENTOR ---------- //

// task-3.js - Well executed moments/Добре виконані моменти //

// Гарне найменування змінних: об'єкт профілю має хорошу назву, чітко відображає, для чого призначений об'єкт.
// Властивості username і playTime є описовими і роблять код легко зрозумілим.

// Гарне форматування коду: ваш код правильно відформатований, що робить його чистим і зрозумілим.

// Ефективне використання ключового слова this: ви правильно використовуєте ключове слово this для посилання на поточний
// екземпляр об'єкта в ваших методах, що є важливим для доступу і зміни властивостей об'єкта.
