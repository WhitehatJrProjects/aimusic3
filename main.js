peterpanmusic = "";
moanamusic = "";

leftWristX = "0";
rightWristX = "0";
leftWristY = "0";
rightWristY = "0";

function preload() {
    peterpanmusic = loadSound("peterpanmusic.mp3");
    moanamusic = loadSound("moana.mp3");
}

function setup() {
    canvas = createCanvas(600, 500);
    canvas.center();

    canvas.position(450, 250)

    video = createCapture(VIDEO);
    video.hide();
    poseNet = ml5.poseNet(video, modelLoaded);
}

function draw() {
    image(video, 0, 0, 600, 500);
}

function modelLoaded() {
    console.log('PoseNet Is Intialized');
    poseNet.on('pose', gotPoses);
}

function gotPoses(results)
{
    if(results.length > 0)
    {
        console.log(results);
        leftWristX = results[0].pose.leftWrist.x;
        rightWristX = results[0].pose.rightWrist.x;
        leftWristY = results[0].pose.leftWrist.y;
        rightWristY = results[0].pose.rightWrist.y
        console.log("leftWristX = " + leftWristX + ", leftWristY = " + leftWristY);
        console.log("rightWristX = " + rightWristX + ", rightWristY = " + rightWristY);
    }
}


