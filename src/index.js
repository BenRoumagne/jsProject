import "./styles.css";

const dom = document.getElementById("app");

//console.log(dom);

var form = {
  for: "toto",
  array: ["plop", "plop2", "test", "tttttt", "rrrrrr"],
  id: "id",
  type: "type"
};
//console.log(form.array[0]);
dom.innerHTML =
  `
<h1>Hello Truffe!</h1>

<div>

<ul>` +
  form.array.map((value) => {
    return "<li>" + value + "</li>";
  }) +
  `</ul>

</div>

`;
