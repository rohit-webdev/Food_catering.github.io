let bar = document.getElementById('bar');
let menu = document.getElementById('menu');
let Name = document.getElementById('name');
let email = document.getElementById('email');
let number = document.getElementById('number');
let textarea = document.getElementById('textarea');
let submit = document.getElementById('submit');
let modal = document.getElementById('modal');
let list = document.getElementById('list');

bar.addEventListener('click',()=>{
    menu.classList.toggle('active');
})

submit.addEventListener('click',()=>{
    if(Name.value != "" && email.value != "" && number.value != "" && textarea.value != ""){
        modal.style.display = 'block';
        setTimeout(() => {
            modal.style.display = 'none';
        }, 2000);
    }
})

list.addEventListener('click',()=>{
  menu.classList.remove('active');
})
