const express = require('express');
const bodyParser = require('body-parser');
const fs = require('fs');

const app = express();
const PORT = 3000;

app.use(express.static('public'));
app.use(bodyParser.json());


app.get('/api/data', (req, res) => {
  try {
    const data = JSON.parse(fs.readFileSync('public/data.json', 'utf8'));
    res.json(data);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
});

app.post('/api/employees', (req, res) => {
  fs.readFile('employees.json', 'utf8', (err, data) => {
    if (err) {
      console.error(err);
      res.status(500).json({ error: 'Server error' });
      return;
    }

    try {
      const emp = JSON.parse(data);
      res.json(emp );
    } catch (parseError) {
      console.error(parseError);
      res.status(500).json({ error: 'Error parsing data' });
    }
  });
});

app.get('/webpage', (req, res) => {
  const htmlContent = fs.readFileSync('public/page.html', 'utf8');
  res.send(htmlContent);
});

app.get('/get-data1', (req, res) => {
  try {
    const data = JSON.parse(fs.readFileSync('employees.json', 'utf8'));
    sendFormattedResponse(req, res, data);
  } catch (error) {
    console.error('Error processing request:', error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
});


const sendFormattedResponse = (req, res, data) => {
  switch (req.headers.accept) {
      case 'application/json':
          res.json(data);
          break;
      case 'text/html':
          res.send(`<pre>${JSON.stringify(data, null, 2)}</pre>`);
          break;
      case 'application/xml':
          let xml = '<root>\n';
          for (let key in data) {
              xml += `  <${key}>${data[key]}</${key}>\n`;
          }
          xml += '</root>';
          res.set('Content-Type', 'text/xml');
          res.send(xml.toString());
          break;
      default:
          res.json(data);
  }
};

app.post('/api/update', (req, res) => {
  try {
    const { employeeId, isAllowed } = req.body;

    let data = JSON.parse(fs.readFileSync('employees.json', 'utf8'));

    const employee = data.find(emp => emp.id === employeeId);
    if (employee) {
      employee.isAllowed = isAllowed;

      fs.writeFileSync('employees.json', JSON.stringify(data, null, 2));

      res.json({ message: 'Data updated successfully' });
    } else {
      res.status(404).json({ message: 'Employee not found' });
    }
  } catch (error) {
    console.error('Error updating data:', error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
