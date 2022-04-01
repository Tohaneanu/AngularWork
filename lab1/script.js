function takeData() {
    var check = true;
    let value = document.getElementById('name').value;
    if (/\d/.test(value)) {
        let input = document.getElementById('name');
        input.style.borderBlockColor = "red";
        check = false;
    } else {
        let input = document.getElementById('name');
        input.style.borderBlockColor = "gray";
    }

    value = document.getElementById('lastName').value;
    if (/\d/.test(value)) {
        let input = document.getElementById('lastName');
        input.style.borderBlockColor = "red";
        check = false;
    } else {
        let input = document.getElementById('lastName');
        input.style.borderBlockColor = "gray";
    }
    value = document.getElementById('email').value;
    if (!value.includes("@") || !value.includes(".com")) {
        let input = document.getElementById('email');
        input.style.borderBlockColor = "red";
        check = false;
    } else {
        let input = document.getElementById('email');
        input.style.borderBlockColor = "gray";
    }
    value = document.getElementById('pass').value;
    let regex = new RegExp("^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,}$");
    if (value.length<8 || regex.test(value)) {
        let input = document.getElementById('pass');
        input.style.borderBlockColor = "red";
        check = false;
    } else {
        let input = document.getElementById('pass');
        input.style.borderBlockColor = "gray";
    }
    let value2 = document.getElementById('pass1').value;
    if (value !== value2) {
        console.log(value)
        console.log(value2)
        let input = document.getElementById('pass');
        input.style.borderBlockColor = "red";
        input = document.getElementById('pass1');
        input.style.borderBlockColor = "red";
        check = false;
    } else {
        let input = document.getElementById('pass');
        input.style.borderBlockColor = "gray";
        input = document.getElementById('pass1');
        input.style.borderBlockColor = "gray";
    }

    if (check) {
        let obj = {
            firstName: document.getElementById("name").value,
            lastName: document.getElementById("lastName").value,
            date: document.getElementById("date").value,
            city: document.getElementById("city").value,
            email: document.getElementById("email").value,
            password: document.getElementById("pass").value,
            pineapple: document.getElementById("pineapple").value,
            agree: document.getElementById("checkbox1").value,
            news: document.getElementById("checkbox2").value
        };
        console.log(obj);
    }

}