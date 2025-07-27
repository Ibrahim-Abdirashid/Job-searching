// selecting 
const username = document.querySelector("#username");
const password = document.querySelector("#Password");

// selecting form
const form = document.querySelector("#form-signup");

form.addEventListener("submit", (e)=>{
    e.preventDefault();

    const user = {
        username: username.value,
        password:password.value,
    }
    
    let users = JSON.parse(localStorage.getItem("users")) || [];

    //waxy check ku sameyn hadi (varible-ka(users)) uu yahay
    if(!Array.isArray(users)){
        users = [];
    }
    const exstingUser = users.find((user)=> user.username === username.value && user.password === password.value);

    if(username.value.trim() === ''){
        alert("fadlan username-ka oo meeshoo banan haka gudbin")
        return
    }
     if(password.value === ''){
            alert("fadlan password sameyso")
            return
        }

    if(exstingUser ){
        alert(`alreadey ${username.value} existing`)
        return
    }

    users.push(user)

    localStorage.setItem("users", JSON.stringify(users))


    // marka signup lasiiyo waa inuu page-ka kale aadaa

    window.location.href = "../login.html"
})