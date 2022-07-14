document.getElementById('enter_button').onclick = function(){
   let login = document.getElementById('field_email').value;
   let password = document.getElementById('field_password').value;

   if(login == 'login' && password == 'pass')
        alert('Welcome');
   else 
        alert('Incorrect login or password');
}