  function sayHello() {
    $("body").append("<div class='msg'>Hello, world</div");
    setToClearLater();
  }
  function sayGoodbye() {
    $("body").append("<div class='msg'>Goodbye</div");
    setToClearLater();
  }
  function clearMessages() {
      $(".msg").remove();
  }
  function setToClearLater() {
    setTimeout(clearMessages, 3000);
  }
  $("#hello").on("click", sayHello); 
  $("#goodbye").on("click", sayGoodbye);
  var obj = { UpdateCount: 2 };

  function debugProp(obj, prop) {
    var value = obj[prop];
    var stopNext = true;
    Object.defineProperty(obj, prop, {
      get: function () {
        return value;
      },
      set: function (val) {
        value = val;
        if (stopNext) {
          stopNext = false;
          debugger;
        }
      }
    });
  };
  setInterval(function () {
    obj.UpdateCount++;
  }, 500);
