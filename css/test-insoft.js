$(document).ready(function () {
  if ($("#scroller").length) {
    $("img.displayed").hover(
      function () {
        $(this).attr("src", $(this).parent().find(".color").html());
      },
      function () {
        $(this).attr("src", $(this).parent().find(".grayscale").html());
      }
    );
    $("#scroller").simplyScroll();
    $(".home h3 a").each(function () {
      if ($(this).height() == 22) {
        text = $(this).html();
        $(this).html(text.replace(/\s([^\s]+)$/, "<br>$1"));
      }
    });
  }
  if ($("#contactForm").length) {
    $("#contactForm").validate({
      rules: {
        Title: "required",
        FirstName: { required: true, minlength: 2 },
        LastName: { required: true, minlength: 2 },
        Email: { required: true, email: true },
        AddressLine1: {
          required: function (e) {
            return $("#AddressLine2").val() != "";
          },
        },
        ZipCode: {
          required: function (e) {
            return (
              $("#AddressLine1").val() != "" || $("#AddressLine2").val() != ""
            );
          },
        },
        City: {
          required: function (e) {
            return (
              $("#AddressLine1").val() != "" ||
              $("#AddressLine2").val() != "" ||
              $("#ZipCode").val() != ""
            );
          },
        },
        Country: "required",
      },
    });
  }
});
