const form = document.getElementById("contact-form");
const statusText = document.getElementById("status");
const button = form.querySelector("button"); // 👈 GET BUTTON ONCE

const SCRIPT_URL = "https://script.google.com/macros/s/AKfycbypNgTyDLI_laYMjkQui1S0eMz-d9Vkr12IqARzAoweVwatY2BlOFb6yq0BM47D0kNd/exec";

form.addEventListener("submit", async (e) => {
  e.preventDefault();

  // 🔒 Disable button when sending starts
  button.disabled = true;
  button.style.opacity = "0.6";

  statusText.textContent = "Sending...";
  statusText.style.opacity = "0.7";

  const formData = new FormData(form);

  try {
    await fetch(SCRIPT_URL, {
      method: "POST",
      body: formData
    });

    statusText.textContent = "Message sent successfully.";
    statusText.style.opacity = "1";
    form.reset();
  } catch (error) {
    statusText.textContent = "Something went wrong. Try again.";
    statusText.style.opacity = "1";
  }

  // 🔓 Re-enable button (runs for success + error)
  button.disabled = false;
  button.style.opacity = "1";

  // Optional: fade status after 3s
  setTimeout(() => {
    statusText.style.opacity = "0";
  }, 3000);
});