"use strict";

function _toConsumableArray(arr) { return (_arrayWithoutHoles(arr) || _iterableToArray(arr) || _nonIterableSpread());}

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance");}

function _iterableToArray(iter) { if (Symbol.iterator in Object(iter) || Object.prototype.toString.call(iter) === "[object Arguments]")return Array.from(iter);}

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) {for (var i = 0, arr2 = new Array(arr.length); i < arr.length; i++) {arr2[i] = arr[i];}return arr2;}}

$(document).ready(function () {
  var utm_source   = getUrlParameter("utm_source");
  var utm_medium   = getUrlParameter("utm_medium");
  var utm_term     = getUrlParameter("utm_term");
  var utm_campaign = getUrlParameter("utm_campaign");
  var utm_content  = getUrlParameter("utm_content");
  $("input[name=utm_source]").val(utm_source);
  $("input[name=utm_medium]").val(utm_medium);
  $("input[name=utm_term]").val(utm_term);
  $("input[name=utm_campaign]").val(utm_campaign);
  $("input[name=utm_content]").val(utm_content);


  // $('input[type="tel"]').mask("+38(999)999-99-99");

  function ValidMail(email) {
    var emailValue = email.value;
    var re = /^[\w-\.]+@[\w-]+\.[a-z]{2,4}$/i;
    var valid = re.test(emailValue);
    !valid ? email.style.border = '2px solid red' : email.style.border = '2px solid #ccc';
    return valid;
  }

  function ValidPhone(phone, form) {
    var phoneValue = phone.value;
    var re = /(?:\w)(?:(?:(?:(?:\+?3)?8\W{0,5})?0\W{0,5})?[45679]\s?\d[^\w,;(\+]{0,5})?\d\W{0,5}\d\W{0,5}\d\W{0,5}\d\W{0,5}\d\W{0,5}\d\W{0,5}\d(?!(\W?\d))/;
    var valid = re.test(phoneValue);
    !valid
      ? (phone.style.outline = "2px solid red")
      : (phone.style.outline = "2px solid #ccc");
    return valid;
  }

  $("form").on("submit", function (e) {
    console.log("click");
    e.preventDefault();
    var emailValue = $(this).find('input[type="email"]')[0];
    var emailValid = ValidMail(emailValue);
    //var telValue = $(this).find('input[type="tel"]')[0];
    //var telValid = ValidPhone(telValue);

    if (emailValid) {
      $(".submit").prop("disabled", true);
      var allInput = this.querySelectorAll("input");
      allInput.forEach(function (el) {
        return (el.style.outline = "1px solid #000");
      });
      var $form = $(this);
      $.ajax({
        type: "POST",
        url: "crm/registration.php",
        dataType: "json",
        data: $form.serialize(),
        success: function success(response) {
          if (response.status == "success") {
            window.location.href = "https://wep.wf/9wp0ie";
          }
        },
      });
    }
  }); // script to get utm

  function getUrlParameter(sParam) {
    var sPageURL = decodeURIComponent(window.location.search.substring(1)),
      sURLVariables = sPageURL.split("&"),
      sParameterName,
      i;

    for (i = 0; i < sURLVariables.length; i++) {
      sParameterName = sURLVariables[i].split("=");

      if (sParameterName[0] === sParam) {
        return sParameterName[1] === undefined ? true : sParameterName[1];
      }
    }
  }

  (function () {
    "use strict";

    var viewport = document.body.clientWidth;

    var firststepBtn = _toConsumableArray(document.querySelectorAll(".button_change"));

    if (viewport >= 768) {
      firststepBtn.forEach(function (el) {
        el.innerHTML = 'Зарегистрироваться на марафон'
      });
    }
  })();
}); // change texton button

