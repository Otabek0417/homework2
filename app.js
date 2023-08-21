const input = document.querySelector(".input");
const title = document.querySelector(".title");

input.addEventListener("input", (e) => {
  let value = e.target.value;
  let Yulduzcha = String(value).replaceAll("*", "");
  title.textContent = Yulduzcha;
  let Rishotka = String(value).replaceAll("#", "");
  title.textContent = Rishotka;
  let dollar = String(value).replaceAll("#", "");
  title.textContent = dollar;
  if (value.includes("*")) {
    if (value.length > 1) {
      if (
        value.indexOf("*") === 0 &&
        value.lastIndexOf("*") === value.length - 1
      ) {
        title.style.color = "yellow";
      } else {
        title.style.color = "black";
      }
    }
  }

  if (value.includes("#")) {
    if (value.length > 1) {
      if (
        value.indexOf("#") === 0 &&
        value.lastIndexOf("#") === value.length - 1
      ) {
        title.style.color = "green";
      } else {
        title.style.color = "black";
      }
    }
  }
  if (value.includes("$")) {
    if (value.length > 1) {
      if (
        value.indexOf("$") === 0 &&
        value.lastIndexOf("$") === value.length - 1
      ) {
        title.style.color = "red";
      } else {
        title.style.color = "black";
      }
    }
  }
});
