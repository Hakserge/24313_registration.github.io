function validateForm() {
    var firstName = document.getElementById("firstName").value;
    var lastName = document.getElementById("lastName").value;
    var email = document.getElementById("email").value;
    var phone = document.getElementById("phone").value;
    var idPassport = document.getElementById("idPassport").value;
    var dob = document.getElementById("dob").value;
    var sex = document.getElementById("sex").value;
    var nationality = document.getElementById("nationality").value;
    var fatherName = document.getElementById("fatherName").value;
    var motherName = document.getElementById("motherName").value;
    var program = document.getElementById("program").value;
    var faculty = document.getElementById("faculty").value;
    var department = document.getElementById("department").value;
    var isValid = true;

    // Clear existing error messages
    var errorMessages = document.getElementsByClassName("error-message");
    for (var i = 0; i < errorMessages.length; i++) {
        errorMessages[i].style.display = "none";
    }

    // Email validation regular expression
    var emailRegex = /^[A-Za-z0-9._%-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,4}$/;

    // Validate each field
    if (firstName == "") {
        document.getElementById("firstNameError").style.display = "block";
        isValid = false;
    }

    if (lastName == "") {
        document.getElementById("lastNameError").style.display = "block";
        isValid = false;
    }

    if (!email.match(emailRegex)) {
        document.getElementById("emailError").style.display = "block";
        isValid = false;
    }

    if (phone == "") {
        document.getElementById("phoneError").style.display = "block";
        isValid = false;
    }

    if (idPassport == "") {
        document.getElementById("idPassportError").style.display = "block";
        isValid = false;
    }

    if (dob == "") {
        document.getElementById("dobError").style.display = "block";
        isValid = false;
    }

    if (sex == "") {
        document.getElementById("sexError").style.display = "block";
        isValid = false;
    }

    if (nationality == "") {
        document.getElementById("nationalityError").style.display = "block";
        isValid = false;
    }

    if (fatherName == "") {
        document.getElementById("fatherNameError").style.display = "block";
        isValid = false;
    }

    if (motherName == "") {
        document.getElementById("motherNameError").style.display = "block";
        isValid = false;
    }

    if (program == "") {
        document.getElementById("programError").style.display = "block";
        isValid = false;
    }

    if (faculty == "") {
        document.getElementById("facultyError").style.display = "block";
        isValid = false;
    }

    if (department == "") {
        document.getElementById("departmentError").style.display = "block";
        isValid = false;
    }

    if (isValid) {
        alert("Form Submitted Successfully");
    }

    return isValid;
}
