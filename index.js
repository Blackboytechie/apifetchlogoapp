const username = document.getElementById("s-username");
const password = document.getElementById("s-password");
//setting users array
const users = JSON.parse(localStorage.getItem("users")) || [];
document
  .getElementById("signupForm")
  .addEventListener("submit", function (event) {
    event.preventDefault();
    // Handle signup form submission
    // You can add code here to handle form data
    // and possibly redirect to the home page after successful signup
    if (username.value === "" || password.value === "") {
      alert("Please fill all fields");
      return;
    }
    //store user in local storage
    // console.log(username.value);
    // localStorage.setItem("username", username.value);
    // localStorage.setItem("password", password.value);

    //add new user to users array
    users.push({
      username: username.value,
      password: password.value,
    });
    //update users array in localstorage
    localStorage.setItem("users", JSON.stringify(users));
    console.log(localStorage.getItem("users"));

    alert("Signed up successfully! Now,try logging in.");
    // console.log('username',localStorage.getItem('username'));
    document.getElementById("signupForm").reset();
    showLoginPage();
  });

document
  .getElementById("signinForm")
  .addEventListener("submit", function (event) {
    event.preventDefault();
    // Handle signin form submission
    // You can add code here to authenticate users
    // and show the home page upon successful login
    // const signin = document.getElementById('signin');
    // const home = document.getElementById('home');
    // signin.style.display = 'none';
    // home.style.display = 'block';
    // signin.reset();
    const loggedusername = document.getElementById("l-username");
    const loggedpassword = document.getElementById("l-password");
    const savedUsername = localStorage.getItem("username");
    const savedPassword = localStorage.getItem("password");
    console.log(loggedusername.value, savedUsername);
    console.log(loggedpassword.value, savedPassword);
    //get users array
    const users = JSON.parse(localStorage.getItem("users")) || [];
    console.log(users);
    //finding logged user
    const foundUser = users.find(
      (user) =>
        // console.log('user:',user);
        user.username === loggedusername.value &&
        user.password === loggedpassword.value
    );
    console.log("founduser:", foundUser);

    if (foundUser) {
      alert("Login successful");
      document.getElementById("signinForm").reset();
      showHomePage();
    } else {
      alert("Invalid Credentials.please try again.");
    }
  });

//dont have account
document.getElementById('register-link').addEventListener('click',function(event){
    event.preventDefault();
    showSignUpPage();
    console.log('clicked register');
})
//already have an account
document.getElementById('login-link').addEventListener('click',function(event){
    event.preventDefault();
    showLoginPage();
    console.log('clicked login');
})


document
  .getElementById("logoutBtn")
  .addEventListener("click", function (event) {
    event.preventDefault();
    alert("you are logging out");
    showLoginPage();
  });
document
  .getElementById("SignUpBtn")
  .addEventListener("click", function (event) {
    event.preventDefault();
    showSignUpPage();
  });
document.getElementById("loginBtn").addEventListener("click", function (event) {
  event.preventDefault();
  showLoginPage();
});

document.getElementById('homelink').addEventListener('click',function(event){
    event.preventDefault();
    alert("you are logging out");
    showHomePage();
})

function showHomePage() {
  document.getElementById("signup").style.display = "none";
  document.getElementById("signin").style.display = "none";
  document.getElementById("home").style.display = "block";
  document.getElementById("loginBtn").style.display = "none";
  document.getElementById("logoutBtn").style.display = "block";
  document.getElementById('footerwrapper').style.display = "flex";
  //create user cards
  function createUserCard(user) {
    const card = document.createElement("div");
    card.classList.add("user-card");
    const userImage = document.createElement("img");
    userImage.src = "./images/avatar.webp";
    userImage.alt = user.name;

    const userName = document.createElement("h3");
    userName.textContent = user.username;
    const userInfo = document.createElement("p");
    userInfo.textContent =
      "Lorem ipsum is placeholder text commonly used in the graphic, print, and publishing industries for previewing layouts and visual mockups.";

    card.appendChild(userImage);
    card.appendChild(userName);
    card.appendChild(userInfo);
    return card;
  }

  //display user card on home page
  const userCardContainer = document.getElementById("userGallery");
  //loop through users array
  users.forEach((user) => {
    const card = createUserCard(user);
    userCardContainer.appendChild(card);
  });
}
function showLoginPage() {
  document.getElementById("signup").style.display = "none";
  document.getElementById("signin").style.display = "block";
  document.getElementById("home").style.display = "none";
  document.getElementById("loginBtn").style.display = "block";
  document.getElementById("logoutBtn").style.display = "none";
  document.getElementById('footerwrapper').style.display = "none";

}
function showSignUpPage() {
  document.getElementById("signup").style.display = "Block";
  document.getElementById("signin").style.display = "none";
  document.getElementById("home").style.display = "none";
  document.getElementById('footerwrapper').style.display = "none";

}
