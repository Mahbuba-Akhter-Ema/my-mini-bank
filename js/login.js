// step-1: add click event handler with the submit button!

document.getElementById('submit-btn').addEventListener('click', function () {
    // console.log('btn clicked');
  
    // step-2: get the email address insite the email input field
    // always remember to use .value to get text from a input field
    
    const emailField = document.getElementById('user-email');
    const email = emailField.value;
    // console.log(email);

    // step-3: get password
    // 3.a: set id on the html element
    // 3.b: get the element
    // 3.c: get the value from the element

    const passwordField = document.getElementById('user-password');
    const password = passwordField.value;
    // console.log(password);
    // Danger: Do not Varify Email address on the client side
    // step-4: varify email and password
    if (email === 'mahdiyah@gmail.com' && password === 'Maya') {
        // console.log('valid user');
        window.location.href = 'bank.html'
    }
    else{
        alert('Tui password vule gesos!! toke teijjo shontan gushona korlam.');
    }
})
