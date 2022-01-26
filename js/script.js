console.log("hello Colloquio");
var form = document.querySelector("form");
var phone = document.querySelector("#phone");

form.addEventListener("submit", function(event) {
    event.preventDefault();
    console.log("Form submitted");
    const name = form.name;
    const phone = form.phone;
    const email = form.email;
    const message = form.message;
    const company = form.company;

    validateName(name);
    validateEmail(email);
    validatePhone(phone);
    validateMessage(message);
    validateCompany(company);
});

phone.addEventListener("change", function(){
    validatePhone(phone);
})

function validateName(name){
    const nameElement = document.querySelector("#name");
    if (name.value.length < 1) {
        nameElement.classList.add("invalid");
        nameElement.placeholder = "Write your name and username";
    }else{
        nameElement.classList.remove("invalid");
        nameElement.placeholder = "Name";
    }
}

function validatePhone(phone){
    const phoneElement = document.querySelector("#phone");
    const valid = /^\d+$/.test(phone.value);
    const longEnough = phone.value.length >= 8 && phone.value.length <= 10;
    if (!longEnough || !valid) {
        phoneElement.classList.add("invalid");
        phoneElement.placeholder = "Write your phone number";
    }else{
        phoneElement.classList.remove("invalid");
        phoneElement.placeholder = "Phone";
    }
}

function validateEmail(email){
    const emailElement = document.querySelector("#email");
    const valid = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email.value);
    if (email.value.length < 1 || !valid) {
        emailElement.classList.add("invalid");
        emailElement.placeholder = "Write an email (example@example.com)";
    }else{
        emailElement.classList.remove("invalid");
        emailElement.placeholder = "Email";
    }
}

function validateCompany(company){
    const companyElement = document.querySelector("#company");
    if (company.value.length < 1) {
        companyElement.classList.add("invalid");
        companyElement.placeholder = "Write your company name";
    }else{
        companyElement.classList.remove("invalid");
        companyElement.placeholder = "Company";
    }
}

function validateMessage(message){
    const messageElement = document.querySelector("#message");
    if (message.value.length < 1) {
        messageElement.classList.add("invalid");
        messageElement.placeholder = "Write your message";
    }else{
        messageElement.classList.remove("invalid");
        messageElement.placeholder = "Message";
    }
}