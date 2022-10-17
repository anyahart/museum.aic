$(document).foundation();
const header =document.querySelector('header');
const headerMenu = header.querySelector('.menu');
const btnMenu = header.querySelector('header button');

// toggle menu on/off
btnMenu.addEventListener('click',function(){
  // show menu by removing 'show-for-medium' class
  headerMenu.classList.toggle('hide');
  // add toggle state indicator
  this.classList.toggle('btnToggle');
  // change button text for toggled state
  changeBtnText();
})

// change button text for toggled state
function changeBtnText(){
  if(btnMenu.classList.contains('btnToggle')){
    btnMenu.querySelector('img').setAttribute('src','img/x@2x.png');
  } else {
    btnMenu.querySelector('img').setAttribute('src','img/hamberger@2x.png');
  }
}