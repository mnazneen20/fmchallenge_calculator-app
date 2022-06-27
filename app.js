// claculator operations


const display = document.querySelector('.display')
let currentValue = ''
display.innerText = currentValue;
const btns = document.querySelectorAll('button')
btns.forEach(x => {
    x.addEventListener('click', (e)=>{
        let pressedbtn = e.target.innerText;
        if(pressedbtn == 'x'){
            pressedbtn = '*';
            currentValue += pressedbtn;
            display.innerText = currentValue;
        } else if (pressedbtn == 'DEL'){
            const nowval = currentValue;
            currentValue = nowval.slice(0, -1);
            display.innerText = currentValue;
        } else if (pressedbtn == 'RESET'){
            currentValue = ''
            display.innerText = currentValue;
        } else if (pressedbtn == '='){
            let calculate;
            try {
                calculate = eval(currentValue);
                if(calculate == undefined){
                    display.innerText = 'SYNTAX ERROR';
                    currentValue = '';
                } else{
                    currentValue = calculate
                    display.innerText = currentValue;
                }
              }
              catch(err) {
                display.innerText = 'SYNTAX ERROR';
                currentValue = '';
              }   
        } else {
            currentValue += pressedbtn
            display.innerText = currentValue;
        }
    })
})

// ^
// claculator operations



// toggle display changes

// getting previously saved theme if any from the local storage
let prefferedTheme = localStorage.getItem('theme')

let themeval;

if (prefferedTheme){
    themeval = prefferedTheme
} else {
    themeval = '1';
}

const mainElement = document.querySelector('main')

if(themeval == '1'){
    mainElement.classList.add('theme1')
} else if(themeval == '2'){
    mainElement.classList.add('theme2')
} else if (themeval == '3'){
    mainElement.classList.add('theme3')
}

const toggler = document.querySelector('.toggler-btn');
toggler.addEventListener('click', () => {
    if (themeval == '1'){
        mainElement.classList.remove('theme1');
        mainElement.classList.add('theme2');
        themeval = '2';
        // saving the desired theme in the local storage
        localStorage.setItem('theme', themeval)
    } else if (themeval == '2'){
        mainElement.classList.remove('theme2')
        mainElement.classList.add('theme3')
        themeval = '3';
        // saving the desired theme in the local storage
        localStorage.setItem('theme', themeval)
    } else if (themeval == '3'){
        mainElement.classList.remove('theme3')
        mainElement.classList.add('theme1')
        themeval = '1';
        // saving the desired theme in the local storage
        localStorage.setItem('theme', themeval)
    }
})
