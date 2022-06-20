var nosex = 0
var nosey = 0
var filter = ""
function preload() {
filter = loadImage("filter.png")
}

function setup() {
canvas = createCanvas(400,400)
canvas.center();
video=createCapture(VIDEO);
video.size(400,400);
video.hide()
poseNet = ml5.poseNet(video, modelLoaded)
poseNet.on('pose', gotPoses)
 
}

function draw() {
image(video,0,0,400,400);
image(filter,nosex,nosey,80,60)
}

function modelLoaded() {
    console.log('PoseNet is initialized')
}

function gotPoses(results) {
    if (results.length > 0 ){
        console.log(results);
        console.log("nose x = " + results[0].pose.nose.x)
        console.log("nose y = " + results[0].pose.nose.y)
    nosex = results[0].pose.nose.x - 35
    nosey = results[0].pose.nose.y
    

    }
}
function takeSnapShot(){
    save("moustachefilter.png")
}