let pageHeight, ticking, screenHeight, currentEl, pageSectionArr;

function checkElement(scroll_pos) {

  let x = Math.floor(scroll_pos / (screenHeight / 2));

  if(currentEl !== x){
    applyElement(x);
  }
}

function checkScroll(){

  let last_known_scroll_position = window.scrollY;

  if(!ticking) {

    window.requestAnimationFrame(function() {
      checkElement(last_known_scroll_position);
      ticking = false;
    });

    ticking = true;

  }
}

window.addEventListener('scroll', function() {

  checkScroll();
  
});



document.getElementById('icon').addEventListener('click', function() {
  let x = document.getElementById('myTopnav');
  if(x.className === 'topnav') {
    x.className += ' responsive';
  } else {
    x.className = 'topnav';
  }
});



document.addEventListener('DOMContentLoaded', function() {

  screenHeight = screen.height;

  pageSectionArr = document.getElementsByClassName('page-section');

  pageHeight = screenHeight * pageSectionArr.length;

  document.getElementById('body').style.height = pageHeight / 2 + 'px';

  checkScroll();

});


function applyElement(x){

  currentEl = x;

  for(let i = pageSectionArr.length - 1; i >= 0; i--) {
    pageSectionArr[i].classList.add('hidden');
  }

  document.getElementById('body').style.background = pageSectionArr[x].dataset.bgcolor || 'white';

  document.getElementById('body').style.color = pageSectionArr[x].dataset.textcolor || 'black';

  pageSectionArr[x].classList.remove('hidden');
  pageSectionArr[x].classList.add('shown');

}

document.getElementById('down-arrow').addEventListener('click', function(){
  window.scroll({
    top: (screenHeight / 2) + 100, 
    left: 0, 
    behavior: 'smooth' 
  });
});

document.getElementById('home').addEventListener('click', function(){
  window.scroll({
    top: screenHeight - 1100, 
    left: 0, 
    behavior: 'smooth' 
  });
});

document.getElementById('projects').addEventListener('click', function(){
  window.scroll({
    top: (screenHeight / 2) + 100, 
    left: 0, 
    behavior: 'smooth' 
  });
});

document.getElementById('tech').addEventListener('click', function(){
  window.scroll({
    top: (screenHeight / 2) + 1700, 
    left: 0, 
    behavior: 'smooth' 
  });
});

document.getElementById('contact').addEventListener('click', function(){
  window.scroll({
    top: (screenHeight / 2) + 2200, 
    left: 0, 
    behavior: 'smooth' 
  });
});







