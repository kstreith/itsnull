window.Game = window.Game || {};
(function () {
  Game.ElementSize = 10;
  Game.CanvasElement = document.getElementById("gameCanvas");
  Game.Height = Math.floor(Game.CanvasElement.height / Game.ElementSize) - 1;
  Game.Width = Math.floor(Game.CanvasElement.width / Game.ElementSize) - 1;
  Game.DrawContext = Game.CanvasElement.getContext("2d");
  var dc = Game.DrawContext;
  Game.Over = false;
  Game.Paused = false;
  Game.HeadX = 5;
  Game.HeadY = 5;
  Game.LastX = Game.HeadX;
  Game.LastY = Game.HeadY;
  //Game.Body = [{X:5,Y:5},{X:5,Y:5}];
  Game.Body = [{X: 5, Y: 5}];
  Game.BodyLength = 1;
  Game.BodyClear = 0;
  Game.ExtendSnake = 0;
  //Game.Speed = 0.05 * 0.25; //0.06 moves pixel per frame, 60 fps
  Game.Speed = 1;
  Game.VelocityX = 0;
  Game.VelocityY = Game.Speed; 

  function update(delta) {
    if (Game.Paused) { return; }
    if (Game.ExtendSnake > 0) { Game.ExtendSnake--; }
    if (Game.ExtendSnake === 0) {
      Game.BodyClear += 1;
    }
    Game.LastX = Game.HeadX;
    Game.LastY = Game.HeadY;
    //Game.HeadX += (Game.VelocityX *  delta);
    //Game.HeadY += (Game.VelocityY * delta);
    Game.HeadX += Game.VelocityX;
    Game.HeadY += Game.VelocityY;
    //console.log('velocity is ' + (Game.VelocityY * delta) + ' delta is ' + delta);
    if (Game.HeadX > Game.Width || Game.HeadX < 0) {
      Game.VelocityX *= -1;
      if (Game.HeadX < 0) { Game.HeadX = 0; }
      if (Game.HeadX > Game.Width) { Game.HeadX = Game.Width; }
    }
    if (Game.HeadY > Game.Height || Game.HeadY < 0) {
      Game.VelocityY *= -1;
      if (Game.HeadY < 0) { Game.HeadY = 0; }
      if (Game.HeadY > Game.Height) { Game.HeadY = Game.Height; }
    }
    //var visibleEnd = Game.Body[Game.Body.length - 1 - Game.BodyClear];
    var pixelColor = dc.getImageData(Game.HeadX * Game.ElementSize, Game.HeadY * Game.ElementSize, 1, 1).data;
    if (pixelColor[0] === 0 && pixelColor[1] === 0 && pixelColor[2] === 0 && pixelColor[3] === 255) {
       Game.Over = true;
       Game.Paused = true;
       alert('Game Over!');
       console.log('Game End');
    } 
    Game.Body.unshift({X: Game.HeadX, Y: Game.HeadY});
  }

  //Math.floor = function (val) { return val; }

  function draw(interpolationPercentage) {
    if (Game.Paused) { return; }
    //console.log('interpolation ' + interpolationPercentage);
    //console.log('Game Body Clear ' + Game.BodyClear);
    for (var i = 0; i < Game.BodyClear; ++i) {
      var end = Game.Body.pop(); 
      //dc.fillStyle = "blue";
      //dc.fillRect(Math.floor(end.X) * Game.ElementSize, Math.floor(end.Y) * Game.ElementSize, Game.ElementSize, Game.ElementSize);
      dc.clearRect(Math.floor(end.X) * Game.ElementSize, Math.floor(end.Y) * Game.ElementSize, Game.ElementSize, Game.ElementSize);
      //console.log('clear ' + Math.floor(end.X) + ', ' + Math.floor(end.Y));
    }
    Game.BodyClear = 0;
    if (Game.Body.length !== 1) {
       //console.log('unexpected length ' + Game.Body.length);
    }
    var headX = Game.HeadX;
    var headY = Game.HeadY;
    dc.fillStyle = "black";
    //var x = Math.floor(Game.LastX + (headX - Game.LastX) * interpolationPercentage) * Game.ElementSize; 
    //var y = Math.floor(Game.LastY + (headY - Game.LastY) * interpolationPercentage) * Game.ElementSize;
    var x = Math.floor(headX) * Game.ElementSize; 
    var y = Math.floor(headY) * Game.ElementSize;
    dc.fillRect(x, y, Game.ElementSize, Game.ElementSize);
    //console.log('draw ' + Math.floor(x) + ', ' + Math.floor(y));
  }

  function end(fps, panic) {
    $("#fps").text(fps);
    if (panic) {
       var discardedTime = Math.round(MainLoop.resetFrameDelta());
       console.warn('main loop panicked, dropped ' + discardedTime);
    }
  }

  $(document).keydown(function(e) {
    switch(e.which) {
        case 37: // left
           Game.VelocityX = -1 * Game.Speed; Game.VelocityY = 0;
        break;

        case 38: // up
           Game.VelocityX = 0; Game.VelocityY = -1 * Game.Speed;
        break;

        case 39: // right
           Game.VelocityX = Game.Speed; Game.VelocityY = 0;
        break;

        case 40: // down
           Game.VelocityX = 0; Game.VelocityY = Game.Speed;
        break;
 
        case 80: // 'p'
           Game.ExtendSnake += 10;
           break;
        case 32: // 'spacebar'
           if (!Game.Over) { Game.Paused = !Game.Paused; }
        break;

        default: console.log('pressed ' + e.which);
        return; // exit this handler for other keys
    }
    e.preventDefault(); // prevent the default action (scroll / move caret)
  });

  

  MainLoop.setSimulationTimestep(250);
  MainLoop.setUpdate(update).setDraw(draw).setEnd(end).start();
  //MainLoop.setMaxAllowedFPS(20);

  dc.fillRect(Game.HeadX*Game.ElementSize, Game.HeadY*Game.ElementSize, Game.ElementSize, Game.ElementSize);
}());
