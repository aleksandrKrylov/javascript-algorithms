/*
 * Задача 11: «Пересечения массивов»
 *
 * Напишите функцию intersection(arr1, arr2). Она должна принимать
 * на вход два массива целых чисел. Функция должна вернуть новый
 * массив чисел, содержащихся в обоих исходных массивах.
 * 
*/

function intersection(arr1, arr2) {
    // Напишите код здесь
    let uniqueArr1 = [];
    let uniqueArr2 = []
    arr1.map((el) => {
        if(!uniqueArr1.includes(el)) {
            uniqueArr1.push(el);
        }
    })
    arr2.map((el) => {
        if(!uniqueArr2.includes(el)) {
            uniqueArr2.push(el);
        }
    })
    
    return uniqueArr1.filter((el) => arr2.includes(el));
} 

// Протестируйте решение, вызывая функцию с разными аргументами:

console.log(intersection([1, 5, 5, 4, 2], [8, 91, 4, 1, 3])); // [4, 1]
console.log(intersection([1, 5, 4, 2], [7, 12])); // []