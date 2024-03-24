// ElEMENTS
const smallScreenNav = document.getElementById('small-screen-nav')
const openMenuBtn = document.querySelector('.fa-bars')
const closeMenuBtn = document.querySelector('.fa-xmark')

// EVENT LISTENERS
openMenuBtn.addEventListener('click', () =>{
    if(smallScreenNav.style.display === 'none'){
        smallScreenNav.style.display = 'block'
    }
    else{
        smallScreenNav.style.display = 'none'
    }
})

closeMenuBtn.addEventListener('click', ()=> {
    smallScreenNav.style.display = 'none'
})

// Smooth Scrolling
document.addEventListener("DOMContentLoaded", function() {
    const navLinks = document.querySelectorAll('nav ul li a');
    const menuNavLinks = document.querySelectorAll('nav ul ul li a')
  
    navLinks.forEach(link => {
      link.addEventListener('click', function(e) {
        e.preventDefault();
        const targetId = this.getAttribute('href').substring(1);
        const targetSection = document.getElementById(targetId);
  
        if (targetSection) {
          targetSection.scrollIntoView({
            behavior: 'smooth'
          });
        }
      });
    });

    menuNavLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            const targetId = this.getAttribute('href').substring(1);
            const targetSection = document.getElementById(targetId);
      
            if (targetSection) {
              targetSection.scrollIntoView({
                behavior: 'smooth'
              });
            }
            smallScreenNav.style.display = 'none'
          });
    })
});

const contactBtn = document.querySelector('.contact-btn')
const targetSection = document.querySelector('#section4')

contactBtn.addEventListener('click', function() {
    targetSection.scrollIntoView({
      behavior: 'smooth'
    });
});
