class SplitScreen {
  constructor (sectionId) {
     this.splitSection = document.getElementById(`${sectionId}`);
     this.topLayer = this.splitSection.querySelector('.split-section__layer--top');
     this.splitter = this.splitSection.querySelector('.split-section__split');
     this.skew = 0;
     this.delta = 0;

     this.splitSection.addEventListener('mousemove', this.adjustSplitterPosition.bind(this));
  }

  adjustSplitterPosition (e) {
    if (this.splitSection.className.indexOf('split-section--skewed') != -1) {
      this.skew = 1000;
    }

    this.delta = (e.clientX - window.innerWidth / 2) * 0.5;

    this.splitter.style.left = e.clientX + this.delta + 'px';
    this.topLayer.style.width = e.clientX + this.skew + this.delta + 'px';
  }
}

let s1 = new SplitScreen('split-section-1');
let s2 = new SplitScreen('split-section-2');
