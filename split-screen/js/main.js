// document.addEventListener('DOMContentLoaded', function(){
//   let splitSection = document.getElementById('split-section-1');
//   let topLayer = splitSection.querySelector('.split-section__layer--top');
//   let splitter = splitSection.querySelector('.split-section__split');
//   let skew = 0;
//   let delta = 0;
// })

let splitSection = document.getElementById('split-section-1');
let topLayer = splitSection.querySelector('.split-section__layer--top');
let splitter = splitSection.querySelector('.split-section__split');
let skew = 0;
let delta = 0;

if (splitSection.className.indexOf('split-section--skewed') != -1) {
  skew = 1000;
}

splitSection.addEventListener('mousemove', function(e){
  delta = (e.clientX - window.innerWidth / 2) * 0.5;

  splitter.style.left = e.clientX + delta + 'px';
  topLayer.style.width = e.clientX + skew + delta + 'px';
})
