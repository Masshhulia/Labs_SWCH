    function getData() {
      fetch('/api/data')
        .then(response => response.json())
        .then(data => {
          const output = document.getElementById('outputData');
          output.innerHTML = data.map(employee => 
            `<li>ID: ${employee.id}, Name: ${employee.title}, Description: ${employee.description}</li>`
          ).join('');
        });
    }

    document.addEventListener('DOMContentLoaded', getData);
  
    function getEmployees() {
      const request = new Request('/api/employees', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' }
      });
  
      fetch(request)
        .then(response => {
          if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
          }
          return response.json();
        })
        .then(data => {
          console.log(data);
          const output = document.getElementById('output');
          output.innerHTML = '';
          data.forEach(employee => {
            const item = document.createElement('li');
            item.textContent = `ID: ${employee.id}, Имя: ${employee.name}, Допущен к опсаным работам: ${employee.isAllowed ? 'Да' : 'Нет'}`;
            output.appendChild(item);
          });
        })
        .catch(error => {
          console.error('Error:', error);
        });
    }
    
  
    function downloadFile(format) {
    fetch(`/get-data1`, {
      headers: {
        'Accept': `application/${format}`
      }
    })
      .then(response => response.text())
      .then(data => {
        const blob = new Blob([data], { type: `application/${format}` });
        const link = document.createElement('a');
        link.href = window.URL.createObjectURL(blob);
        link.download = `data.${format}`;
        link.click();
      });
  }

  function updateStatus() {
    const employeeId = document.getElementById('employeeId').value;
    const isAllowed = document.getElementById('isAllowed').value === 'true';

    fetch('/api/update', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ employeeId, isAllowed })
    })
      .then(response => response.json())
      .then(data => {
        document.getElementById('output').innerText = JSON.stringify(data);
      });
  }