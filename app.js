const http = require('http');

const server = http.createServer((req, res) => {
 //   console.log(req);
  //  console.log(req.url, req.method, req.headers);
    const url = req.url;
    if (url === '/')
    {
        res.setHeader('Content-Type', 'text/html');
        res.write('<html>');
        res.write('<head><title>Enter Message</title><head>');
        res.write('<body><form action="/message" method="POST"><input type="text" name="message"><button type="submit">Send</button></form></body>');
        res.write('</html>');
       return  res.end();
    }
    if (url === '/home')
    {
        res.setHeader('Content-Type', 'text/html');
        res.write('<html>');
        res.write('<head><title>home</title><head>');
        res.write('<body><h1>Welcome home</h1></body>')
        res.write('<body><form action="/home" method="POST"><input type="text" name="home"><button type="submit">Send</button></form></body>');
        res.write('</html>');
       return  res.end();
    }
    if (url === '/about')
    {
        res.setHeader('Content-Type', 'text/html');
        res.write('<html>');
        res.write('<head><title>about</title><head>');
        res.write('<body><h1>Welcome to About Us page</h1></body>')
        res.write('<body><form action="/about" method="POST"><input type="text" name="about"><button type="submit">Send</button></form></body>');
        res.write('</html>');
       return  res.end();
    }
    if (url === '/node')
    {
        res.setHeader('Content-Type', 'text/html');
        res.write('<html>');
        res.write('<head><title>node</title><head>');
        res.write('<body><h1>Welcome to my Node Js project</h1></body>')
        res.write('<body><form action="/node" method="POST"><input type="text" name="node"><button type="submit">Send</button></form></body>');
        res.write('</html>');
       return  res.end();
    }

    res.setHeader('Content-Type', 'text/html');
    res.write('<html>');
    res.write('<head><title>My First Page</title><head>');
    res.write('<body><h1>Hello! I am Pankaj Sanjay Solankurkar</h1></body>');
    res.write('</html>');
    res.end();
   // process.exit();
});
server.listen(3000);