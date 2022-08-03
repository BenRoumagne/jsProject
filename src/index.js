import "./styles.css";

const dom = document.getElementById("app");

//console.log(dom);

var form = {
  for: "toto",
  array: ["plop", "plop2"],
  id: "id",
  type: "type"
};
console.log(form.array[0]);
dom.innerHTML =
  `
<h1>Hello Truffe!</h1>

<div>

<form action="" method="get" class="form-example">
  <div class="form-example">
  <label ` +
  form.for +
  `=` +
  form.array[0] +
  `>Enter your name: </label>
    <input type="text" name="name" id="name" required>
  </div>
  <div class="form-example">
    <label ` +
  form.for +
  `="email">Enter your email: </label>
    <input type="email" name="email" id="email" required>
  </div>
  <div class="form-example">
    <input type="submit" value="Subscribe!">
  </div>
</form>

</div>

`;
