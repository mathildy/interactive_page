// Fonctionnalité 1 :

let foot = document.querySelector('footer');

foot.addEventListener('click', function() { 
    console.log("clique")
});


// Fonctionnalité 1 bis :

let count = 0;
count++

foot.addEventListener('click', function() { 
    console.log("clic n°" + count++)
});
 


// Fonctionnalité 2 :

let header = document.getElementById('navbarHeader'); 
let nav = document.getElementsByClassName('navbar-toggler');

nav[0].addEventListener('click', function() {
  header.classList.toggle("collapse")
}); 


// Fonctionnalité 3 :

let edit = document.getElementsByClassName('col-md-4')[0].getElementsByClassName('btn-outline-secondary'); text = document.querySelectorAll('p.card-text');

edit[0].addEventListener('click', function() {
    text[0].style.color = "red"
}); 


// Fonctionnalité 4 :

let edit2 = document.getElementsByClassName('col-md-4')[1].getElementsByClassName('btn-outline-secondary'); text = document.querySelectorAll('p.card-text');

edit2[0].addEventListener('click', function() {
    if (text[1].style.color === 'green') {
        text[1].style.color = "";
      }
      else {
        text[1].style.color = 'green';
      }
        
}); 


// Fonctionnalité 5 :

let link = document.getElementsByTagName('link')[0];
let navbar = document.getElementsByTagName('header');

navbar[0].addEventListener('dblclick', function() {
  if (link.disabled === false) {
    link.disabled = true;
  }
  else {
    link.disabled = false;
  }
}); 


// Fonctionnalité 6 :

let btnView = document.querySelectorAll('.btn-success'); 
let cardImg = document.querySelectorAll('.card-img-top');

for (let i = 0; i < btnView.length; i++) {
  btnView[i].addEventListener('mouseover', function() {
   
      if (text[i].style.display !== 'none'){
        text[i].style.display = 'none';
        cardImg[i].style.height = '20%';
        cardImg[i].style.width = '20%';
      }
    else {
        text[i].style.display = '';
        cardImg[i].style.height = '100%';
        cardImg[i].style.width = '100%';
    }
  }
)};


// Fonctionnalité 7 :

let greyBtn = document.querySelectorAll("main a")[1];

greyBtn.addEventListener("click", function() {
    let cards = document.querySelector('main .row');
    cards.insertBefore(cards.lastElementChild, cards.firstElementChild);
});

