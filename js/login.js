// selecting inputs
const username = document.querySelector("#username");
const password = document.querySelector("#Password");

const loginForm = document.querySelector("#form-signup")

loginForm.addEventListener("submit", function(e){
    e.preventDefault();

    // localStorage-ka waa inaan ka soo akhristaa bal iney xoga iigu jirto haddeysan iigu jirina waa inaan array madhan u dhiibtaa

    let users = JSON.parse(localStorage.getItem("users")) || []

    if(!Array.isArray){
        users = [];
    }

    const user = users.find(usr => usr.username ===username.value && usr.password === password.value);// user-ka hadda la marayo username-kisa mala mid yahay username-ka hadda login-ka sameynaya 

    // halkan waa condition oo hadii username khaldan la galiyo output-kii soo bixi lahaa

    if(!user){
        alert("invalid credentials")
        username.value = ''
        password.value = ''
        return
    }

    // after login xagee la aadayaa
    window.location.href  = "/html/home.html"
})