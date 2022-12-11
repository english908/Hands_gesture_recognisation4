Webcam.set({
    width:350,
    height:300,
    image_format:'png',
    png_quality:90  
});
 camera= document.getElementById("camera");

 Webcam.attach("#camera");

 function capture(){
    Webcam.snap(function (data_uri){
       document.getElementById("result").innerHTML= '<img id="captured_image" src="'+data_uri+'">';
    });
}
console.log("ml5 version",ml5.version );
Classifier = ml5.imageClassifier ("https://teachablemachine.withgoogle.com/models/model.json", modelLoaded );

function modelLoaded(){
    console.log("Model Loaded!");
}
function speak(){
    s = window.speechSynthesis;
    s1 = "The Prediction is "+prediction;
    s2 = "It means "+ meaning_gesture;
    s3 = new SpeechSynthesisUtterance(s1+s2);
    if (prediction == "Best"){
        meaning_gesture = "All the very Best!!!"
    }
    if (prediction == "Victory"){
        meaning_gesture = "We have won!!"
    }
    if (prediction == "Amazing"){
        meaning_gesture = "Superb!!!"
    }
    if (prediction == "Stop"){
        meaning_gesture = "Stop!!"
    }
 }
 function check(){
    img = document.getElementById("captured_image");
    Classifier.classify(img , gotResults);
 }
 function gotResults(error, results){
    if(error){
       console.error(error);
    } else{
       console.log(results);
       prediction1 = results[0].label;
       prediction2 = results[1].label;
       document.getElementById("result_emotion_name1").innerHTML= prediction1;
       document.getElementById("result_emotion_name2").innerHTML= prediction2;
       speak();
       if ( prediction == "Best"){
        document.getElementById("update_gesture") = "&#128077;";
       }
       if ( prediction == "Victory"){
          document.getElementById("update_gesture") = "&#9996;";
         } 
         if ( prediction == "Stop"){
          document.getElementById("update_gesture") = "&#9995;";
         }    
         if ( prediction == "Amazing"){
          document.getElementById("update_gesture") = "&#128076;";
         }
        }     
    }