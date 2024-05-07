document.addEventListener('DOMContentLoaded', function() {
        const editButtons = document.querySelectorAll('.course-list .btn.edit');
        const deleteButtons = document.querySelectorAll('.course-list .btn.delete');

        editButtons.forEach(function(button) {
            button.addEventListener('click', function() {
                const courseId = button.closest('tr').getAttribute('data-id');
                alert(`Course ${courseId} successfully edited.`);
            });
        });

        deleteButtons.forEach(function(button) {
            button.addEventListener('click', function() {
                const row = button.closest('tr');
                const courseId = row.getAttribute('data-id');
                if (confirm(`Are you sure you want to delete Course ${courseId}?`)) {
                    row.remove(); 
                    alert(`Course ${courseId} successfully deleted.`);
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
                <td><button class="btn delete">Delete</button></td>
            `;
            tbody.appendChild(newRow);
            attachDeleteListener(newRow);
        }

        function attachDeleteListener(row) {
            const deleteButton = row.querySelector('.btn.delete');
            deleteButton.addEventListener('click', function() {
                const courseId = row.getAttribute('data-id');
                if (confirm(`Are you sure you want to delete Course ${courseId}?`)) {
                    row.remove(); 
                    alert(`Course ${courseId} successfully deleted.`);
                }
            });
        }
    });