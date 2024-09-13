let password = prompt("Enter the Password")

if((password.length >= 6) & (/\d/.test(password)) & (/[a-z]/.test(password)) & (/[A-Z]/.test(password))){
    alert("Congratulation! You have match the Criteria")
}
else if(password.length < 6) {
    alert("Invalid Password. It must be at least 6 character long")
}
else if (!/\d/.test(password)){
    alert("Password must contain both letters & numbers")
}
else if(!/[A-Z]/.test(password)) {
    alert("Invalid Password. It must contain at least one uppercase letter")
}
else if(!/[a-z]/.test(password)) {
    alert("Invalid Password. It must contain at least one lowercase letter")
}
else(
    alert("Invalid Password")
)
