var contactNumber = document.getElementById('contact_number');
var fullName = document.getElementById('full_name');
var userEmail = document.getElementById('user_email');
var demoForm = document.getElementById('demo_form');
let conditionArray = [0, 0, 1];

contactNumber.addEventListener('keyup', (e) => {
    document.getElementById('contact_number_label').style.color = e.target.value.length !== 10 ? "red" : "black";
    document.getElementById('contact_number_error_message').style.display = e.target.value.length !== 10 ? "inline-block" : "none";
    document.getElementById('contact_number').style.border = e.target.value.length !== 10 ? "1px solid red" : "1px solid lightgray";
})

contactNumber.addEventListener('focusin', (e) => {
    document.getElementById('contact_number_label').style.display = "inline-block";
})
contactNumber.addEventListener('focusout', (e) => {

    if (e.target.value.length === 0) {
        document.getElementById('contact_number_label').style.display = "none";
        conditionArray[0] = 0;
    } else if (e.target.value.length === 10) {
        conditionArray[0] = 1;
    } else {
        conditionArray[0] = 0;
    }
    const product = conditionArray[0] * conditionArray[1] * conditionArray[2];
    if (product === 1) {
        document.getElementById('demo_form_button').style.opacity = 1;
    } else if (product === 0) {
        document.getElementById('demo_form_button').style.opacity = 0.5;
    }
})


// Full Name
fullName.addEventListener('keyup', (e) => {
    document.getElementById('full_name_label').style.color = e.target.value.length <= 3 ? "red" : "black";
    document.getElementById('full_name_error_message').style.display = e.target.value.length <= 3 ? "inline-block" : "none";
    document.getElementById('full_name').style.border = e.target.value.length <= 3 ? "1px solid red" : "1px solid lightgray";
})

fullName.addEventListener('focusin', (e) => {
    document.getElementById('full_name_label').style.display = "inline-block";
})
fullName.addEventListener('focusout', (e) => {
    if (e.target.value.length === 0) {
        document.getElementById('full_name_label').style.display = "none";
        conditionArray[1] = 0;

    } else if (e.target.value.length > 3) {
        conditionArray[1] = 1;
    } else {
        conditionArray[1] = 0;
    }
    const product = conditionArray[0] * conditionArray[1] * conditionArray[2];
    if (product === 1) {
        document.getElementById('demo_form_button').style.opacity = 1;
    } else if (product === 0) {
        document.getElementById('demo_form_button').style.opacity = 0.5;
    }

})


// User Email 
userEmail.addEventListener('keyup', (e) => {
    var isValidEmail = userEmail.checkValidity();
    document.getElementById('user_email_label').style.color = !isValidEmail ? "red" : "black";
    document.getElementById('user_email_error_message').style.display = !isValidEmail ? "inline-block" : "none";
    document.getElementById('user_email').style.border = !isValidEmail ? "1px solid red" : "1px solid lightgray";
})

userEmail.addEventListener('focusin', (e) => {
    document.getElementById('user_email_label').style.display = "inline-block";
})
userEmail.addEventListener('focusout', (e) => {
    if (e.target.value.length === 0) {
        document.getElementById('user_email_label').style.display = "none";
    }
    const product = conditionArray[0] * conditionArray[1] * conditionArray[2];
    if (product === 1) {
        document.getElementById('demo_form_button').style.opacity = 1;
    } else if (product === 0) {
        document.getElementById('demo_form_button').style.opacity = 0.5;
    }
})



// Number input
function isNumber(evt) {
    evt = (evt) ? evt : window.event;
    var charCode = (evt.which) ? evt.which : evt.keyCode;
    if (charCode > 31 && (charCode < 48 || charCode > 57)) {
        return false;
    }
    return true;
}


