const reveals = document.querySelectorAll('.reveal');

window.addEventListener('scroll', () => {

  reveals.forEach(section => {

    const windowHeight = window.innerHeight;
    const sectionTop = section.getBoundingClientRect().top;

    if(sectionTop < windowHeight - 100){
      section.classList.add('active');
    }

  });

});


// NAVBAR EFFECT

window.addEventListener('scroll', () => {

  const navbar = document.querySelector('.navbar');

  if(window.scrollY > 50){

    navbar.style.background = 'rgba(7, 17, 13, 0.82)';

  } else {

    navbar.style.background = 'rgba(7, 17, 13, 0.55)';

  }

});