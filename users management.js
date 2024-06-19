document.addEventListener('DOMContentLoaded', function() {
    const editButtons = document.querySelectorAll('.user-list .btn.edit');
    const deleteButtons = document.querySelectorAll('.user-list .btn.delete');

    editButtons.forEach(function(button) {
        button.addEventListener('click', function() {
            editUser(button);
        });
    });

    deleteButtons.forEach(function(button) {
        button.addEventListener('click', function() {
            deleteUser(button);
        });
    });

    const addUserForm = document.getElementById('add-user-form');
    addUserForm.addEventListener('submit', function(event) {
        event.preventDefault();

        const userIdInput = document.getElementById('user-id');
        const usernameInput = document.getElementById('username');
        const emailInput = document.getElementById('email');

        const userId = userIdInput.value.trim();
        const username = usernameInput.value.trim();
        const email = emailInput.value.trim();

        if (!userId || isNaN(userId)) {
            alert('User ID must be a number.');
            return;
        }

        if (!username) {
            alert('Username is required.');
            return;
        }

        const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailPattern.test(email)) {
            alert('Invalid email address.');
            return;
        }

        addUser(userId, username, email);

        // Clear form inputs
        userIdInput.value = '';
        usernameInput.value = '';
        emailInput.value = '';
    });

    function addUser(userId, username, email) {
        const userTable = document.getElementById('user-table').getElementsByTagName('tbody')[0];
        const newRow = userTable.insertRow();

        newRow.setAttribute('data-id', userId);

        const cell1 = newRow.insertCell(0);
        const cell2 = newRow.insertCell(1);
        const cell3 = newRow.insertCell(2);
        const cell4 = newRow.insertCell(3);
        const cell5 = newRow.insertCell(4);

        cell1.textContent = userId;
        cell2.textContent = username;
        cell3.textContent = email;
        cell4.innerHTML = '<button class="btn edit" onclick="editUser(this)">Edit</button>';
        cell5.innerHTML = '<button class="btn delete" onclick="deleteUser(this)">Remove user</button>';
    }

    window.deleteUser = function(button) {
        const row = button.closest('tr');
        const userId = row.getAttribute('data-id');
        if (confirm(`Are you sure you want to delete User ${userId}?`)) {
            row.remove();
            alert(`User ${userId} successfully deleted.`);
        }
    };

    window.editUser = function(button) {
        const row = button.closest('tr');
        const userId = row.cells[0].textContent;
        const username = row.cells[1].textContent;
        const email = row.cells[2].textContent;

        document.getElementById('user-id').value = userId;
        document.getElementById('username').value = username;
        document.getElementById('email').value = email;

        row.remove();
    };
});
