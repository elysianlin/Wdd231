function submitForm(event) {
    const nameInput = document.querySelector("#name");
    const emailInput = document.querySelector("#email");
    console.log(this.name.value, this.email.value);
    let error ="";
    if (nameInput.value === "") {
        error =+ "Name is required. ";
    }
    if (emailInput.value === "") {
        error += "Email is required. ";
    }else if (!validateEmail(email)){
        error =+ "Please enter a valid email address. \n";
    }
    if (error) {
        event.preventDefault();
        document.getElementById("form-error").textContent = error;
    } 
}

function validateEmail(email) {
    var re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(email);
}

document.getElementById("contact-form").addEventListener("submit", submitForm);