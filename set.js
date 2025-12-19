// const start = document.querySelector('#ajouBtn');
// const inputNumber = document.querySelector('#timer');
// const rest = document.querySelector('#resett');
// const pause = document.querySelector('#pause');
// var valueNum = 0;

// start.addEventListener('click',clickhandle);
// var resiit=0;//variable pour prendre la valeur de Horloge declarer dans clickhandle() et jel'utilise pour clearhandle(horloge);
// var pausee=0;

// // 1. Move 'compter' to the global scope so it remembers its value between clicks
// let compter = 0; 
// let horloge = null; // Store the interval here

// function clickhandle() {
//     // 2. Only pull from input if the counter is currently at 0 (a fresh start)
//     if (compter <= 0) {
//         if (inputNumber.value === "") {
//             alert("Please enter a number");
//             return;
//         }
//         compter = parseInt(inputNumber.value);
//     }

//     // 3. Prevent multiple timers from running at once
//     if (horloge !== null) return; 

//     horloge = setInterval(() => {
//         compter--;
//         console.log("the counter is: " + compter);
        
//         // Update display
//         totalDisplay.innerText = ` ${compter}`;

//         if (compter <= 0) {
//             clearInterval(horloge);
//             horloge = null;
//         }
//     }, 1000);
    
//     // Save the interval ID to resiit so reset/pause work
//     resiit = horloge;
//     function updateTotalDisplay() {
//         totalDisplay.innerText = ` ${compter}`;
//         //pausee = compter;
//     }
// }

// function clickpause() {
//     clearInterval(resiit);
//     horloge = null; // Reset this so the 'Start' button knows it can restart
// } 
    
//     // --- Fonction pour mettre à jour l'affichage (Définissez-la en dehors de clickhandle pour la réutiliser !)
    


// rest.addEventListener('click',clickreset);
// const totalDisplay = document.getElementById('total-display');
// function clickreset(){
//         clearInterval(resiit);
//        totalDisplay.innerText ="Ooops rest clicked";
// }
// //----------------------------------Pause------------------------

// pause.addEventListener('click',clickpause);
// const pauseTostart = resiit;

// function clickpause(){
    
//     clearInterval(resiit);
// };

// if(pause.addEventListener('click',clickpause)){
//     const pauseTostart=setInterval(()=>{
//         newCompter--;
//         //pausee = compter;
//         if(compter === 0 ){
//             clearInterval(pauseTostart);
//         }
//         console.log("the copter is: "+newCompter);
//         updateTotalDisplay();
        
//     },1000);
// }


// 1. Select DOM elements
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



