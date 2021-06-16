status="";

img="";

objects=[];


function setup(){
    canvas=createCanvas(600,500);
    canvas.center();
    object_dector=ml5.objectDetector('cocossd',modelLoaded);
}
function modelLoaded(){
    console.log("Model is initalized");
    status = "true";
    object_dector.detect(img, gotResult);
}

function gotResult(error, results) {
    if (error) {
        console.log(error);
    }
    else {
        console.log(results);
        objects=results;
    }
}


function preload(){
    img=loadImage("bedroom.jfif");
}

function draw(){
    image(img,0,0,600,500);
    if (status!="") {
        for( var i=0;i<objects.length;i++){
           document.getElementById("status").innerHTML="Status:Object Detected";
           fill("red");
           percent=floor(objects[i].confidence*100);
           text(objects[i].label+" "+percent+"%",objects[i].x+15,objects[i].y+15) ;
           noFill();
           stroke("black");
           rect(objects[i].x,objects[i].y,objects[i].width,objects[i].height);
          
        }        
}
}

function back(){
    window.location="index.html";
}