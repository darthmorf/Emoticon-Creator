var canvas = document.getElementById("canvas");
var ctx = canvas.getContext("2d");

var showHeadbaseOptions = document.getElementById("showHeadbaseOptions");
var headbaseOptions = document.getElementById("headbaseOptions");

var showEyeOptions = document.getElementById("showEyeOptions");
var eyeOptions = document.getElementById("eyeOptions");

var showHairOptions = document.getElementById("showHairOptions");
var hairOptions = document.getElementById("hairOptions");

var showHatOptions = document.getElementById("showHatOptions");
var hatOptions = document.getElementById("hatOptions");

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
    },
    hair : {
        index: 0,
        hue: hueDefault,
        sat: satDefault,
        lit: litDefault,
    },
    hat : {
        index: 0,
        hue: hueDefault,
        sat: satDefault,
        lit: litDefault,
    }
};

function init() {
    loadHeadbaseOptions();
    loadHairOptions();
    loadHatOptions();
    displayEmoticon();
}

showHeadbaseOptions.onclick = function () {
    headbaseOptions.classList.remove("disabled");
    eyeOptions.classList.add("disabled");
    hairOptions.classList.add("disabled");
    hatOptions.classList.add("disabled");
}

showEyeOptions.onclick = function () {
    eyeOptions.classList.remove("disabled");
    headbaseOptions.classList.add("disabled");
    hairOptions.classList.add("disabled");
    hatOptions.classList.add("disabled");
}

showHairOptions.onclick = function () {
    hairOptions.classList.remove("disabled");
    headbaseOptions.classList.add("disabled");
    eyeOptions.classList.add("disabled");
    hatOptions.classList.add("disabled");
}

showHatOptions.onclick = function () {
    hatOptions.classList.remove("disabled");
    headbaseOptions.classList.add("disabled");
    eyeOptions.classList.add("disabled");
    hairOptions.classList.add("disabled");
}

function loadHeadbaseOptions () {
    var headbaseCount = 8;
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
    }
}

function loadHairOptions () {
    var hairCount = 20;
    var i = 0;
    for (i=0; i <= hairCount; i++){
        var button = document.createElement("button");
        button.hairIndex = i;
        button.innerHTML = `<img src=${assetDir}/hairpreview/hair${i}.png>`;
        button.onclick = function () {
            emoticon.hair.index = this.hairIndex;
            displayEmoticon(true);
        }
        hairOptions.appendChild(button);
    }
}

function loadHatOptions () {
    var hatCount = 23;
    var i = 0;
    for (i=0; i <= hatCount; i++){
        var button = document.createElement("button");
        button.hatIndex = i;
        button.innerHTML = `<img src=${assetDir}/hatspreview/hat${i}.png>`;
        button.onclick = function () {
            emoticon.hat.index = this.hatIndex;
            displayEmoticon(true);
        }
        hatOptions.appendChild(button);
    }
}



function displayEmoticon (refreshCanvas=false) {
    if (refreshCanvas) {
        ctx.clearRect(0, 0, canvas.width, canvas.height); 
    }

    var headbase = new Image();
    headbase.src = `${assetDir}/headbases/headbase${emoticon.headbase.index}.png`;

    headbase.onload = function () {
        ctx.filter = `hue-rotate(${emoticon.headbase.hue}deg) saturate(${emoticon.headbase.sat}%) brightness(${emoticon.headbase.lit}%)`;
        ctx.drawImage(headbase, 0, 0, 360, 360);

        var eyes = new Image();
        eyes.src = `${assetDir}/eyes/headbase${emoticon.headbase.index}.png`;

        eyes.onload = function () {
            ctx.filter = `hue-rotate(${emoticon.eye.hue}deg) saturate(${emoticon.eye.sat}%) brightness(${emoticon.eye.lit}%)`;
            ctx.drawImage(eyes, 0, 0, 360, 360);
    
            var hair = new Image();
            hair.src = `${assetDir}/hair/hair${emoticon.hair.index}.png`;

            hair.onload = function () {
                ctx.filter = `hue-rotate(${emoticon.hair.hue}deg) saturate(${emoticon.hair.sat}%) brightness(${emoticon.hair.lit}%)`;
                ctx.drawImage(hair, 0, 0, 360, 360);

                var hat = new Image();
                hat.src = `${assetDir}/hatsmasks/hat${emoticon.hat.index}.png`;
                console.log(`${assetDir}/hatsmasks/hat${emoticon.hat.index}.png`)

                hat.onload = function () {
                    ctx.filter = `hue-rotate(${emoticon.hat.hue}deg) saturate(${emoticon.hat.sat}%) brightness(${emoticon.hat.lit}%)`;
                    ctx.drawImage(hat, 0, 0, 360, 360);
                    removeMask();
                }
            }
        }
    }   
}

function removeMask () {
    var maskColour = [255,0,255];
    var canvasData = ctx.getImageData(0, 0, 400, 400),
        pix = canvasData.data;

    for (var i = 0, n = pix.length; i <n; i += 4) {
        if(pix[i] === maskColour[0] && pix[i+1] === maskColour[1] && pix[i+2] === maskColour[2]){
             pix[i+3] = 0;   
        }
    }

    ctx.putImageData(canvasData, 0, 0);
}