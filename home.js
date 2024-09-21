
// add money to the acccount
document.getElementById('btn-add-money').addEventListener('click', function(event){
    event.preventDefault();
  //get add money input
  const addMoneyInput=document.getElementById('add-money-input').value ;
  const inputPin=document.getElementById('input-pin').value;
  console.log(addMoneyInput,inputPin);

  if(inputPin==='1234'){
    //get current balance
    const balance=document.getElementById('account-balance').innerText;
    const newBalance= parseFloat(addMoneyInput) + parseFloat(balance) ;
    console.log('new balance:',newBalance);
  }

})