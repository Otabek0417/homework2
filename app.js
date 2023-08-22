const input = document.querySelector(".input");
const title = document.querySelector(".title");

input.addEventListener("input", (e) => {
  let value = e.target.value;

  if (value.includes("*")) {
    if (value.length > 1) {
      let yulduzcha = value.replaceAll("*", "");
      title.textContent = yulduzcha;
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
      let rishotka = value.replaceAll("#", "");
      title.textContent = rishotka;

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
      let dollar = value.replaceAll("$", "");
      title.textContent = dollar;
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
