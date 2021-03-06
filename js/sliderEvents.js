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


var hairHueSlider  = document.getElementById("hairHue");
var hairHueDisplay = document.getElementById("hairHueDisplay");
var hairHueReset   = document.getElementById("hairHueReset");
var hairSatSlider  = document.getElementById("hairSat");
var hairSatDisplay = document.getElementById("hairSatDisplay");
var hairSatReset   = document.getElementById("hairSatReset");
var hairLitSlider  = document.getElementById("hairLit");
var hairLitDisplay = document.getElementById("hairLitDisplay");
var hairLitReset   = document.getElementById("hairLitReset");

hairHueSlider.oninput = function() {
    hairHueDisplay.value = this.value;
    emoticon.hair.hue = this.value;
    displayEmoticon();
}
hairHueDisplay.oninput = function () {
    hairHueSlider.value = this.value;
    emoticon.hair.hue = this.value;
    displayEmoticon();
}
hairHueReset.onclick = function () {
    emoticon.hair.hue = hueDefault;
    hairHueSlider.value = emoticon.hair.hue;
    hairHueDisplay.value = emoticon.hair.hue;
    displayEmoticon();
}

hairSatSlider.oninput = function() {
    hairSatDisplay.value = this.value;
    emoticon.hair.sat = this.value;
    displayEmoticon();
}
hairSatDisplay.oninput = function () {
    hairSatSlider.value = this.value;
    emoticon.hair.sat = this.value;
    displayEmoticon();
}
hairSatReset.onclick = function () {
    emoticon.hair.sat = satDefault;
    hairSatSlider.value = emoticon.hair.sat;
    hairSatDisplay.value = emoticon.hair.sat;
    displayEmoticon();
}

hairLitSlider.oninput = function() {
    hairLitDisplay.value = this.value;
    emoticon.hair.lit = this.value;
    displayEmoticon();
}
hairLitDisplay.oninput = function () {
    hairLitSlider.value = this.value;
    emoticon.hair.lit = this.value;
    displayEmoticon();
}
hairLitReset.onclick = function () {
    emoticon.hair.lit = litDefault;
    hairLitSlider.value = emoticon.hair.lit;
    hairLitDisplay.value = emoticon.hair.lit;
    displayEmoticon();
}


var beardHueSlider  = document.getElementById("beardHue");
var beardHueDisplay = document.getElementById("beardHueDisplay");
var beardHueReset   = document.getElementById("beardHueReset");
var beardSatSlider  = document.getElementById("beardSat");
var beardSatDisplay = document.getElementById("beardSatDisplay");
var beardSatReset   = document.getElementById("beardSatReset");
var beardLitSlider  = document.getElementById("beardLit");
var beardLitDisplay = document.getElementById("beardLitDisplay");
var beardLitReset   = document.getElementById("beardLitReset");

beardHueSlider.oninput = function() {
    beardHueDisplay.value = this.value;
    emoticon.beard.hue = this.value;
    displayEmoticon();
}
beardHueDisplay.oninput = function () {
    beardHueSlider.value = this.value;
    emoticon.beard.hue = this.value;
    displayEmoticon();
}
beardHueReset.onclick = function () {
    emoticon.beard.hue = hueDefault;
    beardHueSlider.value = emoticon.beard.hue;
    beardHueDisplay.value = emoticon.beard.hue;
    displayEmoticon();
}

beardSatSlider.oninput = function() {
    beardSatDisplay.value = this.value;
    emoticon.beard.sat = this.value;
    displayEmoticon();
}
beardSatDisplay.oninput = function () {
    beardSatSlider.value = this.value;
    emoticon.beard.sat = this.value;
    displayEmoticon();
}
beardSatReset.onclick = function () {
    emoticon.beard.sat = satDefault;
    beardSatSlider.value = emoticon.beard.sat;
    beardSatDisplay.value = emoticon.beard.sat;
    displayEmoticon();
}

beardLitSlider.oninput = function() {
    beardLitDisplay.value = this.value;
    emoticon.beard.lit = this.value;
    displayEmoticon();
}
beardLitDisplay.oninput = function () {
    beardLitSlider.value = this.value;
    emoticon.beard.lit = this.value;
    displayEmoticon();
}
beardLitReset.onclick = function () {
    emoticon.beard.lit = litDefault;
    beardLitSlider.value = emoticon.beard.lit;
    beardLitDisplay.value = emoticon.beard.lit;
    displayEmoticon();
}


