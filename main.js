const nCont = document.querySelector(".nCont");
const creBtn = document.querySelector(".btn");
let notes = document.querySelectorAll(".box");

function show() {
  nCont.innerHTML = localStorage.getItem("notes");
}

show();

function update() {
  localStorage.setItem("notes", nCont.innerHTML);
}

creBtn.addEventListener("click", () => {
  let inBox = document.createElement("p");
  let i1 = document.createElement("i");
  let i2 = document.createElement("i");
  inBox.className = "box";
  inBox.setAttribute("contenteditable", "true");
  i1.className = "i1 fa-solid fa-trash";
  i1.setAttribute("contenteditable", "false");

  i2.className = "i2 fa-solid fa-pen-to-square";
  i2.setAttribute("contenteditable", "false");

  nCont.appendChild(inBox);
  inBox.appendChild(i1);
  inBox.appendChild(i2);

  update();
});

nCont.addEventListener("click", (e) => {
  if (e.target.classList.contains("i1")) {
    e.target.parentElement.remove();
    update();
  } else if (e.target.tagName === "P") {
    notes = document.querySelectorAll(".box");
    notes.forEach((nt) => {
      nt.onkeyup = () => {
        update();
      };
    });
  }
});

document.addEventListener("keydown", (event) => {
  if (event.key === "Enter") {
    document.execCommand("insertLineBreak");
    event.preventDefault();
  }
});
