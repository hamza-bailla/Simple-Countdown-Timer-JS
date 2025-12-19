const startBtn = document.querySelector('#ajouBtn');
const inputNumber = document.querySelector('#timer');
const resetBtn = document.querySelector('#resett');
const pauseBtn = document.querySelector('#pause');
const totalDisplay = document.getElementById('total-display');

startBtn.addEventListener('click', clickhandle);
pauseBtn.addEventListener('click', clickpause);
resetBtn.addEventListener('click', clickreset);  

let horloge = null;    // Stores the interval ID
let compter = 0;       // Stores the remaining seconds


function updateTotalDisplay() {
    totalDisplay.innerText = compter;
}


function clickhandle() {
    
    if (horloge !== null) return;

    
    if (compter <= 0) {
        if (inputNumber.value === "" || inputNumber.value <= 0) {
            alert("Please enter a valid number");
            return;
        }
        compter = parseInt(inputNumber.value);
    }

   
    horloge = setInterval(() => {
        compter--;
        updateTotalDisplay();

        
        if (compter <= 0) {
            clearInterval(horloge);
            horloge = null;
            totalDisplay.innerText = "Time's up!";
        }
    }, 1000);
}


function clickpause() {
    clearInterval(horloge);
    horloge = null; 
}


function clickreset() {
    clearInterval(horloge);
    horloge = null;
    compter = 0;
    inputNumber.value = ""; 
    totalDisplay.innerText = "RESET";
}




