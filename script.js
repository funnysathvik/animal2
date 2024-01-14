function start(){
    navigator.mediaDevices.getUserMedia({audio: true});
    classifier = ml5.soundclassifier("https://teachablemachine.withgoogle.com/models/yMfhiRsL_/",modelReady);
}
function modelReady(){
    classifier.classify(gotResults);
}
function gotResults(error,results){
    if(error){
        console.error(error);
    }
    else{
        
    }
}