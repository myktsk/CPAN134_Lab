document.addEventListener("DOMContentLoaded", () => {
  const changeTextBtn = document.getElementById("changeTextBtn");
  const message = document.getElementById("message");

  changeTextBtn.addEventListener("click", () => {
    message.innerHTML = "Text changed successfully!";
  });

  const newParagraph = document.createElement("p");
  newParagraph.innerHTML = "New paragraph added dynamically!";
  document.getElementById("container").appendChild(newParagraph);
});
