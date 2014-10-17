(function () {
  "use strict";
  var currentNum = 0;
  var totalPaints = 0;
  var increase = function () {
    currentNum++;
    updateUi();
  };
  function decrease() {
    currentNum--;
    updateUi();
  } 
  var updateUi = function updateUi() {
    totalPaints = totalPaints + 1;
    console.log("logging totalPaints", totalPaints);
    $("#currentNumber").text(String(currentNum));
  }
  $(function () {
    $("#increase").on("click", increase);
    $("#decrease").on("click", decrease);
  });
}());
