async function loginHandler(event) {
  event.preventDefault();

  const username = document.getElementById("username").value.trim();
  const password = document.getElementById("password").value.trim();

  if (username && password) {
    const response = await fetch("/api/user/login", {
      method: "post",
      body: JSON.stringify({
        username,
        password,
      }),
      headers: { "Content-Type": "application/json" },
    });

    if(response.ok) {
        document.location.replace('/user/home/dashboard')
    } else {
        console.log(response.statusText);
      }
  }
}

document.querySelector(".login-form").addEventListener("submit", loginHandler);
