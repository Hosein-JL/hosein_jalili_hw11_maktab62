$(document).ready(function () {
  $("button").click(function (e) {
    e.preventDefault();
    if (
      $("#password").val().trim() === "" &&
      $("#username").val().trim() === ""
    ) {
      $("#name").text("* الزامی");
      $("#pass").text("* الزامی");
      $("#username").attr("placeholder", "نام کاربری ❌");
      $("#password").attr("placeholder", "رمز عبور ❌");
      console.log($("#username").val());
    }
    $.ajax({
      type: "post",
      url: "/login",
      data: {
        firstName: $("#username").val(),
        uid: $("#password").val(),
      },
      success: function (res, status, xhr) {
        alert("ورود موفقیت آمیز");
      },
      error: function () {
        alert(`کاربری با این مشخصات وجود ندارد.`);
      },
    });
  });
});
