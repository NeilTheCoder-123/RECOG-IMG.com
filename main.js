Webcam.set({
    width:330,
    height:310,
    margin_top:-24.5,
    png_quality:100,
    image_format:'png'
});

camera = document.getElementById("camera");

Webcam.attach("#camera");

function take_selfie(){
    Webcam.snap(function(data_uri){
        document.getElementById("result").innerHTML = '<img id="snapped_img" src="'+data_uri+'"/>';
    }
    )
};

console.log('ml5 version', ml5.version);

classifier = ml5.imageClassifier('https://teachablemachine.withgoogle.com/models/Zw9aFCCKE/', modelLoaded);
 function modelLoaded(){
     console.log("Hourra! Model Loaded!");
 };

function check(){
    img = document.getElementById("snapped_image");
    classifier.classify(img, gotResult);
    console.log("Helloe");
}

function gotResult(error, results){
    if (error){
        console.error(error);
    } else {
        console.log(results);
        document.getElementById("result_object").innerHTML = results[0].label;
        document.getElementById("result_accuracy").innerHTML = results[0].confidence.toFixed(3);
    }
}