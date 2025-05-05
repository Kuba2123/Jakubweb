document.addEventListener("DOMContentLoaded", () => {
    const form = document.getElementById("contact-form");
    const feedback = document.getElementById("feedback");

    form.addEventListener("submit", (event) => {
        event.preventDefault();

        const name = document.getElementById("name").value;
        const email = document.getElementById("email").value;
        const message = document.getElementById("message").value;

        if (name && email && message) {
            feedback.textContent = "Wiadomość wysłana! Dziękujemy!";
            feedback.style.color = "green";
        } else {
            feedback.textContent = "Proszę wypełnić wszystkie pola!";
            feedback.style.color = "red";
        }
    });
});
