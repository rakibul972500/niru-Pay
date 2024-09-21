// console.log('connected')
document.getElementById('btn-login').addEventListener('click', function(event){
    // console.log('login clicked');
    event.preventDefault();
    // get phone number
    const phoneNumber= document.getElementById('phn-numb').value;
    const pinNumber=document.getElementById('pin-numb').value;
    console.log(phoneNumber, pinNumber);
    //cheaking phnone and pin
    if(phoneNumber==='01706' && pinNumber==='1234'){
        // console.log('logged in');
        window.location.href='/home.html'
    }else{
        alert('Wrong Phone or Pin');
    }

})
