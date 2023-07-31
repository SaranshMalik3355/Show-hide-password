//html select

const pass = document.getElementById("passwd");
const checkbox = document.getElementById("show-hide");

//bind click event
checkbox.addEventListener("click", () => {
    
  if (checkbox.checked == true) {
    pass.setAttribute("type", "text");
  } else {
    pass.setAttribute("type", "password");
  }
});
