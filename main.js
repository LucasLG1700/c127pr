m1 = "";
m2 = "";
function preload()
{
    m1 = loadSound("m1.mp3");
    m2 = loadSound("m2.mp3");
}
function setup(){
    canvas = createCanvas(600, 500);
    canvas.center();

    video = createCapture(VIDEO);
    video.hide();
}
function draw(){
    image(video, 0, 0, 600, 500);
}
