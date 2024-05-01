document.addEventListener("DOMContentLoaded", function() {
    const rectangles = document.querySelectorAll('.header button');
    
    rectangles.forEach(rectangle => {
      rectangle.addEventListener('click', function() {
        rectangles.forEach(rect => rect.classList.remove('active'));
        this.classList.add('active');
      });
    });
  });