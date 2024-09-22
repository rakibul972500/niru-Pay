// console.log('lege geche angta')

//taking access of cash out button
document.getElementById('btn-cashout-money').addEventListener('click', function(event){
    event.preventDefault();
const inputAmount=document.getElementById('cashout-money-input').value ;
const pinNumber=document.getElementById('cashout-input-pin').value;
console.log(inputAmount,pinNumber);

if(pinNumber==='1234'){
    console.log('cash out processing....')
    const prevBalance=document.getElementById('account-balance').innerText;
    const currentBalance=parseFloat(prevBalance)-parseFloat(inputAmount);
    console.log('new balance:', currentBalance);
}else{
    alert('invalid pin or number');
}
});