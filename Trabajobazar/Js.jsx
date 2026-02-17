import React from 'react';

export default function Layout({ children }) {
  return (
    <div>
      {children}
    </div>
  );
  
const registerForm = document.getElementById("register-form");
const loginForm = document.getElementById("login-form");
const mensaje = document.getElementById("mensaje");

// REGISTRO
registerForm.addEventListener("submit", function (e) {
    e.preventDefault();

    const email = document.getElementById("reg-email").value;
    const password = document.getElementById("reg-password").value;

    localStorage.setItem("userEmail", email);
    localStorage.setItem("userPassword", password);

    mensaje.textContent = "Usuario registrado correctamente ✅";
});

// LOGIN
loginForm.addEventListener("submit", function (e) {
    e.preventDefault();

    const email = document.getElementById("login-email").value;
    const password = document.getElementById("login-password").value;

    const savedEmail = localStorage.getItem("userEmail");
    const savedPassword = localStorage.getItem("userPassword");

    if (email === savedEmail && password === savedPassword) {
        mensaje.textContent = "Inicio de sesión correcto 🎉";
        localStorage.setItem("loggedIn", "true");
    } else {
        mensaje.textContent = "Correo o contraseña incorrectos ❌";
    }
});

}