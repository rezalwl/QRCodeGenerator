const wrapper = document.querySelector(".wrapper");
const input = document.querySelector("input");
const button = document.querySelector("button");
const img = document.querySelector("img");

button.addEventListener("click", () => {
  let inputValue = input.value.trim();

  if (inputValue) {
    button.innerHTML = "Generating QR Code ...";
    img.setAttribute(
      "src",
      `https://api.qrserver.com/v1/create-qr-code/?size=200x200&data=${inputValue}`
    );

    img.addEventListener("load", () => {
      wrapper.classList.add("active");
      button.innerHTML = "Generate QR Code";
    });
  }
});

input.addEventListener("keyup", () => {
  if (!input.value.trim()) {
    wrapper.classList.remove("active");
  }
});
