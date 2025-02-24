let currentInput='';
let operator='';
let previousInput='';

function appendNumber(number){
    currentInput +=number;
    document.getElementById('display').value=currentInput;
}

function setOperator(op){
    if(currentInput==='')return;
    if(previousInput !==''){
        calculateResult();
    }
    operator=op;
    previousInput=currentInput;
    currentInput='';
}

function clearDisplay(){
    currentInput='';
    previousInput='';
    operator='';
    document.getElementById('display').value='';
}

function calculateResult(){
    if (previousInput===''||currentInput==='')return;

    let result;
    let prev=parseFloat(previousInput);
    let curr=parseFloat(currentInput);

    switch(operator){
        case '+':
            result=prev+curr;
            break;
        case '-':
            result=prev-curr;
            break;
        case '*':
            result=prev*curr;
            break;

        case '/':
            if(curr===0){
                alert('Cannot divide by zero!');
                return;
            }
            result=prev/curr;
            break;
        default:
            return;
    }
    currentInput=result.toString();
    operator='';
    previousInput='';
    document.getElementById('display').value=currentInput;
}