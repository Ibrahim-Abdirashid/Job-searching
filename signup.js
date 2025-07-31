// selecting
const username = document.querySelector("#username");
const password = document.querySelector("#Password");
const email = document.querySelector("#email");
const error = document.querySelector("#error-message");

// selecting form
const form = document.querySelector("#form-signup");

form.addEventListener("submit", (e) => {
  e.preventDefault();

  const user = {
    username: username.value,
    password: password.value,
    email: email.value,
  };

  let users = JSON.parse(localStorage.getItem("users")) || [];

  //waxy check ku sameyn hadi (varible-ka(users)) uu yahay
  if (!Array.isArray(users)) {
    users = [];
  }
  const exstingUser = users.find(
    (user) =>
      user.username === username.value &&
      user.email === email.value &&
      user.password === password.value
  );

  // soo select gareynta paragrphka ii sheegaya errorka ii qabanaya

  if (username.value.trim() === "") {
    alert("fadlan username-ka oo meeshoo banan haka gudbin");
    return;
  }
  const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!email.value.match(emailPattern)) {
    alert("fadlan email sax ah geli");
    return;
  }
  if (password.value === "") {
    alert("fadlan password sameyso");
    return;
  }
  if (password.value.length < 6) {
    alert("fadlan password-ku yuusan ka yaraan 6 character");
    return;
  }

  if (exstingUser) {
    alert(`alreadey ${username.value} existing`);
    return;
  }

  users.push(user);

  localStorage.setItem("users", JSON.stringify(users));

  // marka signup lasiiyo waa inuu page-ka kale aadaa

  window.location.href = "login.html";
});
