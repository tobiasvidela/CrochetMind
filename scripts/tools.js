'use strict';
//REGULAR RAISES
const ListOfPatterns = document.querySelector('.patterns'),
      start = document.querySelector('#start'),
      end = document.querySelector('#end'),
      eye = document.querySelector('#pattern-toggle-view'),
      btnHelp = document.querySelector('#pattern-help'),
      result = document.querySelector('.pattern-result'),
      btnGenerator = document.querySelector('.pattern-generator');

btnGenerator.addEventListener('click',() => {
    let startPoints = Number(start.value),
        endPoints = Number(end.value),
        patterns = ListOfPatterns.value;

    let pattern = ``;

    switch (patterns) {
        case 'spiral':
            pattern = getRegularPattern(startPoints, endPoints, 'spiral');
            break;
            case 'circle':
            pattern = getRegularPattern(startPoints, endPoints, 'circle');
            break;
        case 'square':
            pattern = getRegularPattern(startPoints, endPoints, 'square');
            break;
        case 'triangle':
            pattern = getRegularPattern(startPoints, endPoints, 'triangle');
            break;
    };
    
    return result.innerHTML = pattern;
});

function getRegularPattern(initial, final, pat) { //get pattern with regular raises and regular decreases
    //create an output
    let output = ``;
    // obtain pattern with regular raises and join it to the output
    output += getRegularRaises(initial, final, pat);

    //create transition pattern

    // obtain pattern with reuglar decreases

    return output;
};

function getRegularRaises(initial, final, pat) { //get the pattern of regular raises
    //validate start points and end points
    if (!validatePoints(initial, final, pat)) {
        return console.error('Incorrect values.');
    };

    //starting points
    let regularRaises = `0 ~ Anillo Mágico ~ <br>1 ~ ${initial} sc [${initial}] ~ (start)<br>`;

    //get points for the pattern
    if (pat === 'spiral') {
        regularRaises += getSpiralRaises(initial, final);
    };
    if (pat === 'circle') {
        regularRaises += getCircleRaises(initial, final);
    }
    if (pat === 'square') {
        regularRaises += getSquareRaises(initial, final);
    }
    if (pat === 'triangle') {
        regularRaises += getTriangleRaises(initial, final);
    };

    return regularRaises;
};

function getSpiralRaises(initial, final) {
    
    let spiralRaises = `2 ~ (1 inc)*${initial} [${initial * 2}] ~<br>`;

    if (final == initial * 2) {
        return spiralRaises;
    };
    
    let acum = initial;
    
    //generate raises until final points are reached
    for (let i = 3, sc = 1; acum < final; i++) { // sc stands for single crochet quantity
        acum = initial * i;
        spiralRaises += `${i} ~ (${sc} sc, inc)*${initial} [${initial * i}] ~<br>`;
        sc++;
    };

    return spiralRaises;
};

function getCircleRaises(initial, final) { //get spiral raises with compensations
    
    let circleRaises = `2 ~ (1 inc)*${initial} [${initial * 2}] ~<br>`;

    if (final == initial * 2) {
        return circleRaises;
    };
    
    circleRaises += `3 ~ (inc, ${initial} sc)*${initial} [${initial * 3}] ~<br>`;
    
    if (final == initial * 3) {
        return circleRaises;
    };

    let acum = initial, c = 1; //c stands for uneven rows compensation singlecrochets

    for (let i = 4, sc = 2; acum < final; i++) {
        acum = initial * i;
        if (i % 2 == 0) {
            circleRaises += `${i} ~ (${sc} sc, inc)*${initial} [${initial * i}] ~<br>`;
        } else {
            circleRaises += `${i} ~ ${c} sc, (${sc} sc, inc)*${initial-1}, inc, ${c+1} sc [${initial * i}] ~<br>`;
            c++;
        };
        sc++;
    };

    return circleRaises;
};

function getSquareRaises(initial, final) { //initial === 4
    let squareRaises = `2 ~ ${initial} inc+ [${initial * 3}] ~<br>`; //inc+ stands for 3 sc in one stich

    if (final <= initial * 3) {
        return squareRaises;
    };

    let acum = 0;

    for (let i = 3, sc = 1; acum < final; i++) {
        let total = sc * 2 + ((sc * 2) + 3) * 3 + 3;
        acum = total;
        squareRaises += `${i} ~ ${sc} sc, 1 inc+, (${sc * 2} sc, 1 inc+)*3, ${sc} sc [${total}] ~<br>`;

        end.value = total;
        sc++;
    };

    swal({
        icon: 'info',
        title: 'W.I.P.',
        text: 'This feature is under development, please comment in the Feedback page any issue detected while using this.',
    });

    return squareRaises;
};

function getTriangleRaises(initial, final) { //initial % 3 === 0
    let triangleRaises = `2 ~ (1 sc, 1 inc+)*${(initial * 2 ) / 3} [${(initial * 2)}] ~<br>`;

    if (final == initial * 2) {
        return triangleRaises;
    }

    let acum = 0, c = 2, cc = 1; // c and cc stands for compensations

    for (let i = 3; acum < final; i++) {
        let total = initial * i, around = c + cc + 3;
        acum = total;

        triangleRaises += `${i} ~ ${c} sc, 1 inc+, (${(total - around - 6) / 2} sc,1 inc+)*2 ${cc} sc [${total}] ~<br>`;

        c++;
        cc++;
    };


    swal({
        icon: 'info',
        title: 'W.I.P.',
        text: 'This feature is under development, please comment in the Feedback page any issue detected while using this.',
    });

    return triangleRaises;
};

function validatePoints(initial, final, pat) { //validate points entered
    if (initial < 0 || final < 0) {
        swal({
            icon: 'error',
            text: 'Points can\'t be negative.',
            buttons: false,
            timer: 4200,
        });
        return false;
    };
    if (initial == 0 || final == 0) {
        swal({
            icon: 'error',
            text: 'Points can\'t be 0 (zero).',
            buttons: false,
            timer: 4200,
        });
        return false;
    };
    if (final % initial != 0) {
        swal({
            icon: 'error',
            text: 'Final points must be a multiple of start points.',
            buttons: false,
            timer: 4200,
        });
        return false;
    };
    if (initial == final) {
        swal({
            icon: 'error',
            text: 'Points can\'t be the same.',
            buttons: false,
            timer: 4200,
        });
        return false;
    };
    if (initial < 3) {
        swal({
            icon: 'error',
            text: 'Start value must be 3 (three) or greater.',
            buttons: false,
            timer: 4200,
        });
        return false;
    }
    if (initial > 100) {
        swal({
            icon: 'warning',
            text: '🤨 What? 🤔 Really?? OK...🤐',
            buttons: false,
            timer: 2000,
        });
        return true;
    };
    if (pat == 'square') {
        if (initial != 4) {
            swal({
                icon: 'error',
                text: 'Start value must be 4 (four).',
                buttons: false,
                timer: 4200,
            });
            return false;
        };
    };
    if (pat == 'triangle') {
        if (initial != 6) {
            swal({
                icon: 'error',
                text: 'Start value must be 6 (six).',
                buttons: false,
                timer: 4200,
            });
            return false;
        };
    };

    return true;
};

function fixEnd() { //adapts end points to be proportional to start points
    let startValue = Number(start.value);
    end.setAttribute('min',startValue); //make min-value of end equals startValue
    
    let endMin = end.getAttribute('min')
    end.setAttribute('step', startValue); //make values ​​of end multiples of start

    let difference = end.value % endMin;
    end.value -=  difference;
};
start.onclick = () => { 
    fixEnd()
};
end.onclick = () => {
    fixEnd()
};