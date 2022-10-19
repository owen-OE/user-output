const myForm = document.querySelector('#my-form');
const nameInput = document.querySelector('#name');
const emailInput = document.querySelector('#email');
const msg = document.querySelector('.msg');
const userInput = document.querySelector('#users');

myForm.addEventListener('submit', onSubmit);

function onSubmit(e){
     e.preventDefault();
     if(nameInput.value === '' || emailInput.value === ''){
     	msg.classList.add('error');
     	msg.innerHTML = 'Please enter all fields';

     	setTimeout(() => msg.remove(), 2000);
     }else{
     	msg.classList.add('success');
     	msg.innerHTML = 'User added sucessfully!'

     	setTimeout(() => msg.remove(), 3000);

     	
     	const li = document.createElement('li');
     	li.appendChild(document.createTextNode(`${nameInput.value} : ${emailInput.value}`));

     	userInput.appendChild(li);

     	//clear fields

     	nameInput.value = '';
     	emailInput.value = '';
     }
}