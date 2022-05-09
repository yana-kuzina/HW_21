const select = $("#figures");
const input = $("#colors");
const figure = $(".figure");

function transformFigure(value) {
  switch (value) {
    case "square":
      figure.css("width", "100px");
      figure.css("height", "100px");
      figure.css("border-radius", "0");
      break;
    case "rectangle":
      figure.css("width", "150px");
      figure.css("height", "100px");
      figure.css("border-radius", "0");
      break;
    case "circle":
      figure.css("width", "100px");
      figure.css("height", "100px");
      figure.css("border-radius", "50%");
      break;
  }
}
// обработчик события
select.change(function () {
  transformFigure(select.val());
  figure.css("display", "none");
  figure.fadeIn("slow");
});
// на инпуте обрабатываем .input
input.on("input", function () {
  figure.css("background-color", input.val());
});

figure.css("background-color", input.val());
transformFigure(select.val());
