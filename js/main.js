//  Задачи для решения
// 1.
// var arr = ['привет, ', 'мир', '!'];
// var phrase = arr.join(''); 
// console.log(phrase);

// 2.
// var arr = ['привет, ', 'мир', '!'];
// var text = arr.join('');
// console.log(text);

// 3.
// var arr = ['привет, ', 'мир', '!'];
// arr[0] = 'пока, ';
// console.log(arr);

// 4.
// var obj = {
//     "пупупу": 1000,
//     "пампампам": 1500
// };
// console.log(obj["пупупу"]);
// console.log(obj["пампампам"]);

// 5.

//  Работа с массивами
// var arr = ['a', 'b', 'c'];

// alert(arr);

// alert(arr[0]);
// alert(arr[1]);
// alert(arr[2]);

// arr = ['a', 'b', 'c', 'd'];

// alert(arr[0] + '+' + arr[1] + ', ' + arr[2] + '+' + arr[3]);

// arr = [2, 5, 3, 9];

// var result = arr[0] * arr[1] + arr[2] * arr[3];

// alert(result);

//  Объекты (ассоциативные массивы)
// var obj = {a: 1, b: 2, c: 3};
// console.log(obj['c']);      
// console.log(obj.c);        

// var obj = {Коля: '1000', Вася: '500', Петя: '200'};
// console.log(obj['Петя']);  
// console.log(obj['Коля']);   

// var daysOfWeek = {1: 'понедельник', 2: 'вторник', 3: 'среда', 4: 'четверг', 5: 'пятница', 6: 'суббота', 7: 'воскресенье'};
// var currentDayOfWeek = new Date().getDay();
// console.log(daysOfWeek[currentDayOfWeek + 1]);

// var day = 3;
// console.log(daysOfWeek[day]);

// Многомерные массивы
// 1.
// let array = [[1, 2, 3], [4, 5, 6], [7, 8, 9]];
// console.log(array[1][0]);

// // 2.
// let obj = {js: ['jQuery', 'Angular'], php: 'hello', css: 'world'};
// console.log(obj.js[0]);

// // 3.
// let days = {
//     ru: ['понедельник', 'вторник', 'среда', 'четверг', 'пятница', 'суббота', 'воскресенье'],
//     en: ['monday', 'tuesday', 'wednesday', 'thursday', 'friday', 'saturday', 'sunday']
//     };
//     console.log(days.ru[0]);
//     console.log(days.en[2]);
  
// // 4.
// let lang = 'ru';
// let day = 3;
// let days = {
//   ru: ['понедельник', 'вторник', 'среда', 'четверг', 'пятница', 'суббота', 'воскресенье'],
//   en: ['monday', 'tuesday', 'wednesday', 'thursday', 'friday', 'saturday', 'sunday']
// };

// if (lang === 'ru') {
//   console.log(days.ru[day]);
// } else if (lang === 'en') {
//   console.log(days.en[day]);
// }

