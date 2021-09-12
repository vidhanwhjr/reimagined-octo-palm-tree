camera = document.getElementById("Wecam");
Webcam.set({
    width: 350,
    height: 300,
    image_format:'png',
    png_quality: 90
});
console.log("LOAD")
Webcam.attach(camera);

function clickpic(){
    Webcam.snap(function(data_uri){document.getElementById("IMG").innerHTML = '<img id ="moo" src = "'+data_uri+'"/>'});

}
var classifier = ml5.imageClassifier('https://teachablemachine.withgoogle.com/models/GY9MefFFf/model.json', re);

function re(){
    console.log("MODEL_LOADED_8597");
}

function identify(){
   img = document.getElementById("moo");
   classifier.classify(img, bark);    
}

function bark(error,results){
    if(error){
        console.error(error);
    }
    else{
        console.log(results);
        document.getElementById("revserve_space1").innerHTML = results[0].label;
        document.getElementById("reserve_space2").innerHTML = (results[0].confidence*100).toFixed(2) + "%";
    }
}