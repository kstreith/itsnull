window.stopDebuggerOnLog = false;
$(function () {
  $("#throwBtn").on("click", function throwException () {
    window.missing_api.doit();
  });
  $("#doNotThrowBtn").on("click", function doNotThrow() {
    try {
      window.i_know_this_is_api.doit();
      $("#doNotThrowBtn").css("background-color", "blue");
    } catch (e) {
      if (stopDebuggerOnLog) {
        debugger;
      }
    }    
  }); 
  $("#debuggerBtn").on("click", function () {
    stopDebuggerOnLog = !stopDebuggerOnLog;
  });
});
