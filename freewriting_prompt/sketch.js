/*
GIPHY API
api.giphy.com


public KEY: dc6zaTOxFJmzC


*/

var giphy = "http://api.giphy.com/v1/gifs/random?api_key=";
var giphy_key = "dc6zaTOxFJmzC";
var url = giphy+giphy_key;

var pic;

function setup() {
  noCanvas();
  colorMode(HSB);
  loadJSON(url,firstImg);
}

function draw() {
  // background(0,20,100);
}

function mousePressed(){
  loadJSON(url,gotData);
}

function firstImg(giphy){
  var pic = createImg(giphy.data.image_url);
  pic.id(picture);
}

function gotData(giphy){
  var pic = createImg(giphy.data.image_url);
  pic.id(picture);
}