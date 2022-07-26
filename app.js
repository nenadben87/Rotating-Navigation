 const open  = document.getElementById('open');
 const close  = document.getElementById('close');
 const wrapper = document.querySelector('.wrapper');
 const nav = document.querySelector('nav');

 open.addEventListener('click',rotateContent);

 close.addEventListener('click',rotateBack);

 function rotateContent() {
  wrapper.classList.add('active');
  nav.style.backgroundColor = '#333';
  close.style.color = '#fff';
 }

 function rotateBack() {
  wrapper.classList.remove('active');
  close.style.color = '#dd5356'; 

   setTimeout(function(){
    nav.style.backgroundColor = 'white'
   },500)
 }
