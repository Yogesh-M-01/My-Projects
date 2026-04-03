function generatePassword() {
    let chars = "";
    
    if (document.getElementById("uppercase").checked) {
        chars += "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    }
    if (document.getElementById("lowercase").checked) {
        chars += "abcdefghijklmnopqrstuvwxyz";
    }
    if (document.getElementById("numbers").checked) {
        chars += "0123456789";
    }
    if (document.getElementById("symbols").checked) {
        chars += "!@#$%^&*()";
    }

    if (chars === "") {
        alert("Select at least one option");
        return;
    }

    let password = "";
    for (let i = 0; i < 12; i++) {
        password += chars.charAt(Math.floor(Math.random() * chars.length));
    }

    document.getElementById("password").value = password;
}
