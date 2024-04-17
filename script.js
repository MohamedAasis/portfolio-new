function validateForm() {
  const firstName = document.getElementById('fname').value.trim();
  const lastName = document.getElementById('lname').value.trim();
  const country = document.getElementById('country').value.trim();
  const subject = document.getElementById('subject').value.trim();

  if (firstName === '') {
      alert('Please enter your first name.');
      return false;
  }

  if (lastName === '') {
      alert('Please enter your last name.');
      return false;
  }

  if (country === '') {
      alert('Please select your country.');
      return false;
  }

  if (subject === '') {
      alert('Please enter a subject.');
      return false;
  }

  return true; // Form is valid
}
function changeBackground() {
    // Change background image on button click
    document.body.style.backgroundImage = "url('https://media.giphy.com/media/v1.Y2lkPTc5MGI3NjExbDYwaHprbHVjd2J5cW52aDhrZG01b2pkd2k3NzYxZzlvMGY3a3UwNyZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/88Fu8MtnSXI6j3ywN8/giphy.gif')";
}