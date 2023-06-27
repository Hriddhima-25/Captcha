function generateCaptcha(length) {
  var captchaText = '';
  var characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';

  for (var i = 0; i < length; i++) {
    var randomIndex = Math.floor(Math.random() * characters.length);
    captchaText += characters.charAt(randomIndex);
  }

  return captchaText;
}

// Function to refresh the CAPTCHA
function refreshCaptcha() {
  var captchaElement = document.getElementById('captcha');
  var captchaInput = document.getElementById('captchaInput');
  var captchaLength = 6; // Length of the CAPTCHA string
  var captchaText = generateCaptcha(captchaLength);

  captchaElement.textContent = captchaText;
  captchaInput.value = '';
}

// Attach event listener to the Refresh CAPTCHA button
var refreshButton = document.getElementById("refreshCaptcha");
refreshButton.addEventListener("click", refreshCaptcha);

// Refresh the CAPTCHA on page load
refreshCaptcha();

var submitButton = document.getElementById("subbutt");
submitButton.addEventListener("click", function(){
  swal("", "submitted");
});