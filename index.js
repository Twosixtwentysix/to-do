
        const input = document.getElementById('input');
        const hiddenItem = document.getElementById('hiddenitem');
        const ul = document.getElementById('ul');
        const text = document.getElementById('text');


        function addcontent() {
            const todo = input.value;
            const todolist = JSON.parse(localStorage.getItem('todos')) || [];
            todolist.push(todo);
            localStorage.setItem('todos', JSON.stringify(todolist));

            const todovalue = document.createElement('li');
            todovalue.textContent = todo;

            // Add event listener for deletion
            todovalue.addEventListener('click', function() {
                ul.removeChild(todovalue); // Remove from UI

                // Remove from local storage
                const index = todolist.indexOf(todo);
                if (index !== -1) {
                    todolist.splice(index, 1);
                    localStorage.setItem('todos', JSON.stringify(todolist));
                }

                // Show text if no to-dos left
                if (ul.children.length === 0) {
                    text.style.display = 'block';
                }
            });

            ul.appendChild(todovalue);

            // Hide text if to-dos exist
            text.style.display = 'none';
            input.value = '';
        }

        // Display existing to-dos on page load
        window.onload = function() {    
            const todolist = JSON.parse(localStorage.getItem('todos')) || [];
            todolist.forEach(function(todo) {
                const todovalue = document.createElement('li');
                todovalue.textContent = todo;

               
                todovalue.addEventListener('click', function() {
                    ul.removeChild(todovalue); // Remove from UI

                    const index = todolist.indexOf(todo);
                    if (index !== -1) {
                        todolist.splice(index, 1);
                        localStorage.setItem('todos', JSON.stringify(todolist));
                    }

                   
                    if (ul.children.length === 0) {
                        text.style.display = 'block';
                    }
                });

                ul.appendChild(todovalue);
            });

            if (ul.children.length > 0) {
                text.style.display = 'none';
            } else {
                text.style.display = 'block';
            }
        };      