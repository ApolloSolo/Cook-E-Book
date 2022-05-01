async function register(event) {
  event.preventDefault();

  const username = document.getElementById("username").value.trim();
  const password = document.getElementById("password").value.trim();

  const response = await fetch("/api/user", {
    method: "post",
    body: JSON.stringify({
      username,
      password,
    }),
    headers: { "Content-Type": "application/json" },
  });

  if (response.ok) {
    document.location.replace("/user/home/dashboard");
  } else {
    console.log(response.statusText);
  }
}

document.querySelector(".register-form").addEventListener("submit", register);
