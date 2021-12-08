$(document).ready(function () {
  $("button").click(function (e) {
    e.preventDefault();
    if (
      $("#username-input").val() === $("#password-input").val() &&
      $("#password-input").val().trim() !== "" &&
      $("#username-input").val().trim() !== ""
    ) {
      alert("وارد حساب کاربری شدید");
      location.reload();
    } else {
      alert("رمز عبور اشتباه است");
    }
  });
});
