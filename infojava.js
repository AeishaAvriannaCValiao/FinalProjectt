const firstName = localStorage.getItem('firstName');
    const lastName = localStorage.getItem('lastName');
  
    document.getElementById('displayFullName').textContent = `${firstName} ${lastName}`;

    document.getElementById('displayFirstName').textContent = firstName;
    document.getElementById('displayLastName').textContent = lastName;
    document.getElementById('displayEmail').textContent = localStorage.getItem('email');
    document.getElementById('displaySex').textContent = localStorage.getItem('sex');
    document.getElementById('displayReason').textContent = localStorage.getItem('reason');