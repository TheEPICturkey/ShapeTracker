function Triangle(side1, side2, side3) {
  this.side1 = side1;
  this.side2 = side2;
  this.side3 = side3;
}

Triangle.prototype.checkType = function() {
  return "I can't answer that yet!";
};

function handleTriangleForm() {
  event.preventDefault();
  document.querySelector('#response').innerText = null;
  const length2 = parseInt(document.querySelector('#length2').value);
  const length1 = parseInt(document.querySelector('#length1').value);
  const length3 = parseInt(document.querySelector('#length3').value);
  const triangle = new Triangle(length1, length2, length3);
  const response = triangle.checkType();
  const pTag = document.createElement("p");
  pTag.append(response);
  document.querySelector('#response').append(pTag);
}

window.addEventListener("load", function() {
  document.querySelector("#triangle-checker-form").addEventListener("submit", handleTriangleForm);
});