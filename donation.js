var bar = new ProgressBar.Path('#heart-path', {
  easing: 'easeInOut',
  duration: 1400
});

bar.set(0);
bar.animate(1.0);  // Number from 0.0 to 1.0
