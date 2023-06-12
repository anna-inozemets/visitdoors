function setupSlider(container, slides, prevButton, nextButton) {
  let slideIndex = 0;
  container.style.width = `${100 * slides.length}%`;
  let slideWidth = slides[0].offsetWidth;

  function updateButtons() {
    prevButton.disabled = slideIndex === 0;
    nextButton.disabled = slideIndex === slides.length - 1;
    prevButton.classList.toggle('disabled', slideIndex === 0);
    nextButton.classList.toggle('disabled', slideIndex === slides.length - 1);
  }

  function slideTo(index) {
    slideIndex = index;
    container.style.transform = `translateX(-${slideWidth * slideIndex}px)`;
    updateButtons();
  }

  function slidePrev() {
    if (slideIndex > 0) {
      slideTo(slideIndex - 1);
    }
  }

  function slideNext() {
    if (slideIndex < slides.length - 1) {
      slideTo(slideIndex + 1);
    }
  }

  updateButtons();
  nextButton.addEventListener('click', slideNext);
  prevButton.addEventListener('click', slidePrev);
  window.addEventListener('resize', () => {
    slideWidth = slides[0].clientWidth;
    container.style.width = `${100 * slides.length}%`;
    slideTo(slideIndex);
  });
}

const mainSlider = {
  container: document.querySelector('.visit_doors-main-info-main-photo-slider-container'),
  slides: document.querySelectorAll('.visit_doors-main-info-main-photo-slider-slide'),
  prevButton: document.querySelector('.visit_doors-main-info-main-photo-slider-button-prev'),
  nextButton: document.querySelector('.visit_doors-main-info-main-photo-slider-button-next')
};

setupSlider(mainSlider.container, mainSlider.slides, mainSlider.prevButton, mainSlider.nextButton);

const modelsSlider = {
  container: document.querySelector('.visit_doors-main-info-models-slider-container'),
  slides: document.querySelectorAll('.visit_doors-main-info-models-slider-slide'),
  prevButton: document.querySelector('.visit_doors-main-info-models-slider-button-prev'),
  nextButton: document.querySelector('.visit_doors-main-info-models-slider-button-next')
};

setupSlider(modelsSlider.container, modelsSlider.slides, modelsSlider.prevButton, modelsSlider.nextButton);

const viewedSlider = {
  container: document.querySelector('.visit_doors-history-slider-container'),
  slides: document.querySelectorAll('.visit_doors-history-slider-slide'),
  prevButton: document.querySelector('.visit_doors-history-slider-button-prev'),
  nextButton: document.querySelector('.visit_doors-history-slider-button-next')
};

setupSlider(viewedSlider.container, viewedSlider.slides, viewedSlider.prevButton, viewedSlider.nextButton);

function openTab(evt, tabName) {
  const tabcontent = document.querySelectorAll(".visit_doors-tab-content");
  for (let i = 0; i < tabcontent.length; i++) {
    tabcontent[i].style.display = "none";
  }
  const tablinks = document.querySelectorAll(".visit_doors-tab-button-tab");
  for (let i = 0; i < tablinks.length; i++) {
    tablinks[i].className = tablinks[i].className.replace(' active', '');
  }
  document.getElementById(tabName).style.display = "block";
  evt.currentTarget.className += " active";
}

const types = ['coating', 'knob', 'key'];

types.forEach(type => {
  const buttons = document.querySelectorAll(`.visit_doors-main-info-general-coatings-radio-${type}`);
  const items = document.querySelectorAll(`.${type}-item`);

  buttons.forEach(button => {
    button.addEventListener('change', () => {
      items.forEach(item => {
        item.style.border = item.contains(button) 
          ? '2px solid #00A03B'
          : '1px solid #E0E0E0';
      });
    });
  });
});

Fancybox.bind("[data-fancybox]", {
  // Your custom options
});
