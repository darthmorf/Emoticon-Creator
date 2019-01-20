var canvas = document.getElementById("canvas");
var ctx = canvas.getContext("2d");

var showHeadbaseOptions = document.getElementById("showHeadbaseOptions");
var headbaseOptions = document.getElementById("headbaseOptions");

var showEyeOptions = document.getElementById("showEyeOptions");
var eyeOptions = document.getElementById("eyeOptions");

var showHairOptions = document.getElementById("showHairOptions");
var hairOptions = document.getElementById("hairOptions");

var showBeardOptions = document.getElementById("showBeardOptions");
var beardOptions = document.getElementById("beardOptions");

var showHatOptions = document.getElementById("showHatOptions");
var hatOptions = document.getElementById("hatOptions");

var showAccessOptions = document.getElementById("showAccessOptions");
var accessOptions = document.getElementById("accessOptions");

var downloadButton = document.getElementById("downloadBtn");

var headbaseCount = 8;
var eyeCount = headbaseCount;
var hairCount = 20;
var beardCount = 7;
var hatCount = 23;
var accessCount = 12;

var headbases = [];
var eyes = [];
var hairs = [];
var beards = [];
var hats = [];
var accessories = [];

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
    beard : {        
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
    },
    access : {
        index: 0,
        hue: hueDefault,
        sat: satDefault,
        lit: litDefault,
    }
};

function init() {
    headbases = loadAssets(headbaseCount, `${assetDir}/headbases/headbase`);
    eyes = loadAssets(eyeCount, `${assetDir}/eyes/headbase`);
    hairs = loadAssets(hairCount, `${assetDir}/hair/hair`);
    beards = loadAssets(beardCount, `${assetDir}/beards/beard`);
    hats = loadAssets(hatCount, `${assetDir}/hats/hat`);
    accessories = loadAssets(accessCount, `${assetDir}/access/access`);
    
    displayEmoticon();

    loadHeadbaseOptions();
    loadHairOptions();
    loadHatOptions();
    loadBeardOptions();
    loadAccessOptions();
}

function loadAssets (count, path) {
    var assets = [];
    for (var i=0; i <=count; i++) {
        var img = new Image();
        img.src = `${path}${i}.png`;
        assets.push(img);
    }
   return assets;
}

function loadHeadbaseOptions () {
    var i = 0;
    for (i=0; i <= headbaseCount; i++){
        var button = document.createElement("button");
        button.headbaseIndex = i;
        button.classList.add("button");
        button.classList.add("smallButton");
        button.innerHTML = `<img src=${assetDir}/headbasespreview/headbase${i}.png>`;
        button.onclick = function () {
            emoticon.headbase.index = this.headbaseIndex;
            displayEmoticon(true);
        }
        if (i % 8 == 0 && i != 0){
            headbaseOptions.appendChild(document.createElement("BR"));
        }
        headbaseOptions.appendChild(button);
    }
}

function loadHairOptions () {
    var i = 0;
    for (i=0; i <= hairCount; i++){
        var button = document.createElement("button");
        button.hairIndex = i;
        button.classList.add("button");
        button.classList.add("smallButton");
        button.innerHTML = `<img src=${assetDir}/hairpreview/hair${i}.png>`;
        button.onclick = function () {
            emoticon.hair.index = this.hairIndex;
            displayEmoticon(true);
        }
        if (i % 8 == 0 && i != 0){
            hairOptions.appendChild(document.createElement("BR"));
        }
        hairOptions.appendChild(button);
    }
}

function loadBeardOptions () {
    var i = 0;
    for (i=0; i <= beardCount; i++){
        var button = document.createElement("button");
        button.beardIndex = i;
        button.classList.add("button");
        button.classList.add("smallButton");
        button.innerHTML = `<img src=${assetDir}/beardspreview/beard${i}.png>`;
        button.onclick = function () {
            emoticon.beard.index = this.beardIndex;
            displayEmoticon(true);
        }
        if (i % 8 == 0 && i != 0){
            beardOptions.appendChild(document.createElement("BR"));
        }
        beardOptions.appendChild(button);
    }
}

function loadHatOptions () {
    var i = 0;
    for (i=0; i <= hatCount; i++){
        var button = document.createElement("button");
        button.hatIndex = i;
        button.classList.add("button");
        button.classList.add("smallButton");
        button.innerHTML = `<img src=${assetDir}/hatspreview/hat${i}.png>`;
        button.onclick = function () {
            emoticon.hat.index = this.hatIndex;
            displayEmoticon(true);
        }
        if (i % 8 == 0 && i != 0){
            hatOptions.appendChild(document.createElement("BR"));
        }
        hatOptions.appendChild(button);
    }
}

function loadAccessOptions () {
    var i = 0;
    for (i=0; i <= accessCount; i++){
        var button = document.createElement("button");
        button.accessIndex = i;
        button.classList.add("button");
        button.classList.add("smallButton");
        button.innerHTML = `<img src=${assetDir}/accesspreview/access${i}.png>`;
        button.onclick = function () {
            emoticon.access.index = this.accessIndex;
            displayEmoticon(true);
        }
        if (i % 8 == 0 && i != 0){
            accessOptions.appendChild(document.createElement("BR"));
        }
        accessOptions.appendChild(button);
    }
}

