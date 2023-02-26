// Songs
var song = "";
var song1 = "";
// Wrist X 
var leftWristX = 0;
var rightWristX = 0;
// Wrist Y
var leftWristY = 0;
var rightWristY = 0;

function preload() {
   song = loadSound("music.mp3");
   song1 = loadSound("music2.mp3");
}
function setup() {
    canvas = createCanvas(540, 540);
    canvas.center();
    video = createCapture(VIDEO);
    video.hide();
    poseNet = ml5.poseNet(video, modelLoaded);
    poseNet.on('pose', gotPoses);
}

function modelLoaded() {
    console.log("Model Loaded");
}
function draw() {
    image(video, 0, 0, 540, 540);


}

function gotPoses(results){
   
    if(results.length > 0) {
    console.log(results);


        leftWristX = results[0].pose.leftWrist.x;
        leftWristY = results[0].pose.leftWrist.y;
        console.log("Left Wrist X = " + leftWristX, "Left Wrist Y = " + leftWristY);
        
        rightWristX = results[0].pose.rightWrist.x;
        rightWristY = results[0].pose.rightWrist.y;
        console.log("Right Wrist X = " + rightWristX, "Right Wrist Y = " + rightWristY);
    }
}