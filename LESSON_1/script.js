'use strict';

var money,
    time;

money = prompt("Ваш бюджет на месяц?");
time = prompt("Введите дату в формате YYYY-MM-DD");

var appData = {
    budget: money,
    dateTime: time,
    expenses: {},
    optionalExpenses: {},
    income: [],
    savings: false
};

let x1 = prompt("Введите обязательную статью расходов в этом месяце", ''),
	x2 = prompt("Во сколько обойдется?", ''),
	x3 = prompt("Введите обязательную статью расходов в этом месяце", ''),
    x4 = prompt("Во сколько обойдется?", '');
    
appData.expenses[x1] = x2;
appData.expenses[x3] = x4;

alert(appData.budget / 30);
console.log(appData);