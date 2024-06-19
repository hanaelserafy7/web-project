    document.addEventListener('DOMContentLoaded', function() {
        const editButtons = document.querySelectorAll('.course-list .btn.edit');
        const deleteButtons = document.querySelectorAll('.course-list .btn.delete');


        editButtons.forEach(function(button) {
            button.addEventListener('click', function() {
                const courseId = button.closest('tr').getAttribute('data-id');
                alert(`User ${courseId} successfully edited.`);
            });
        });


        deleteButtons.forEach(function(button) {
            button.addEventListener('click', function() {
                const row = button.closest('tr');
                const courseId = row.getAttribute('data-id');
                if (confirm(`Are you sure you want to delete User ${courseId}?`)) {
                    row.remove(); 
                    alert(`User ${courseId} successfully deleted.`);
                }
            });
        });

        const addCourseForm = document.getElementById('add-course-form');
        addCourseForm.addEventListener('submit', function(event) {
            event.preventDefault(); 
            const courseName = document.getElementById('course-name').value;
            addNewCourse(courseName);
            addCourseForm.reset(); 
        });


        function addNewCourse(courseName) {
            const tbody = document.querySelector('.course-list tbody');
            const newRow = document.createElement('tr');
            const courseId = tbody.children.length + 1;
            newRow.setAttribute('data-id', courseId);
            newRow.innerHTML = `
                <td>${courseId}</td>
                <td>${courseName}</td>
                <td><button class="btn edit">Edit</button></td>
                <td><button class="btn delete">Remove user</button></td>
            `;
            tbody.appendChild(newRow);
            attachDeleteListener(newRow);
        }


        function attachDeleteListener(row) {
            const deleteButton = row.querySelector('.btn.delete');
            deleteButton.addEventListener('click', function() {
                const courseId = row.getAttribute('data-id');
                if (confirm(`Are you sure you want to delete User ${courseId}?`)) {
                    row.remove();
                    alert(`User ${courseId} successfully deleted.`);
                }
            });
        }
        document.getElementById('add-user-form').addEventListener('submit', function(event) {
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

    // Clear form inputs
    userIdInput.value = '';
    usernameInput.value = '';
    emailInput.value = '';
});

function deleteUser(button) {
    const row = button.parentElement.parentElement;
    row.remove();
}

function editUser(button) {
    const row = button.parentElement.parentElement;
    const userId = row.cells[0].textContent;
    const username = row.cells[1].textContent;
    const email = row.cells[2].textContent;

    document.getElementById('user-id').value = userId;
    document.getElementById('username').value = username;
    document.getElementById('email').value = email;

    row.remove();
}
    });
