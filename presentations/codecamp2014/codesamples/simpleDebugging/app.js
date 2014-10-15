(function () {
  "use strict";
  var currentNum = 0;
  var totalPaints = 0;
  var increase = function () {
    currentNum++;
    updateUi();
  };
  var decrease = function () {
    currentNum--;
    updateUi();
  } 
  var updateUi = function () {
    totalPaints++;
    console.log("logging totalPaints", totalPaints);
    $("#currentNumber").text(String(currentNum));
  }
  $(function () {
    $("#increase").on("click", increase);
    $("#decrease").on("click", decrease);
  });
}());
