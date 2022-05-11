$('document').ready(() => {
  $('#login').click((e) => {
    var username = $('#username').val();
    var pwd = $('#pwd').val();

    fetch('../db.json')
      .then((response) => response.json())
      .then((data) => {
        for (var i in data.users) {
          // console.log(data.users.length);
          console.log(i);

          if (username === data.users[i].email && pwd === data.users[i].pwd) {
            alert('Login Success');
            window.location.href="http://127.0.0.1:5500/html/display.html";
            break;
          }
          if (i == data.users.length - 1) {
            console.log(data.users.length);
            alert('Username or password is incorrect');
          }
          if (username === 'admin@gmail.com' && pwd === 'useradmin@123') {
            alert('Admin Login Success');
            break;
          }
        }
      });

    document.getElementById('form-login').reset();
  });
});
