function startClassification(){
    navigator.mediaDevices.getUserMedia({audio: true});
    classifier= ml5.soundClassifier('https://teachablemachine.withgoogle.com/models/XXGjaSKeO/model.json', modelReady);
}

function modelReady(){
    classifier.classify(gotResults);
}

var dog=0;
var cat=0;
var cow=0;

function gotResults(error, results){
    if(error){
        console.error(error);
    }
    else{
        console.log(results);

        random_color_r=Math.floor(Math.random()*255)+1;
        random_color_g=Math.floor(Math.random()*255)+1;
        random_color_b=Math.floor(Math.random()*255)+1;

        document.getElementById("result_label").innerHTML="I can hear - " + results[0].label;
        document.getElementById("result_count").innerHTML= "Detection of dogs: " + dog + ", Detection of cats: " + cat + ", Detection of cow: " + cow;
        
        document.getElementById("result_label").style.color= "rgb("+random_color_r+","+random_color_g+", "+random_color_b+")";
        document.getElementById("result_count").style.color= "rgb("+random_color_r+","+random_color_g+", "+random_color_b+")";

        img= document.getElementById("img");

        if(results[0].label== "Dog"){
           img.src= "dog-dribbble.gif";
           dog= dog +1; 
        }else if(results[0].label == "Cat"){
            img.src="meowing cat.gif";
            cat= cat+1;
        }else if(results[0].label == "Cow"){
             img.src="cow mooing.gif";
            cow= cow+1;
        }else{
            img.src="big-ears-im-listening.gif";

        }
    }
}