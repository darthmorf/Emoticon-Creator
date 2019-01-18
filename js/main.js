var canvas = document.getElementById("canvas");
var ctx = canvas.getContext("2d");

var headbaseHueSlider  = document.getElementById("headbaseHue");
var headbaseHueDisplay = document.getElementById("headbaseHueDisplay");
var headbaseHueReset   = document.getElementById("headbaseHueReset");
var headbaseSatSlider  = document.getElementById("headbaseSat");
var headbaseSatDisplay = document.getElementById("headbaseSatDisplay");
var headbaseSatReset   = document.getElementById("headbaseSatReset");
var headbaseLitSlider  = document.getElementById("headbaseLit");
var headbaseLitDisplay = document.getElementById("headbaseLitDisplay");
var headbaseLitReset   = document.getElementById("headbaseLitReset");

canvas.width = 400;
canvas.height = 400;
ctx.imageSmoothingEnabled = false;

var assetDir = "./assets/img";

var hueDefault = 0;
var satDefault = 100;
var litDefault = 100;

var emoticon = {
    headbase : {
        src: `${assetDir}/headbases/headbase0.png`,
        hue: hueDefault,
        sat: satDefault,
        lit: litDefault,
    },
};

function init() {
    loadHeadbaseOptions();
    displayEmoticon();
}

function loadHeadbaseOptions () {
    var buttonDiv = document.getElementById("headbaseOptions");
    var headbaseCount = 8;
    var buttons = [];
    var i = 0;
    for (i=0; i <= headbaseCount; i++){
        var button = document.createElement("button");
        button.headbaseIndex = i;
        button.innerHTML = `<img src=${assetDir}/headbasespreview/headbase${i}.png>`;
        button.onclick = function () {
            emoticon.headbase.src = `${assetDir}/headbases/headbase${this.headbaseIndex}.png`;
            displayEmoticon(true);
        }
        buttonDiv.appendChild(button);
        buttons.push(button);
    }
}

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


function displayEmoticon (refreshCanvas=false) {
    if (refreshCanvas) {
        ctx.clearRect(0, 0, canvas.width, canvas.height); 
    }

    var headbase = new Image();
    headbase.src = emoticon.headbase.src;

    headbase.onload = function () {
        ctx.filter = `hue-rotate(${emoticon.headbase.hue}deg) saturate(${emoticon.headbase.sat}%) brightness(${emoticon.headbase.lit}%)`;
        ctx.drawImage(headbase, 0, 0, 360, 360);
    }    
}