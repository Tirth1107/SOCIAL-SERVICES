document.getElementById('contact-form').addEventListener('submit', function(event) {
    event.preventDefault();
  
    // Get form elements and message divs
    const form = event.target;
    const successMessage = document.getElementById('success-message');
    const errorMessage = document.getElementById('error-message');
  
    // Create a new FormData object
    const formData = new FormData(form);
  
    // Send the data to Formspree
    fetch(form.action, {
      method: 'POST',
      body: formData,
    })
    .then(response => {
      if (response.ok) {
        successMessage.classList.remove('hidden');
        form.reset();
      } else {
        throw new Error('Something went wrong');
      }
    })
    .catch(error => {
      errorMessage.classList.remove('hidden');
    });
  });
  