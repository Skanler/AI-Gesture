function setup(){
canvas = createCanvas(600, 600);
canvas.position(650, 200);
video = createCapture(VIDEO);
video.size(550, 500);
poseNet = ml5.poseNet(video, modelLoaded);
poseNet.on('pose', gotPoses);
}

function preload(){

}

function draw(){
    
}

function modelLoaded(){
    console.log("PoseNet is ready to draw rectangles!");
}

function gotPoses(results){
    if(results.length > 0){
    console.log(results);
    }
}