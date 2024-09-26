'use strict';

// 1 task

    let salaries = { 
        John: 100, 
        Ann: 160, 
        Pete: 130 
    } 
    
    let sum = Object.values(salaries).reduce((sum, item) => sum + item, 0) 
    alert(sum);

// 2 task

    function multiplyNumeric(obj) {
        for (let key in obj) {
            if (typeof (obj[key]) == 'number') {
                obj[key] *= 2;
            }
        }
    }
    let menu = {
        width: 200,
        height: 300,
        title: "My menu"
    };
    multiplyNumeric(menu)
    console.log(menu)


// 3 task 

    let calculator = {
        read() {
            this.a = +prompt("Введите первое число:", 0); 
            this.b = +prompt("Введите второе число:", 0); 
        },


        sum() {
            return this.a + this.b;
        },

        mul() {
            return this.a * this.b;
        }
    };
    calculator.read(); 
    alert(calculator.sum()); 
    alert(calculator.mul()); 


// 4 task

    function extractCurrencyValue(str) {
        return +str.slice(1);
    }
    console.log(extractCurrencyValue('$120'));

//  5 task

    let vasya = { name: "Вася", age: 25 };
    let petya = { name: "Петя", age: 30 };
    let masha = { name: "Маша", age: 28 };
    let users = [ vasya, petya, masha ];
    let names = users.map(user => user.name);
    console.log(names); 

// 6 task

    let vanya = { name: "Вася", age: 25 };
    let marina = { name: "Петя", age: 30 };
    let oleg = { name: "Маша", age: 8 };
    let usersAge = [vanya, marina, oleg];
    function getAverageAge(users) {
    let totalAge = users.reduce((sum, user) => sum + user.age, 0);
    return totalAge / usersAge.length;
    }
    console.log(getAverageAge(usersAge));