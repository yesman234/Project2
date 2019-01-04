$(document).ready(function() {
var canvas = document.getElementById("easel"),
  stage = new createjs.Stage(canvas),
  centerX = canvas.width/2,
  centerY = canvas.height/2,
  background = new createjs.Shape(),
  logo = new createjs.Bitmap("press-start.png"),
  tagline = new createjs.Bitmap("press-start.png"),
  pressStart = new createjs.Text("PRESS START", "30px Verdana", "#000000");


// Place Logo
logo.x = 0;
logo.y = 0;
logo.alpha = 0.05;

// Place Tagline
tagline.x = 0;
tagline.y = 0;
tagline.alpha = 0.005;

// Place "Press Start"
pressStart.x = centerX;
pressStart.y = centerY+120;
pressStart.textAlign = 'center';
pressStart.alpha = 0.005;

// Black background
background.graphics.beginFill('#000000').drawRect(0, 0, canvas.width, canvas.height);

//Add items to Canvas
stage.addChild(background);
stage.addChild(logo);
stage.addChild(tagline);
stage.addChild(pressStart);
stage.update();

// Animate items on Canvas
createjs.Tween.get(logo).wait().to({alpha:1}, 3000); // Logo fades in
createjs.Tween.get(background).wait().to({alpha: 0}, 1000); // Black background fades out
createjs.Tween.get(tagline).wait(2500).to({alpha: 1}, 500); // Tagline fades in
createjs.Ticker.framerate = 30;
createjs.Tween.get(pressStart).wait(4000).to({alpha: 1}, 200).wait(800).call(onComplete); // Press Start fades in and blinks

function onComplete() {
  createjs.Tween.get(pressStart, {loop:true}, true)
  .to({alpha: 0}, 200).wait(600).to({alpha: 1}, 200).wait(800);
}

createjs.Ticker.addEventListener(function() {
  stage.update();
});
});