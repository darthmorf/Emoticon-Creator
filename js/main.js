var canvas = document.getElementById("canvas");
var ctx = canvas.getContext("2d");

var showHeadbaseOptions = document.getElementById("showHeadbaseOptions");
var headbaseOptions = document.getElementById("headbaseOptions");

var showEyeOptions = document.getElementById("showEyeOptions");
var eyeOptions = document.getElementById("eyeOptions");

canvas.width = 400;
canvas.height = 400;
ctx.imageSmoothingEnabled = false;

var assetDir = "./assets/sprites";

var hueDefault = 0;
var satDefault = 100;
var litDefault = 100;

var emoticon = {
    headbase : {
        index: 0,
        hue: hueDefault,
        sat: satDefault,
        lit: litDefault,
    },
    eye : {
        hue: hueDefault,
        sat: satDefault,
        lit: litDefault,
    }
};

function init() {
    loadHeadbaseOptions();
    displayEmoticon();
}

showHeadbaseOptions.onclick = function () {
    headbaseOptions.classList.remove("disabled");
    eyeOptions.classList.add("disabled");
}

showEyeOptions.onclick = function () {
    eyeOptions.classList.remove("disabled");
    headbaseOptions.classList.add("disabled");
}

function loadHeadbaseOptions () {
    var headbaseCount = 8;
    var buttons = [];
    var i = 0;
    for (i=0; i <= headbaseCount; i++){
        var button = document.createElement("button");
        button.headbaseIndex = i;
        button.innerHTML = `<img src=${assetDir}/headbasespreview/headbase${i}.png>`;
        button.onclick = function () {
            emoticon.headbase.index = this.headbaseIndex;
            displayEmoticon(true);
        }
        headbaseOptions.appendChild(button);
        buttons.push(button);
    }
}


function displayEmoticon (refreshCanvas=false) {
    if (refreshCanvas) {
        ctx.clearRect(0, 0, canvas.width, canvas.height); 
    }

    var headbase = new Image();
    headbase.src = `${assetDir}/headbases/headbase${emoticon.headbase.index}.png`;

    var eyes = new Image();
    eyes.src = `${assetDir}/eyes/headbase${emoticon.headbase.index}.png`;

    headbase.onload = function () {
        ctx.filter = `hue-rotate(${emoticon.headbase.hue}deg) saturate(${emoticon.headbase.sat}%) brightness(${emoticon.headbase.lit}%)`;
        ctx.drawImage(headbase, 0, 0, 360, 360);
    }   

    eyes.onload = function () {
        ctx.filter = `hue-rotate(${emoticon.eye.hue}deg) saturate(${emoticon.eye.sat}%) brightness(${emoticon.eye.lit}%)`;
        ctx.drawImage(eyes, 0, 0, 360, 360);
    }
}