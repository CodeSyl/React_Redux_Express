import path from 'path';
import http from 'http';
import express from 'express';
import compression from 'compression';

console.log(process.env.PORT);
console.log(process.env.NODE_ENV);

const app = express();
const server = http.Server(app);
const port = (process.env.PORT || 6464);

app.use(compression());

app.use(express.static(path.join(__dirname, 'dist')))

app.get('*', function (req, res) {
    res.sendFile(path.join(__dirname, 'dist', 'index.html'))
});

server.listen(port, (error) => {
    if (error) {
        console.error(err);
    } else {
        console.info('==> 💻  Open http://%s:%s in a browser to view the app.', port);
    }
});