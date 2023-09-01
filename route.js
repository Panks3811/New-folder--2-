const http = require('http');
const fs = require('fs');

const server = http.createServer((req, res) => {
  const url = req.url;
  const method = req.method;

  if (url === '/') {
    res.setHeader('Content-Type', 'text/html');
    res.write('<html>');
    res.write('<head><title>Enter Message</title></head>');
    res.write('<body>');

    // Read the latest message from the file and display it in the input field
    fs.readFile('messages.txt', 'utf-8', (err, data) => {
      if (!err) {
        const messages = data.split('\n').filter(message => message.trim() !== '');
        const latestMessage = messages[messages.length - 1] || '';
        res.write(`<p>${latestMessage}</p>`);
      }

      res.write('<form action="/message" method="POST"><input type="text" name="message"><button type="submit">Send</button></form>');
      res.write('</body>');
      res.write('</html>');
      return res.end();
    });
  } else if (url === '/message' && method === 'POST') {
    const body = [];
    req.on('data', chunk => {
      body.push(chunk);
    });

    req.on('end', () => {
      const parsedBody = Buffer.concat(body).toString();
      const message = parsedBody.split('=')[1];
      
      // Write the latest message to the file, overwriting the previous content
      fs.writeFile('messages.txt', message + '\n', err => {
        if (err) {
          console.log(err);
        }
        res.statusCode = 302;
        res.setHeader('Location', '/');
        return res.end();
      });
    });
  } else {
    res.setHeader('Content-Type', 'text/html');
    res.write('<html>');
    res.write('<head><title>My First Page</title></head>');
    res.write('<body><h1>Hello! I am Pankaj Sanjay Solankurkar</h1></body>');
    res.write('</html>');
    res.end();
  }
});

server.listen(3000, () => {
  console.log('Server is running on port 3000');
});
