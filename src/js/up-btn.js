const scrollBtn = document.querySelector('.isShowBtn');

window.onscroll = () => {
  if (window.scrollY > 1700) {
    scrollBtn.classList.remove('isHiddenBtn');
  } else if (window.scrollY < 1700) {
    scrollBtn.classList.add('isHiddenBtn');
  }
};

scrollBtn.onclick = () => {
  window.scrollTo(0, 0);
};
