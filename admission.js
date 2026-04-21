// Admission Page JS
document.addEventListener('DOMContentLoaded', function () {

  var admForm = document.getElementById('admissionFormEl');
  var admSubmitBtn = document.getElementById('admSubmitBtn');
  var admSuccess = document.getElementById('admSuccessMessage');

  if (admForm) {
    admForm.addEventListener('submit', function (e) {
      e.preventDefault();
      admSubmitBtn.classList.add('loading');

      // Build template params explicitly to match your EmailJS template variables
      var templateParams = {
        name: document.getElementById('adm-fname').value,
        parents_name: document.getElementById('adm-lname').value,
        email: document.getElementById('adm-email').value,
        mobile: document.getElementById('adm-mobile').value,
        class: document.getElementById('adm-class').value,
        subject: document.getElementById('adm-subject').value,
        batch: document.getElementById('adm-batch').value,
        message: document.getElementById('adm-message').value
      };

      // Send using emailjs.send with public key as 4th argument
      emailjs.send('service_lhcfgxd', 'template_3utjuls', templateParams, 'yGu7UzGU75lyrGh62')
        .then(function () {
          console.log('EmailJS: Admission form sent successfully!');
          admForm.style.display = 'none';
          admSuccess.classList.add('show');

          setTimeout(function () {
            admForm.style.display = '';
            admForm.reset();
            admSuccess.classList.remove('show');
            admSubmitBtn.classList.remove('loading');
          }, 5000);
        })
        .catch(function (error) {
          console.error('EmailJS Error:', error);
          alert('Submission failed. Please try again.');
          admSubmitBtn.classList.remove('loading');
        });
    });
  }
});