function displayEmoticon (refreshCanvas=false) {
    if (refreshCanvas) {
        ctx.clearRect(0, 0, canvas.width, canvas.height); 
    }

    ctx.filter = `hue-rotate(${emoticon.headbase.hue}deg) saturate(${emoticon.headbase.sat}%) brightness(${emoticon.headbase.lit}%)`;
    ctx.drawImage(headbases[emoticon.headbase.index], 0, 0, 360, 360);

    ctx.filter = `hue-rotate(${emoticon.eye.hue}deg) saturate(${emoticon.eye.sat}%) brightness(${emoticon.eye.lit}%)`;
    ctx.drawImage(eyes[emoticon.headbase.index], 0, 0, 360, 360);
    
    ctx.filter = `hue-rotate(${emoticon.hair.hue}deg) saturate(${emoticon.hair.sat}%) brightness(${emoticon.hair.lit}%)`;
    ctx.drawImage(hairs[emoticon.hair.index], 0, 0, 360, 360);

    ctx.filter = `hue-rotate(${emoticon.beard.hue}deg) saturate(${emoticon.beard.sat}%) brightness(${emoticon.beard.lit}%)`;
    ctx.drawImage(beards[emoticon.beard.index], 0, 0, 360, 360);

    ctx.filter = `hue-rotate(${emoticon.hat.hue}deg) saturate(${emoticon.hat.sat}%) brightness(${emoticon.hat.lit}%)`;
    ctx.drawImage(hats[emoticon.hat.index], 0, 0, 360, 360);
    removeMask();

    ctx.filter = `hue-rotate(${emoticon.access.hue}deg) saturate(${emoticon.access.sat}%) brightness(${emoticon.access.lit}%)`;
    ctx.drawImage(accessories[emoticon.access.index], 0, 0, 360, 360);  
}

function removeMask () {
    var maskColour = ctx.getImageData(0, 0, 1, 1).data;
    var canvasData = ctx.getImageData(0, 0, 400, 400),
        pix = canvasData.data;

    for (var i = 0, n = pix.length; i <n; i += 4) {
        if(pix[i] === maskColour[0] && pix[i+1] === maskColour[1] && pix[i+2] === maskColour[2]){
             pix[i+3] = 0;   
        }
    }

    ctx.putImageData(canvasData, 0, 0);
}

downloadButton.onclick = function () {
    var lnk = document.createElement('a'), e;
    lnk.download = "emote.png";
    lnk.href = canvas.toDataURL("image/png;base64");

    if (document.createEvent) {
        e = document.createEvent("MouseEvents");
        e.initMouseEvent("click", true, true, window,
                        0, 0, 0, 0, 0, false, false, false,
                        false, 0, null);

        lnk.dispatchEvent(e);
    } else if (lnk.fireEvent) {
        lnk.fireEvent("onclick");
    }
}

showHeadbaseOptions.onclick = function () {
    headbaseOptions.classList.remove("disabled");
    eyeOptions.classList.add("disabled");
    hairOptions.classList.add("disabled");
    hatOptions.classList.add("disabled");
    beardOptions.classList.add("disabled");
    accessOptions.classList.add("disabled");
}

showEyeOptions.onclick = function () {
    eyeOptions.classList.remove("disabled");
    headbaseOptions.classList.add("disabled");
    hairOptions.classList.add("disabled");
    hatOptions.classList.add("disabled");
    beardOptions.classList.add("disabled");
    accessOptions.classList.add("disabled");
}

showHairOptions.onclick = function () {
    hairOptions.classList.remove("disabled");
    headbaseOptions.classList.add("disabled");
    eyeOptions.classList.add("disabled");
    hatOptions.classList.add("disabled");
    beardOptions.classList.add("disabled");
    accessOptions.classList.add("disabled");
}

showBeardOptions.onclick = function () {
    beardOptions.classList.remove("disabled");
    headbaseOptions.classList.add("disabled");
    eyeOptions.classList.add("disabled");
    hatOptions.classList.add("disabled");
    hairOptions.classList.add("disabled");
    accessOptions.classList.add("disabled");
}

showHatOptions.onclick = function () {
    hatOptions.classList.remove("disabled");
    headbaseOptions.classList.add("disabled");
    eyeOptions.classList.add("disabled");
    hairOptions.classList.add("disabled");
    beardOptions.classList.add("disabled");
    accessOptions.classList.add("disabled");
}

showAccessOptions.onclick = function () {
    accessOptions.classList.remove("disabled");
    headbaseOptions.classList.add("disabled");
    eyeOptions.classList.add("disabled");
    hairOptions.classList.add("disabled");
    beardOptions.classList.add("disabled");
    hatOptions.classList.add("disabled");
}