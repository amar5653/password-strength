const password = document.getElementById("password");
const btn = document.getElementById("btn");
const msg = document.querySelector("span");

password.addEventListener("input",()=>{
    if(password.value.length > 0){
       msg.style.display = "block";
    }  else {
        msg.style.display = "none";
    };
    if(password.value.length < 4) {
        msg.innerHTML = "Password is weak";
        msg.style.color = "red";
        password.style.borderColor = "red";
    } else if(password.value.length >= 4 && password.value.length < 8){
        msg.innerHTML = "Password is medium";
        msg.style.color = "orange";
        password.style.borderColor = "orange";
    }  else if (password.value.length >= 8 )
    {
        msg.innerHTML = "password is strong";
        msg.style.color = "green";
        password.style.borderColor = "green";
    }
 
})