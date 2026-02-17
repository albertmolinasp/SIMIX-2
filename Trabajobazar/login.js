const registerForm = document.getElementById("register-form");
const loginForm = document.getElementById("login-form");
const mensaje = document.getElementById("mensaje");

// REGISTRO
registerForm.addEventListener("submit", function (e) {
    e.preventDefault();

    const email = document.getElementById("reg-email").value;
    const password = document.getElementById("reg-password").value;

    if (localStorage.getItem("email")) {
        mensaje.textContent = "Ya hay un usuario registrado ⚠️";
        return;
    }

    localStorage.setItem("email", email);
    localStorage.setItem("password", password);

    mensaje.textContent = "Usuario registrado correctamente ✅";
    registerForm.reset();
});

// LOGIN
loginForm.addEventListener("submit", function (e) {
    e.preventDefault();

    const email = document.getElementById("login-email").value;
    const password = document.getElementById("login-password").value;

    const savedEmail = localStorage.getItem("email");
    const savedPassword = localStorage.getItem("password");

    if (email === savedEmail && password === savedPassword) {
        mensaje.textContent = "Login correcto 🎉";
        window.location.href = "home.html";
    } else {
        mensaje.textContent = "Email o contraseña incorrectos ❌";
    }
});
