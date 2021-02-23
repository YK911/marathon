$(document).ready(function () {
  /* Для локализации сайта (мультиязычности) подключена библиотека jquery-localize */
  /* Но потом мы ее отключили, потому что нужно найти более подходящее решение */
  var inputLangRU = $('[data-lang=ru]'),
      inputLangUK = $('[data-lang=uk]'),
      checkbox    = $('.toggle :checked'),
      label       = $('.toggle-item'),
      toggler       = $('.toggle-wrapper')
      // linkRU      = window.location.href.includes('/marathon/index.html'),
      // linkUK      = window.location.href.includes('/marathon/lang/uk/index.html')

  var browserLang = navigator.language; //язик браузера
  var fileLang = $('html').attr('lang') //язык документа

  if (browserLang === fileLang) {
    $("[data-localize]").localize("./lang/russian", { language: "ru" });
    label.addClass('dot-move');
    inputLangRU.removeClass('passive-lang');
    inputLangRU.addClass('active-lang');
    inputLangUK.removeClass('active-lang');
    inputLangUK.addClass('passive-lang');
    checkbox.prop('checked', false);
  } else {
    $("[data-localize]").localize("./lang/ukrainian", { language: "uk" });
    $('html').attr('lang', 'ua');
    label.removeClass('dot-move');
    inputLangRU.removeClass('active-lang');
    inputLangRU.addClass('passive-lang');
    inputLangUK.removeClass('passive-lang ');
    inputLangUK.addClass('active-lang');
    checkbox.prop('checked', true);
  }
  var currentLang = $('html').attr('lang');
  updateURL(fileLang);

  toggler.click(function (event) {
    event.preventDefault();

    if (checkbox.is(':checked') === true) {
      label.addClass('dot-move');
      inputLangRU.removeClass('passive-lang');
      inputLangRU.addClass('active-lang');
      inputLangUK.removeClass('active-lang');
      inputLangUK.addClass('passive-lang');

      $("[data-localize]").localize("./lang/russian", { language: "ru" });
      $('html').attr('lang', 'ru');
      checkbox.prop('checked', false);
    } else {
      label.removeClass('dot-move');
      inputLangRU.removeClass('active-lang');
      inputLangRU.addClass('passive-lang');
      inputLangUK.removeClass('passive-lang ');
      inputLangUK.addClass('active-lang');

      $("[data-localize]").localize("./lang/ukrainian", { language: "uk" });
      $('html').attr('lang', 'ua');
      checkbox.prop('checked', true);
    }
    updateURL()
  })

  function updateURL() {
    var currentLang = $('html').attr('lang');
    if (history.pushState) {
        var baseUrl = window.location.protocol + "//" + window.location.host + window.location.pathname;
        var newUrl = baseUrl + `?lang=${currentLang}`;
        history.pushState(null, null, newUrl);
    }
    else {
        console.warn('History API не поддерживается');
    }
}
});
