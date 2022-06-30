// Место для первой задачи
function calculateVolumeAndArea(cubeEdgeLength) {
    if (typeof(cubeEdgeLength) === 'number' && cubeEdgeLength > 0 && Number.isInteger(cubeEdgeLength)) {
        var volume = cubeEdgeLength*cubeEdgeLength*cubeEdgeLength;
        var square = 6*cubeEdgeLength*cubeEdgeLength;
        var solution = `Объем куба: ${volume}, площадь всей поверхности: ${square}`;
        
        return solution;
    } else {
        return "При вычислении произошла ошибка";
    }
}

calculateVolumeAndArea(5);





// Место для второй задачи
function getCoupeNumber(placeNumber) {
    if (placeNumber > 0 && placeNumber < 37 && typeof(placeNumber) === 'number' && (placeNumber % 1 == 0) == true) {
        if (placeNumber > 0 && placeNumber < 5) {
            console.log(1);
        }
        if (placeNumber > 4 && placeNumber < 9) {
            console.log(2);
        }
        if (placeNumber > 8 && placeNumber < 13) {
            console.log(3);
        }
        if (placeNumber > 12 && placeNumber < 17) {
            console.log(4);
        }
        if (placeNumber > 16 && placeNumber < 21) {
            console.log(5);
        }
        if (placeNumber > 20 && placeNumber < 25) {
            console.log(6);
        }
        if (placeNumber > 24 && placeNumber < 29) {
            console.log(7);
        }
        if (placeNumber > 28 && placeNumber < 33) {
            console.log(8);
        }
        if (placeNumber > 32 && placeNumber < 37) {
            console.log(9);
        }
    }
    
    if (typeof(placeNumber) !== 'number' || placeNumber < 0 || (placeNumber % 1 == 0) == false) {
        console.log("Ошибка. Проверьте правильность введенного номера места");
    }

    if (placeNumber == 0 || placeNumber > 36 && (placeNumber % 1 === 0) === true) {
        console.log("Таких мест в вагоне не существует");
    }
}

getCoupeNumber(37);


// Место для первой задачи
function getTimeFromMinutes(minute) {
    if (typeof(minute) === 'number' && Number.isInteger(minute) === true && minute > 0 && minute >= 600) {
        let a = minute % 10;
        if (minute < 60) {
            return `Это 0 часов и ${minute}`;
        }
    }

} 

getTimeFromMinutes(150);


function findMaxNumber(a, b, c, d) {
    if (a < b && a < c && a < d) {
        return a;
    }

    if (b < a && b < c && b < d) {
        return b;
    }

    if (c < a && c < b && c < d) {
        return c;
    }

    if (d < b && d < c && d < a) {
        return d;
    }
}

findMaxNumber(3, 9, 19, 12);



function fib(fiba) {

}

fib(5);