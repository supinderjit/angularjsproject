function registrationValidaton() {
    var fname = document.registrationForm.fname.value;
    var mname = document.registrationForm.mname.value;
    var lname = document.registrationForm.lname.value;
    var email = document.registrationForm.email.value; var email = document.registrationForm.email.value;
    fi = email.indexOf("@");
    li = email.lastIndexOf(".");
    var password = document.registrationForm.password.value;
    var cpassword = document.registrationForm.cpassword.value;

    if (fname.length < 5 || fname.length > 20) {
        alert(" first name should be more than 5 charecters");
        return false;


    }
    if (mname.length < 5 || fname.length > 20) {
        alert("middle name should be more than 5 charecters");
        return false;
    }
    if (lname.length < 5 || lname.length > 20) {
        alert("last name should be more than 5 charecters");
        return false;

    }

    if(password.length<8){
        alert("Password must be at least 8 characters");
        return false;
    }
    if(password.length==cpassword.length){
        alert("same password");
        return false;
    }


}