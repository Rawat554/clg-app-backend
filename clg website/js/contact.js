const BaseURL = 'http://localhost:3000/'


$(document).ready(function () {
  alert("Hello");

  $("#register").click(function () {
    var registrationData = {
      firstName: $("#firstname").val(),
      lastName: $("#lastname").val(),
      email: $("#email").val(),
      password: $("#password").val(),
      gender: $('input[name="gender"]:checked').val(),
      college: $("#college").val(),
    };
    if (registrationData.college == "-1") {
      alert("Please select college");
      return;
    }
    if (registrationData.password != $("#confirmpassword").val()) {
      alert("password and confirm password does not match.");
      return;
    }

    console.log(registrationData);

    $.ajax({
      url: BaseURL+'createContact',
      type: "post",
      dataType: "json",
      data: registrationData,
      success: function (res) {
        console.log(res);
      },
      error: function(err) {
        console.log(err);
        
      }
    });
  });
  //req.body.firstName, req.body.lastName, req.body.email, req.body.password, req.body.gender
});
