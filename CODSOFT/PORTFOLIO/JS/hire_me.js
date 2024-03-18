document.getElementById('login-form').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent form submission
    // Fetch form values
    var phone = document.getElementById('phone').value;
    var company = document.getElementById('company').value;
    var contact = document.getElementById('contact').value;
    var brochure = document.getElementById('brochure').files[0];
    var role = document.getElementById('role').value;
    var time = document.getElementById('time').value;
    
    // You can perform further actions here, like sending data to server or validation
    
    // For demonstration, let's log the values
    console.log('Phone:', phone);
    console.log('Company:', company);
    console.log('Contact:', contact);
    console.log('Brochure:', brochure ? brochure.name : 'No file selected');
    console.log('Role:', role);
    console.log('Preferred Time to Talk:', time);
  });

document.getElementById('login-form').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent the default form submission
    
    // Show an alert message
    alert('Thank you !! I will be Glad to meet and have a chat with you soon :) ');
    
    // Redirect to home page
    window.location.href = 'portfolio.html';
});
  