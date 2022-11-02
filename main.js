"use strict"

function solveEquation(a, b, c) {

    let discriminant = Math.pow(b ^ 2 - 4 * a * c);
    let answer = [];

    if (discriminant < 0) {
        answer = [];
    } else if (discriminant = 0) {
        return answer.push(-b / (2 * a));
    } else if ((discriminant > 0)) {
        return answer.push((-b + Math.sqrt(d)) / (2 * a), (-b - Math.sqrt(d)) / (2 * a));
    }


    console.log(answer);
}


solveEquation(5, 5, 5);
