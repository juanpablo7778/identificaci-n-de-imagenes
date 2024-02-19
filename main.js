function setup() {
  canvas = createCanvas(300, 300);
  canvas.center();
  video = createCapture(VIDEO);
  video.hide();
  classifier = ml5.imageClassifier('MobileNet',modelocargado);

}

function modelocargado() {
  console.log('modelo cargado');
}

function draw() {
  image(video,0,0,300,300);
  classifier.classify(video,resultado_obtenido)
}

function resultado_obtenido(error,results) {
if(error) {
  console.error(error);
}
}

