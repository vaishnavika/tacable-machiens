Webcam.set({
    width:350,
    height:300,
    image_format:'png',
    png_quality:90
});
camera=document.getElementById("camera");

Webcam.attach('#camara');

function capture()
{
    Webcam.snap(function(data_uri){
        document.getElementById("result").innerHTML='<img id="captured_image" src="'+data_uri+'">';
    });
}
console.log('ml5 version:',ml5.version);

classifer=ml5.imageClassifier(' https://teachablemachine.withgoogle.com/models/jAokk-6OD/model.json',modelLoded);
function modelLoded(){
     console.log ('Model Loded!')
}

function identify(){
    img=document.getElementById('capture_img');
    classifer.classify(img, gotResult);
}

function gotResult(error, result) {
    if (error){
        console.error(error);
    }
    else{
        console.log(result);
        document.getElementById("result_object_name").innerHTML=result[0].label;
        document.getElementById("result_object_accurecy").innerHTML=result[0].comfidence.toffixed(3)
    }
}