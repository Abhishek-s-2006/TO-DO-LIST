document.addEventListener('DOMContentLoaded', function() {
    const addBtn = document.getElementById('addBtn');
    const taskInput = document.getElementById('taskInput');
    const taskList = document.getElementById('taskList');
  
    addBtn.onclick = function() {
      const taskText = taskInput.value.trim();
      if (taskText === '') return;
  
      const li = document.createElement('li');
      li.className = 'task-item';
  
      const span = document.createElement('span');
      span.textContent = taskText;
      span.onclick = function() {
        li.classList.toggle('done');
      };
  
      const delBtn = document.createElement('button');
      delBtn.textContent = '×';
      delBtn.onclick = function() {
        taskList.removeChild(li);
      };
  
      li.appendChild(span);
      li.appendChild(delBtn);
      taskList.appendChild(li);
      taskInput.value = '';
    };
  });
  