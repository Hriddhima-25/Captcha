document.getElementById('contact-form').addEventListener('submit', function(event) {
  var enteredCaptcha = document.getElementsByName('captcha')[0].value;
  var captchaContainer = document.getElementById('captcha-container');
  var generatedCaptcha = captchaContainer.textContent;

  if (enteredCaptcha !== generatedCaptcha) {
    alert('Invalid CAPTCHA code. Please try again.');
    event.preventDefault();
    generateCaptcha();
  }
});
