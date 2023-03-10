
document.getElementById('submit').addEventListener("click",function(event){
    event.preventDefault();


    var firstName = document.getElementById('first-name');
    var lastName = document.getElementById('last-name');
    var emailAddress = document.getElementById('email-address');
    var contactNumber = document.getElementById('contact-number');
    var pinCode = document.getElementById('pin-code');
    var cardNumber = document.getElementById('card');
    var cardExpiry = document.getElementById('expiry');
    var cvvNumber = document.getElementById('cvv-number');

    var firstNameValue = firstName.value.trim();
    var lastNameValue = lastName.value.trim();
    var emailAddressValue = emailAddress.value.trim();
    var contactNumberValue = contactNumber.value.trim();
    var pinCodeValue = pinCode.value.trim();
    var cardNumberValue = cardNumber.value.trim();
    var cardExpiryValue = cardExpiry.value.trim();
    var cvvNumberValue = cvvNumber.value.trim();

    
    if(firstNameValue.length < 1 || firstNameValue.length > 30){
        document.getElementById('error-first-name').innerHTML = "First Name is not valid";
        firstName.style.borderColor = '#a80001';

    }

    if(firstNameValue == ""){
        document.getElementById('error-first-name').innerHTML = "First Name is required";
        firstName.style.borderColor = '#a80001';
    }

    if(lastNameValue.length < 1 || lastNameValue.length > 30){
        document.getElementById('error-last-name').innerHTML = "Last Name is not valid";
        lastName.style.borderColor = '#a80001';

    }

    if(lastNameValue == ""){
        document.getElementById('error-last-name').innerHTML = "Last Name is required";
        lastName.style.borderColor = '#a80001';
    }

    if((emailAddressValue.indexOf("@gmail.com") == -1) || emailAddressValue.length > 50){
        document.getElementById('error-email').innerHTML = "Email Address is not valid";
        emailAddress.style.borderColor = '#a80001';

    }

    if(emailAddressValue == ""){
        document.getElementById('error-email').innerHTML = "Email is required";
        emailAddress.style.borderColor = '#a80001';
    }

    if(contactNumberValue.length < 10 || contactNumberValue.length > 10){
        document.getElementById('error-contact').innerHTML = "Contact number is not valid";
        contactNumber.style.borderColor = '#a80001';

    }

    if(contactNumberValue == ""){
        document.getElementById('error-contact').innerHTML = "Contact Number is required";
        contactNumber.style.borderColor = '#a80001';
    }

    if(pinCodeValue.length < 6 || pinCodeValue.length > 6){
        document.getElementById('error-pin').innerHTML = "PIN Code is not valid";
        pinCode.style.borderColor = '#a80001';

    }

    if(pinCodeValue == ""){
        document.getElementById('error-pin').innerHTML = "PIN code is required";
        pinCode.style.borderColor = '#a80001';
    }

    if(cardNumberValue.length < 16 || cardNumberValue.length > 16){
        document.getElementById('error-card-no').innerHTML = "Card Number is not valid";
        cardNumber.style.borderColor = '#a80001';

    }

    if(cardNumberValue == ""){
        document.getElementById('error-card-no').innerHTML = "Card Number is required";
        cardNumber.style.borderColor = '#a80001';
    }

    if(cardExpiryValue < 2023){
        document.getElementById('error-card-expiry').innerHTML = "Card Expiry is not valid";
        cardExpiry.style.borderColor = '#a80001';

    }

    if(cardExpiryValue == ""){
        document.getElementById('error-card-expiry').innerHTML = "Card Expiry is required";
        cardExpiry.style.borderColor = '#a80001';
    }

    if(cvvNumberValue.length < 3 || cvvNumberValue.length > 4){
        document.getElementById('error-cvv').innerHTML = "CVV is not valid";
        cvvNumber.style.borderColor = '#a80001';

    }

    if(cvvNumberValue == ""){
        document.getElementById('error-cvv').innerHTML = "CVV is required";
        cvvNumber.style.borderColor = '#a80001';
    }


});
