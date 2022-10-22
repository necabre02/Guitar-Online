
            // STRINGS

var E = document.querySelector(".E");
var Aa = document.querySelector(".A");
var Dd = document.querySelector(".D");
var Gg = document.querySelector(".G");
var Bb = document.querySelector(".B");
var highEe = document.querySelector(".e");

var sest = document.querySelector(".sest");
var pet = document.querySelector(".pet");
var tri = document.querySelector(".tri");
var nula = document.querySelector(".nula");



             // SOUND

// var highE = document.querySelector("e");
// var highE = document.querySelector("e");
// var highE = document.querySelector("e");
// var highE = document.querySelector("e");
// var bZvuk = document.querySelector("bString");
// var highEZvuk = document.querySelector("highEString");

// var   = document.querySelector("e");
// var = document.querySelector("e");
// var  = document.querySelector("e");
// var  = document.querySelector("e");

            //  FUNCTIONS
 
//  highE.addEventListener("click", function(){
//  highEZvuk.play();

//  });

// function play(){
//     highEZvuk.play();
// };

// var x = document.querySelector(.highEString); 

// function playAudio() { 
//   x.play(); 
// } 

var lowE = document.querySelector(".lowEString");
 function pustiEE(){
lowE.play();   
E.classList.add("animation");
 };
 var A = document.querySelector(".aString");
 function pustiA(){
A.play();   
 };
 var D = document.querySelector(".dString");
 function pustiD(){
D.play();   
 };

 var G = document.querySelector(".gString");
 function pustiG(){
G.play();   
 };

 var B = document.querySelector(".bString");
 function pustiB(){
  B.play();  

 };

var highE = document.querySelector(".highEString");
 function pustie(){
highE.play();   
 };

 var zero = document.querySelector(".zero");
 var three = document.querySelector(".three");
 var five = document.querySelector(".five");
 var six = document.querySelector(".six");

          // KEYBOARD INPUTS

 window.addEventListener('keydown', (event) =>{
   if(event.key === 'q' || event.key === 'Q') {
      lowE.play();   
      event.preventDefault;
      E.classList.add("animation2")
      setTimeout( function (){
        E.classList.remove("animation2")
    }, 1050)
    }; 
    
 });

 window.addEventListener('keydown', (event) =>{
  if(event.key === 'w' || event.key === 'W') {
     A.play();  
     Aa.classList.add("animation2")
     setTimeout( function (){
       Aa.classList.remove("animation2")
   }, 1050)
 
    
   }; 
});

window.addEventListener('keydown', (event) =>{
  if(event.key === 'e' || event.key === 'E') {
     D.play();   
     Dd.classList.add("animation2")
     setTimeout( function (){
       Dd.classList.remove("animation2")
   }, 1050)
  
   
   }; 
});





window.addEventListener('keydown', (event) =>{
  if(event.key === 'r' || event.key === 'R') {
     G.play();   
     Gg.classList.add("animation2")
     setTimeout( function (){
       Gg.classList.remove("animation2")
   }, 1050)
 
   
   }; 
});

window.addEventListener('keydown', (event) =>{
  if(event.key === 't' || event.key === 'T') {
     B.play();  
     Bb.classList.add("animation2")
     setTimeout( function (){
       Bb.classList.remove("animation2")
   }, 1050)
  
    
   }; 
});

window.addEventListener('keydown', (event) =>{
  if(event.key === 'y' || event.key === 'Y') {
     highE.play();   
     highEe.classList.add("animation2")
     setTimeout( function (){
       highEe.classList.remove("animation2")
   }, 1050)
  
   
   }; 
});

window.addEventListener('keydown', (event) =>{
  if(event.key === '0') {
     zero.play();   
     nula.classList.add("animation1")
     setTimeout( function (){
       nula.classList.remove("animation1")
   }, 1050)
   }; 
});

window.addEventListener('keydown', (event) =>{
  if(event.key === '3') {
     three.play();   
     tri.classList.add("animation1")
     setTimeout( function (){
       tri.classList.remove("animation1")
   }, 1050)

   }; 
});
window.addEventListener('keydown', (event) =>{
  if(event.key === '5') {
     five.play();   
     pet.classList.add("animation1")
     setTimeout( function (){
       pet.classList.remove("animation1")
   }, 1050)
   }; 
});
window.addEventListener('keydown', (event) =>{
  if(event.key === '6') {
     six.play();   
     sest.classList.add("animation1")
     setTimeout( function (){
       sest.classList.remove("animation1")
   }, 1050)
   }; 
});