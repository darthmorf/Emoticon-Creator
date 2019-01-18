var canvas = document.getElementById("canvas");
var ctx = canvas.getContext("2d");
canvas.width = 400;
canvas.height = 400;
ctx.imageSmoothingEnabled = false;

var assetDir = "./assets/img";

var emoticon = {
    headbase : {
        src: `${assetDir}/headbases/headbase0.png`,
        tint: false,
        r: `255`,
        g: `255`,
        b: `255`,
        a: `1`
    },
};

function init() {
    loadHeadbaseOptions();
    displayEmoticon();
}

function loadHeadbaseOptions () {
    var buttonDiv = document.getElementById("headbaseSelect");
    var headbaseCount = 8;
    var buttons = [];
    var i = 0;
    for (i=0; i <= headbaseCount; i++){
        var button = document.createElement("button");
        button.headbaseIndex = i;
        button.innerHTML = `<img src=${assetDir}/headbasespreview/headbase${i}.png>`;
        button.onclick = function () {
            emoticon.headbase.src = `${assetDir}/headbases/headbase${this.headbaseIndex}.png`;
            displayEmoticon();
        }
        buttonDiv.appendChild(button);
        buttons.push(button);
    }
}

function displayEmoticon () {
    ctx.clearRect(0, 0, canvas.width, canvas.height); 
    var headbase = new Image();
    headbase.src = emoticon.headbase.src;

    headbase.onload = function () {
        ctx.drawImage(headbase, 0, 0, 360, 360);
    }    
}