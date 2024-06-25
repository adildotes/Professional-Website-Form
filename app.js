document.getElementById('myForm').addEventListener('submit', function (event) {
    event.preventDefault();
    showMessage('Form submitted successfully!');
});

document.getElementById('myForm').addEventListener('reset', function () {
    showMessage('Form has been reset.');
});
function showMessage(message) {
    document.getElementById('modalMessage').textContent = message;
    $('#messageModal').modal('show');
}
document.getElementById('togglePassword').addEventListener('change', function () {
    const passwordField = document.getElementById('password');
    if (this.checked) {
        passwordField.type = 'text';
    } else {
        passwordField.type = 'password';
    }
});