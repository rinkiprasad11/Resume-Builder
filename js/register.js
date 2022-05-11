$('document').ready(() => {
  // var id = $('input[type=number]id').val();

  $('#submit').click((e) => {
    var name = $('input[type=text]#fname').val();
    var email = $('input[type=text]#email').val();
    var pwd = $('input[type=password]#pwd').val();
    e.preventDefault();
    console.log(name, email, pwd, '------------------');

    $.ajax({
      url: 'http://localhost:3000/users',
      method: 'POST',
      data: {
        // id: id,
        fname: name,
        email: email,
        pwd: pwd,
      },
      dataType: 'json',
      success: (x) => {
        console.log('Success', x);
        alert("Register Successfully!!!");
      },
    });
    document.getElementById('form').reset();
  });
});
