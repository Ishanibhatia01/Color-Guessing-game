/*var colors=[
    "rgb(255, 0, 0)",
    "rgb(0, 255, 255)",
    "rgb(0, 0, 255)",
    "rgb(0, 255, 0)",
    "rgb(255, 255, 0)",
    "rgb(255, 0, 255)",
 ]*/
 var numSquare=6;
 var colors=randomGenerators(numSquare);
 var squares=document.querySelectorAll(".square");
var pickedColor=changeColor();
var resultDisplay=document.querySelector("#resultDisplay");
var colorDisplay=document.querySelector("#colorDisplay");
colorDisplay.textContent=pickedColor;
var h1=document.querySelector("h1");
var buttonReset=document.querySelector("#reset");
var easybtn=document.querySelector("#easybtn");
        var hardbtn=document.querySelector("#hardbtn");
        easybtn.addEventListener("click",function()
        {
          easybtn.classList.add("selected");
          hardbtn.classList.remove("selected");
          numSquare=3;
          colors=colors=randomGenerators(numSquare);
          pickedColor=changeColor();
          colorDisplay.textContent=pickedColor;
          for(var i=0;i<squares.length;i++)
          {
            if(colors[i])
            {
              squares[i].style.backgroundColor=colors[i];
            }
          else{
            squares[i].style.display="none";
          }
         console.log(colorClicked,pickedColor);
        }
        resultDisplay.textContent="";
        h1.style.backgroundColor="steelblue";
        });
        hardbtn.addEventListener("click",function()
        {
          easybtn.classList.remove("selected");
          hardbtn.classList.add("selected");
          numSquare=6;
          colors=colors=randomGenerators(numSquare);
          pickedColor=changeColor();
          colorDisplay.textContent=pickedColor;
          for(var i=0;i<squares.length;i++){
            {
              squares[i].style.backgroundColor=colors[i];
            }
          
            squares[i].style.display="block";
         console.log(colorClicked,pickedColor);
        }
        resultDisplay.textContent="";
        h1.style.backgroundColor="steelblue";
        });
      

buttonReset.addEventListener("click",function()
{
  //Generate random colors
  colors=randomGenerators(numSquare);   
  //Then setting the background of colors to be changed according to that
  pickedColor =changeColor();
  colorDisplay.textContent=pickedColor;
  console.log(pickedColor); 
  for(var i=0;i<squares.length;i++)
{  squares[i].style.backgroundColor=colors[i];
}
this.textContent="New Colors";
h1.style.backgroundColor="steelblue";

resultDisplay.textContent=""}
);


/*for(var i=0;i<squares.length;i++)
{   squares[i].style.backgroundColor=colors[i];
}*/
//console.log(pickedColor);
colorDisplay.textContent=pickedColor;
for(var i=0;i<squares.length;i++)
{   squares[i].style.backgroundColor=colors[i];
      var  colorClicked;
      squares[i].addEventListener("click",function() {
        colorClicked=this.style.backgroundColor;
        console.log(pickedColor,colorClicked);
         if(colorClicked===pickedColor)
            {
              resultDisplay.textContent="CORRECT!"
              //backgroundSet();
             changeColors(colorClicked);
            h1.style.backgroundColor=colorClicked;
            buttonReset.textContent="Play again ?";
            }               
            else{
             this.style.backgroundColor="#232323";
             resultDisplay.textContent="TRY AGAIN";
            }
                 
          });}
          function changeColors()
          {
            for(var i=0;i<squares.length;i++)
            {
              squares[i].style.backgroundColor=colorClicked;
            
            }
          }
          //Random  pick color generator
          function changeColor()
          {
          var s=Math.floor(Math.random()*colors.length);
          return colors[s];
          }
          //Random color generator
          function randomGenerators(num)
          {//Initialize the array first
            var arr=[];
          // Generate random colors by string
          for(var i=0;i<num;i++)
          { 
            arr.push(randomGenerating());

          }    
          //Return that array to the colors
           return arr;
        }
        function randomGenerating()
      
        {
          var r=Math.floor(Math.random()*256);
          var g=Math.floor(Math.random()*256);
          var b=Math.floor(Math.random()*256);
          return "rgb(" + r +", " + g +", " + b +")"; 
        }
        