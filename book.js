img ="";
status = "";

objects = [];

function setup(){
    canvas = createCanvas(600, 600);
    canvas.center();
    objectDetector = ml5.objectDetector('cocossd', modelLoaded);
    document.getElementById("status").innerHTML = "status-detecting objects";
}

function modelLoaded(){
    console.log("model "+"is " +"loaded");
    status = true;
    objectDetector.detect(img, gotresult);
}

function gotresult(error , result){
    if(error){
        console.error(error);
    }
    else{
        console.log(result);
        objects = result;
    }
}

function preload(){
img = loadImage('book250.jpeg');
}

function draw(){
    image(img, 0, 0, 600, 600);

    if(status != ""){

     for(i = 0;  i< objects.length; i++ ){
        document.getElementById("status").innerHTML = "book detected";
        fill('black');
      percent = floor(objects[i].confidence * 100);
        text(objects[i].label + " " + percent + "%" , objects[i].x +50 , objects[i].y + 50);
        noFill();
        stroke('blue');
        rect(objects[i].x - 50 , objects[i].y , objects[i].width - 60, objects[i].height);
    
        
     }
    }

}

function goback(){
    window.location = "index.html";
}