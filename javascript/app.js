// creare checkbox
const myNodelist = document.getElementsByTagName("li");
let i;

for (i = 0; i < myNodelist.length; i++) {
  const input = document.createElement("INPUT");
  input.setAttribute("type", "checkbox");
  input.className = "checked";
  myNodelist[i].appendChild(input);
}

// creare uno un pulsante close

for (i = 0; i < myNodelist.length; i++) {
  const span = document.createElement("span");
  const txt = document.createTextNode("x");
  span.className = "close";
  span.appendChild(txt);
  myNodelist[i].appendChild(span);
}

// creare un attributo

for (i = 0; i < myNodelist.length; i++) {
  const Attribute = document.createElement("hr");
  Attribute.className = "line";
  myNodelist[i].appendChild(Attribute);
}

// creare una funzione per nascondere l'elemento

const close = document.getElementsByClassName("close");
for (i = 0; i < close.length; i++) {
  close[i].onclick = function () {
    const div = this.parentElement;
    div.style.display = "none";
  };
}

// creare una funzione per il text-decoration

const list = document.querySelector("ul");
list.addEventListener(
  "click",
  function (ev) {
    if (ev.target.tagName === "LI") ev.target.classList.toggle("checked");
  },
  false
);

//creare una nuova voce di elenco quando si fa clic sul pulsante "Aggiungi"

function newElement() {
  const li = document.createElement("li");
  const textareavalue = document.getElementById("mytextarea").value;
  const t = document.createTextNode(textareavalue);
  li.appendChild(t);
  if (textareavalue === "") {
    alert("You must write something!");
  } else {
    document.getElementById("myUL").appendChild(li);
  }
  document.getElementById("mytextarea").value = "";

  const span = document.createElement("span");
  const txt = document.createTextNode("x");
  span.className = "close";
  span.appendChild(txt);
  li.appendChild(span);

  const input = document.createElement("INPUT");
  input.setAttribute("type", "checkbox");
  input.className = "checked";
  li.appendChild(input);

  const Attribute = document.createElement("hr");
  Attribute.className = "line";
  li.appendChild(Attribute);

  for (i = 0; i < close.length; i++) {
    close[i].onclick = function () {
      const div = this.parentElement;
      div.style.display = "none";
    };
  }
}
