function startClassification(){
    navigator.mediaDevices.getUserMedia({ audio: true});
    classifier = ml5.soundClassifier('https://teachablemachine.withgoogle.com/models/RH3X_T7zy/model.json', modelReady);
}

function modelReady(){
    classifier.classify(gotResults);
}