document.getElementById('contactForm').addEventListener('submit', function (event) {
    event.preventDefault();

    const name = document.getElementById('name').value.trim();
    const email = document.getElementById('email').value.trim();
    const messageDiv = document.getElementById('formMessage');

    if (name === '' || email === '') {
        messageDiv.textContent = 'Please fill in all fields.';
        messageDiv.style.color = 'red';
    } else if (!validateEmail(email)) {
        messageDiv.textContent = 'Please enter a valid email address.';
        messageDiv.style.color = 'red';
    } else {
        messageDiv.textContent = 'Form submitted successfully!';
        messageDiv.style.color = 'green';
        this.reset(); 
    }
});
function validateEmail(email) {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(email);
}
document.getElementById('addTodo').addEventListener('click', function () {
    const todoInput = document.getElementById('todoInput');
    const todoText = todoInput.value.trim();
    const todoList = document.getElementById('todoList');

    if (todoText) {
        const li = document.createElement('li');
        li.textContent = todoText;
        li.addEventListener('click', function () {
            this.remove(); // Remove task on click
        });
        todoList.appendChild(li);
        todoInput.value = '';
    }
});
