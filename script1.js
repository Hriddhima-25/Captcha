function generateCaptcha() {
    var chars = '0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ';
    var captcha = '';
  
    for (var i = 0; i < 6; i++) {
      var randomIndex = Math.floor(Math.random() * chars.length);
      captcha += chars[randomIndex];
    }
  
    document.getElementById('captcha-container').textContent = captcha;
  }
  
  generateCaptcha();
  