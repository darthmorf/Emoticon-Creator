var headbaseHueSlider  = document.getElementById("headbaseHue");
var headbaseHueDisplay = document.getElementById("headbaseHueDisplay");
var headbaseHueReset   = document.getElementById("headbaseHueReset");
var headbaseSatSlider  = document.getElementById("headbaseSat");
var headbaseSatDisplay = document.getElementById("headbaseSatDisplay");
var headbaseSatReset   = document.getElementById("headbaseSatReset");
var headbaseLitSlider  = document.getElementById("headbaseLit");
var headbaseLitDisplay = document.getElementById("headbaseLitDisplay");
var headbaseLitReset   = document.getElementById("headbaseLitReset");

headbaseHueSlider.oninput = function() {
    headbaseHueDisplay.value = this.value;
    emoticon.headbase.hue = this.value;
    displayEmoticon();
}
headbaseHueDisplay.oninput = function () {
    headbaseHueSlider.value = this.value;
    emoticon.headbase.hue = this.value;
    displayEmoticon();
}
headbaseHueReset.onclick = function () {
    emoticon.headbase.hue = hueDefault;
    headbaseHueSlider.value = emoticon.headbase.hue;
    headbaseHueDisplay.value = emoticon.headbase.hue;
    displayEmoticon();
}

headbaseSatSlider.oninput = function() {
    headbaseSatDisplay.value = this.value;
    emoticon.headbase.sat = this.value;
    displayEmoticon();
}
headbaseSatDisplay.oninput = function () {
    headbaseSatSlider.value = this.value;
    emoticon.headbase.sat = this.value;
    displayEmoticon();
}
headbaseSatReset.onclick = function () {
    emoticon.headbase.sat = satDefault;
    headbaseSatSlider.value = emoticon.headbase.sat;
    headbaseSatDisplay.value = emoticon.headbase.sat;
    displayEmoticon();
}

headbaseLitSlider.oninput = function() {
    headbaseLitDisplay.value = this.value;
    emoticon.headbase.lit = this.value;
    displayEmoticon();
}
headbaseLitDisplay.oninput = function () {
    headbaseLitSlider.value = this.value;
    emoticon.headbase.lit = this.value;
    displayEmoticon();
}
headbaseLitReset.onclick = function () {
    emoticon.headbase.lit = litDefault;
    headbaseLitSlider.value = emoticon.headbase.lit;
    headbaseLitDisplay.value = emoticon.headbase.lit;
    displayEmoticon();
}


var eyeHueSlider  = document.getElementById("eyeHue");
var eyeHueDisplay = document.getElementById("eyeHueDisplay");
var eyeHueReset   = document.getElementById("eyeHueReset");
var eyeSatSlider  = document.getElementById("eyeSat");
var eyeSatDisplay = document.getElementById("eyeSatDisplay");
var eyeSatReset   = document.getElementById("eyeSatReset");
var eyeLitSlider  = document.getElementById("eyeLit");
var eyeLitDisplay = document.getElementById("eyeLitDisplay");
var eyeLitReset   = document.getElementById("eyeLitReset");

eyeHueSlider.oninput = function() {
    eyeHueDisplay.value = this.value;
    emoticon.eye.hue = this.value;
    displayEmoticon();
}
eyeHueDisplay.oninput = function () {
    eyeHueSlider.value = this.value;
    emoticon.eye.hue = this.value;
    displayEmoticon();
}
eyeHueReset.onclick = function () {
    emoticon.eye.hue = hueDefault;
    eyeHueSlider.value = emoticon.eye.hue;
    eyeHueDisplay.value = emoticon.eye.hue;
    displayEmoticon();
}

eyeSatSlider.oninput = function() {
    eyeSatDisplay.value = this.value;
    emoticon.eye.sat = this.value;
    displayEmoticon();
}
eyeSatDisplay.oninput = function () {
    eyeSatSlider.value = this.value;
    emoticon.eye.sat = this.value;
    displayEmoticon();
}
eyeSatReset.onclick = function () {
    emoticon.eye.sat = satDefault;
    eyeSatSlider.value = emoticon.eye.sat;
    eyeSatDisplay.value = emoticon.eye.sat;
    displayEmoticon();
}

eyeLitSlider.oninput = function() {
    eyeLitDisplay.value = this.value;
    emoticon.eye.lit = this.value;
    displayEmoticon();
}
eyeLitDisplay.oninput = function () {
    eyeLitSlider.value = this.value;
    emoticon.eye.lit = this.value;
    displayEmoticon();
}
eyeLitReset.onclick = function () {
    emoticon.eye.lit = litDefault;
    eyeLitSlider.value = emoticon.eye.lit;
    eyeLitDisplay.value = emoticon.eye.lit;
    displayEmoticon();
}