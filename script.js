document.addEventListener('DOMContentLoaded', function() {
    fetch('data.json')
        .then(response => response.json())
        .then(data => {
            const studentList = document.getElementById('student-list');

            data.forEach(student => {
                const studentCard = document.createElement('div');
                studentCard.className = 'student-card';

                const name = document.createElement('div');
                name.className = 'student-name';
                name.textContent = `Name: ${student.name}`;

                const email = document.createElement('div');
                email.className = 'student-email';
                email.textContent = `Email: ${student.email}`;

                const year = document.createElement('div');
                year.className = 'student-year';
                year.textContent = `Year of Study: ${student.year_of_study}`;

                studentCard.appendChild(name);
                studentCard.appendChild(email);
                studentCard.appendChild(year);

                studentList.appendChild(studentCard);
            });
        })
        .catch(error => console.error('Error fetching data:', error));
});
