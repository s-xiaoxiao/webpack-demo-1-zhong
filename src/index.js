import x from "./x.js";
import "./s.scss";
import "./y.less";
import "./z.styl";
import png from "./assets/1.png";

const div = document.getElementById("app");

div.innerHTML = `<img src="${png}"/>`;

const button = document.createElement("button");
document.body.append(button);
button.innerText = "懒加载";

button.onclick = () => {
  const promise = import("./lazy");

  promise.then(
    module => {
      module.default();
    },
    () => {}
  );
};
console.log(div);
console.log(button);
console.log(png);
