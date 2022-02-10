RN=Math.floor(Math.random);
console.log(RN);
timer=0;
function preload()
{
    classifier=ml5.imageClassifier("DoodleNet");
}
function setup()
{
   canvas=createCanvas(350,350);
   canvas.center();
   background("white");
   canvas.mouseReleased(classifyCanvas);
   synth=window.speechSynthesis;
}
function draw()
{
    strokeWeight(13);
    stroke("red");
    if(mouseIsPressed)
    {
       line(pmouseX,pmouseY,mouseX,mouseY);
       timer++;
       document.getElementById("Timer").innerHTML="Timer:  "+timer;
    }
}
function Clear()
{
    background("white");
}
function classifyCanvas()
{
    classifier.classify(canvas,gotResult);
}
function gotResult(error,results)
{
   if(error)
   {
      console.log(error);
   }
   else{
      console.log(results);
   }
   }
