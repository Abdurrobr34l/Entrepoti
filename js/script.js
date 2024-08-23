// javascript
// 1- HAMBURGER TOGGLER AND MENU
const menu_btn = document.querySelector('.hamburger-toggler');
const hamburger_menu = document.querySelector('.hamburger-menu');
// Below code are to make the 'active' class to get 'ON' for both toggler and menu
menu_btn.addEventListener('click', function () {
  menu_btn.classList.toggle('active');
  hamburger_menu.classList.toggle('active');
});
// Below code are to make the 'active' class to get 'OFF' for both toggler and menu when any link of the menu is clicked
document.querySelectorAll(".ham-link").forEach(n => n.addEventListener('click', () => {
  menu_btn.classList.remove('active');
  hamburger_menu.classList.remove('active');
}));

// 2- COUNTER
const counters = document.querySelectorAll('.counter,#counter');
counters.forEach(counter => {
  counter.innerText = '0';
  const updateCounter = () => {
    const target = +counter.getAttribute('data-target');
    const current = +counter.innerText;
    const increment = target / 200;
    if (current < target) {
      counter.innerText = `${Math.ceil(current + increment)}`;
      // can change time below
      setTimeout(updateCounter, 90);
    } else {
      counter.innerText = target;
    }
  };
  updateCounter();
});

// 3- NUMBER INPUT (it is done for firefox browser, in firebox browser we can type text in number input, after using below code the input doesnt allow text except number)
const numberInput = document.getElementById('myNumberInput');

numberInput.addEventListener('input', (event) => {
  // Allow only numbers, backspace, and delete
  event.target.value = event.target.value.replace(/[^0-9]/g, '');
});

// 4- GO-TO TOP BUTTON
// Get the button
let mybutton = document.getElementById("myBtn");

// When the user scrolls down 20px from the top of the document, show the button
window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    mybutton.style.display = "block";
  } else {
    mybutton.style.display = "none";
  }
}

// When the user clicks on the button, scroll to the top of the document
function topFunction() {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
}


// jquery
$(document).ready(function () {

});