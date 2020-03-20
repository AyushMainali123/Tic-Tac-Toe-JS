
const buttonsForTicTacToe = document.querySelector('#buttons');
const row1 = document.querySelectorAll('.r1');
const row2 = document.querySelectorAll('.r2');
const row3 = document.querySelectorAll('.r3');
const col1 = document.querySelectorAll('.c1');
const col2 = document.querySelectorAll('.c2');
const col3 = document.querySelectorAll('.c3');
const diag1 = document.querySelectorAll('.d1');
const diag2 = document.querySelectorAll('.d2');

let next = 'O';
const isOccupied = function(target){
    if(target.textContent === '') return false;
    return true;
    
}
const checkWin = (target)=>{
    let flag = 0;
    const prev = (next ==='O')?'X':'O';
    const targetClass = target.className;
    if(target.className.includes('r1')){
        row1.forEach((rowElement)=>{
            if(rowElement !== prev){
                flag = 1;   
            }
        })
        if(flag === 0)return true;
        else flag = 0;
    }
    else if(target.className.includes('r2')){
        row2.forEach((rowElement)=>{
            if(rowElement !== prev){
                flag = 1;   
            }
        })
        if(flag === 0)return true;
        else flag = 0;
    }
    else{
        row3.forEach((rowElement)=>{
            if(rowElement !== prev){
                flag = 1;   
            }
        })
        if(flag === 0)return true;
        else flag = 0;
    }
    if(target.className.includes('c1')){
        col1.forEach((columnElement)=>{
            if(columnElement !== prev){
                flag = 1;   
            }
        })
        if(flag === 0)return true;
        else flag = 0;
    }
    else if(target.className.includes('c2')){
        col2.forEach((columnElement)=>{
            if(columnElement !== prev){
                flag = 1;   
            }
        })
        if(flag === 0)return true;
        else flag = 0;
    }
    else{
        col3.forEach((columnElement)=>{
            if(columnElement !== prev){
                flag = 1;   
            }
        })
        if(flag === 0)return true;
        else flag = 0;
    }
    if(target.className.includes('d1')){
        diag1.forEach((rowElement)=>{
            if(rowElement !== prev){
                flag = 1;   
            }
        })
        if(flag === 0)return true;
        else flag = 0;
    }
    else if(target.className.includes('d2')){
        diag2.forEach((rowElement)=>{
            if(rowElement !== prev){
                flag = 1;   
            }
        })
        if(flag === 0)return true;
        else flag = 0;
    }
    return false;

}
buttonsForTicTacToe.addEventListener('click', (e)=>{
    if(e.target.className.includes('btn')){
        if(isOccupied(e.target))return;
        if(next === 'O'){
            e.target.textContent = 'O';
            if(checkWin(e.target)){
                console.log(`O wins`);
            }
            next = 'X';
            
        }
        else{
            e.target.textContent = 'X';
            if(checkWin(e.target)){
                console.log(`X wins`);
            }
            next = 'O';
            
        }
    }
})