// step 1: add click ebent hanlder with the submit button
document.getElementById('btn-submit').addEventListener('click', function(){
    // console.log('kam hoice tawkir')

    // step 2 : get the email address inside the email input field
    //always remeber to use .value to the get text from an input field
    const emailField = document.getElementById('user-email');
    const email = emailField.value;
    // step 3 : get password
    // 3.1 set id on the html element
    // 3.2 get the element
    // 3.3 get the value from the element 

    // console.log(email);
    const passwordField = document.getElementById('user-password');
    const password = passwordField.value;
    // console.log(password);

    // Danger: do not veryfy email password on the client side 
    // step 4: verify email and password and check whether valid user or not
    if(email === 'sontan@baap.com' && password === '12345678'){
        location.href = 'bank.html'
    }else{
        alert('wrong password please try again')
    }
})