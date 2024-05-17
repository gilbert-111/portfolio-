// the loader
$('body').append('<div style="" id="loadingDiv"><div class="loader">Loading...</div></div>');
$(window).on('load', function(){
  setTimeout(removeLoader, 2000); //wait for page load PLUS two seconds.
});
function removeLoader(){
    $( "#loadingDiv" ).fadeOut(500, function() {
      // fadeOut complete. Remove the loading div
      $( "#loadingDiv" ).remove(); //makes page more lightweight 
  });  
}





// first typing Animation
/*
  Make a virtual typing keyboard animation using Javascript only! :)
  Use the following text and write it to `.text` element periodically.
  Make the animation look like (open in the browser): https://streamable.com/wv780s
*/
var text = "                           Hello!👋 I Am Gilbert Destiny";

var splitted = text.split('');
var textDiv = document.querySelector('.text');
var newText = [];
splitted.forEach((letter, index)=> {
console.log(index);
  setTimeout(()=> {
  newText.push(letter);  
  textDiv.textContent = newText.join('');
  },index * 100)
});




// 2nd typing text animation

const typedTextSpan = document.querySelector(".typed-text");
const cursorSpan = document.querySelector(".cursor");

const textArray = ["hard", "fun", "a journey", "LIFE"];
const typingDelay = 200;
const erasingDelay = 100;
const newTextDelay = 2000; // Delay between current and next text
let textArrayIndex = 0;
let charIndex = 0;

function type() {
  if (charIndex < textArray[textArrayIndex].length) {
    if(!cursorSpan.classList.contains("typing")) cursorSpan.classList.add("typing");
    typedTextSpan.textContent += textArray[textArrayIndex].charAt(charIndex);
    charIndex++;
    setTimeout(type, typingDelay);
  }
  else {
    cursorSpan.classList.remove("typing");
  setTimeout(erase, newTextDelay);
  }
}

function erase() {
if (charIndex > 0) {
    if(!cursorSpan.classList.contains("typing")) cursorSpan.classList.add("typing");
    typedTextSpan.textContent = textArray[textArrayIndex].substring(0, charIndex-1);
    charIndex--;
    setTimeout(erase, erasingDelay);
  }
  else {
    cursorSpan.classList.remove("typing");
    textArrayIndex++;
    if(textArrayIndex>=textArray.length) textArrayIndex=0;
    setTimeout(type, typingDelay + 1100);
  }
}

document.addEventListener("DOMContentLoaded", function() { // On DOM Load initiate the effect
  if(textArray.length) setTimeout(type, newTextDelay + 250);
});







// image slider
const slides = document.querySelectorAll(".slide"); 
let currentSlide = 0; 

function showSlide(index)
 { slides.forEach((slide, i) => { 
if (i === index) { 
slide.style.opacity = 100; 
} else { 
slide.style.opacity = 0;
 }
 }); 
} 


function nextSlide() {
 currentSlide = (currentSlide + 1) % slides.length; 
showSlide(currentSlide); 
} 

function prevSlide() {
 currentSlide = (currentSlide - 1 + slides.length) % slides.length; 
showSlide(currentSlide);
}

showSlide(currentSlide);






// my about, project, contact tab
// tabs

function openContent(contentName) {
  var i;
  var x = document.getElementsByClassName("content88");
  // alert(contentName)
  for (i = 0; i < x.length; i++) {
    //alert(x[i].innerHTML);
     x[i].style.display = "none";
  }
  document.getElementById(contentName).style.display = "block";
}