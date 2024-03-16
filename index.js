const but1 = document.getElementById('but1');
        const input = document.getElementById('input');
        const hiddenItem = document.getElementById('hiddenitem');
        const ul = document.getElementById('ul');
        const text = document.getElementById('text');

        input.addEventListener('blur', function() {
            but1.style.display = 'block';
            hiddenItem.style.display ='none';
        });

        but1.addEventListener('click', function() {
            hiddenItem.style.display = 'block';
            but1.style.display = 'none';
        });

        function addcontent() {
            const todo = input.value;
            const todolist = JSON.parse(localStorage.getItem('todos')) || [];
            todolist.push(todo);
            localStorage.setItem('todos', JSON.stringify(todolist));

            const todovalue = document.createElement('li');
            todovalue.textContent = todo;
            ul.appendChild(todovalue);

            if (ul.children.length > 0) {
                text.style.display = 'none';
                input.value = '';
            } else {
                text.style.display = 'block';
            }
        }

        // Display existing to-dos on page load
        window.onload = function() {
            const todolist = JSON.parse(localStorage.getItem('todos')) || [];
            todolist.forEach(function(todo) {
                const todovalue = document.createElement('li');
                todovalue.textContent = todo;
                ul.appendChild(todovalue);
            });

            if (ul.children.length > 0) {
                text.style.display = 'none';
            } else {
                text.style.display = 'block';
            }
        };