var hatHueSlider  = document.getElementById("hatHue");
var hatHueDisplay = document.getElementById("hatHueDisplay");
var hatHueReset   = document.getElementById("hatHueReset");
var hatSatSlider  = document.getElementById("hatSat");
var hatSatDisplay = document.getElementById("hatSatDisplay");
var hatSatReset   = document.getElementById("hatSatReset");
var hatLitSlider  = document.getElementById("hatLit");
var hatLitDisplay = document.getElementById("hatLitDisplay");
var hatLitReset   = document.getElementById("hatLitReset");

hatHueSlider.oninput = function() {
    hatHueDisplay.value = this.value;
    emoticon.hat.hue = this.value;
    displayEmoticon();
}
hatHueDisplay.oninput = function () {
    hatHueSlider.value = this.value;
    emoticon.hat.hue = this.value;
    displayEmoticon();
}
hatHueReset.onclick = function () {
    emoticon.hat.hue = hueDefault;
    hatHueSlider.value = emoticon.hat.hue;
    hatHueDisplay.value = emoticon.hat.hue;
    displayEmoticon();
}

hatSatSlider.oninput = function() {
    hatSatDisplay.value = this.value;
    emoticon.hat.sat = this.value;
    displayEmoticon();
}
hatSatDisplay.oninput = function () {
    hatSatSlider.value = this.value;
    emoticon.hat.sat = this.value;
    displayEmoticon();
}
hatSatReset.onclick = function () {
    emoticon.hat.sat = satDefault;
    hatSatSlider.value = emoticon.hat.sat;
    hatSatDisplay.value = emoticon.hat.sat;
    displayEmoticon();
}

hatLitSlider.oninput = function() {
    hatLitDisplay.value = this.value;
    emoticon.hat.lit = this.value;
    displayEmoticon();
}
hatLitDisplay.oninput = function () {
    hatLitSlider.value = this.value;
    emoticon.hat.lit = this.value;
    displayEmoticon();
}
hatLitReset.onclick = function () {
    emoticon.hat.lit = litDefault;
    hatLitSlider.value = emoticon.hat.lit;
    hatLitDisplay.value = emoticon.hat.lit;
    displayEmoticon();
}


var accessHueSlider  = document.getElementById("accessHue");
var accessHueDisplay = document.getElementById("accessHueDisplay");
var accessHueReset   = document.getElementById("accessHueReset");
var accessSatSlider  = document.getElementById("accessSat");
var accessSatDisplay = document.getElementById("accessSatDisplay");
var accessSatReset   = document.getElementById("accessSatReset");
var accessLitSlider  = document.getElementById("accessLit");
var accessLitDisplay = document.getElementById("accessLitDisplay");
var accessLitReset   = document.getElementById("accessLitReset");

accessHueSlider.oninput = function() {
    accessHueDisplay.value = this.value;
    emoticon.access.hue = this.value;
    displayEmoticon();
}
accessHueDisplay.oninput = function () {
    accessHueSlider.value = this.value;
    emoticon.access.hue = this.value;
    displayEmoticon();
}
accessHueReset.onclick = function () {
    emoticon.access.hue = hueDefault;
    accessHueSlider.value = emoticon.access.hue;
    accessHueDisplay.value = emoticon.access.hue;
    displayEmoticon();
}

accessSatSlider.oninput = function() {
    accessSatDisplay.value = this.value;
    emoticon.access.sat = this.value;
    displayEmoticon();
}
accessSatDisplay.oninput = function () {
    accessSatSlider.value = this.value;
    emoticon.access.sat = this.value;
    displayEmoticon();
}
accessSatReset.onclick = function () {
    emoticon.access.sat = satDefault;
    accessSatSlider.value = emoticon.access.sat;
    accessSatDisplay.value = emoticon.access.sat;
    displayEmoticon();
}

accessLitSlider.oninput = function() {
    accessLitDisplay.value = this.value;
    emoticon.access.lit = this.value;
    displayEmoticon();
}
accessLitDisplay.oninput = function () {
    accessLitSlider.value = this.value;
    emoticon.access.lit = this.value;
    displayEmoticon();
}
accessLitReset.onclick = function () {
    emoticon.access.lit = litDefault;
    accessLitSlider.value = emoticon.access.lit;
    accessLitDisplay.value = emoticon.access.lit;
    displayEmoticon();
}