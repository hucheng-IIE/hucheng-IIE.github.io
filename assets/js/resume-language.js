(function () {
  function setLanguage(language) {
    var isChinese = language === "zh";
    document.body.classList.toggle("resume-lang-zh", isChinese);
    document.documentElement.setAttribute("lang", isChinese ? "zh-CN" : "en");

    var button = document.querySelector(".resume-language-toggle");
    if (button) {
      button.textContent = isChinese ? "English" : "中文";
      button.setAttribute("aria-pressed", String(isChinese));
    }

    try {
      window.localStorage.setItem("resume-language", isChinese ? "zh" : "en");
    } catch (error) {
      // Ignore storage errors in private browsing or restricted environments.
    }
  }

  document.addEventListener("DOMContentLoaded", function () {
    var button = document.querySelector(".resume-language-toggle");
    if (!button) {
      return;
    }

    var savedLanguage = "en";
    try {
      savedLanguage = window.localStorage.getItem("resume-language") || "en";
    } catch (error) {
      savedLanguage = "en";
    }

    setLanguage(savedLanguage);

    button.addEventListener("click", function () {
      setLanguage(document.body.classList.contains("resume-lang-zh") ? "en" : "zh");
    });
  });
}());
