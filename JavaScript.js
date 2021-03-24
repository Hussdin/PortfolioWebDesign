//for scoll
window.smoothScroll = function(target) {
  var scrollContainer = target;
  do { 
      scrollContainer = scrollContainer.parentNode;
      if (!scrollContainer) return;
      scrollContainer.scrollTop += 1;
  } while (scrollContainer.scrollTop == 0);

  var targetY = 0;
  do { 
      if (target == scrollContainer) break;
      targetY += target.offsetTop;
  } while (target = target.offsetParent);

  scroll = function(c, a, b, i) {
      i++; if (i > 30) return;
      c.scrollTop = a + (b - a) / 30 * i;
      setTimeout(function(){ scroll(c, a, b, i); }, 20);
  }
  
  scroll(scrollContainer, scrollContainer.scrollTop, targetY, 0);
}

// let btn = document.getElementById('gotoport')
// btn.onclick = gotoport;
function gotoport(){
   window.location.href="Project.html" 
}
const imageslide = document.querySelector('.imageslide')
const imageslides = document.querySelectorAll('.imageslide')

const prvbtn = document.querySelector('#prevbtn');
const nxtbtn = document.querySelector('#nxtbtn');

const prvbtnFP = document.querySelector('#prevbtnFP');
const nxtbtnFP = document.querySelector('#nxtbtnFP');

let counter =1;
const size = imageslides[0].clientWidth;

imageslide.style.transform = 'translateX(' + (-size*counter) + 'px)';

nxtbtn.addEventListener('click',()=>{
  if(counter >= 3) return;
  imageslide.style.transform = 'transform 0.4s ease-in-out';
  counter++ ;
  console.log(counter);
  imageslide.style.transform = 'translateX(' + (-size*counter) + 'px)';
})

prvbtn.addEventListener('click',()=>{
  if(counter <= 1) return;
  imageslide.style.transform = 'transform 0.4s ease-in-out';
  counter-- ;
  console.log(counter);
  imageslide.style.transform = 'translateX(' + (-size*counter) + 'px)';
})

// for previewslide of Project file
nxtbtnFP.addEventListener('click',()=>{
  if(counter >= 6) return;
  imageslide.style.transform = 'transform 0.4s ease-in-out';
  counter++ ;
  console.log(counter);
  imageslide.style.transform = 'translateX(' + (-size*counter) + 'px)';
})

prvbtnFP.addEventListener('click',()=>{
  if(counter <= 1) return;
  imageslide.style.transform = 'transform 0.4s ease-in-out';
  counter-- ;
  console.log(counter);
  imageslide.style.transform = 'translateX(' + (-size*counter) + 'px)';
})
