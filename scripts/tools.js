'use stric';
//REGULAR RAISES
const patterns = document.querySelector('.patterns'),
      start = document.querySelector('#start'),
      end = document.querySelector('#end'),
      eye = document.querySelector('#pattern-toggle-view'),
      btnHelp = document.querySelector('#pattern-help'),
      result = document.querySelector('.pattern-result'),
      btnGenerator = document.querySelector('.pattern-generator');


      
      
btnGenerator.addEventListener('click',() => {
    let startPoints = start.value,
        endPoints = end.value;
    console.log(start);

    let pattern = ``;

    switch (patterns) {
        case 'spiral':
            pattern = getPattern(startPoints, endPoints, 'spiral');
            break;
        case 'circle':
            pattern = getPattern(startPoints, endPoints, 'circle');
            break;
        case 'square':
            pattern = getPattern(startPoints, endPoints, 'square');
            break;
        case 'triangle':
            pattern = getPattern(startPoints, endPoints, 'triangle');
            break;
    };
    

    return result.innerHTML = pattern;
});

function getPattern(initial, final, pat) { //get the pattern of regular raises
    let raises = `0 ~ Anillo Mágico ~ <br>`;
    return raises;
}

function fixEnd() { //adapts end points to be proportional to start points
    let startValue = Number(start.value);
    end.setAttribute('min',startValue); //make min-value of end equals startValue
    
    let endMin = end.getAttribute('min')
    end.setAttribute('step', startValue); //make values ​​of end multiples of start

    let difference = end.value % endMin;
    end.value -=  difference;
}
start.onclick = () => { 
    fixEnd()
}
end.onclick = () => {
    fixEnd()
};