"use strict"
const express = require('express')
const http = require('http');
const methodOverride = require('method-override')
const bodyParser = require('body-parser')
const helmet = require('helmet')
const cors = require('cors')
const path = require('path')
const app = express()
const port = (process.env.PORT || 8097)
const host = (process.env.ROOTPATH || 'localhost:' + port);

app.use(helmet({
    frameguard: {
        action: 'deny'
    }
}))
    .use(helmet.noCache())
    .use(helmet.xssFilter())
    .use(helmet.contentSecurityPolicy({
        directives: {
            defaultSrc: ["'none'"],
            scriptSrc: ["'self'", "'unsafe-eval'", "'unsafe-inline'"],
            imgSrc: ["'self' data:"],
            connectSrc: ["'self'", host],
            styleSrc: ["'self'", "'unsafe-inline'"],
            fontSrc: ["'self'"]
        }
    }))
    .use(cors({
        origin: host
    }))
    .use(bodyParser.urlencoded({ extended: false }))
    .use((req, res, next) => {
        if (req.url === '/apps/se-portal-empresas/' || req.url === '/apps/se-portal-empresas') {
            res.header("Cache-Control", "no-cache, no-store, must-revalidate");
            res.header("Pragma", "no-cache");
            res.header("Expires", 0);
        }
        next();
    })
    .use('/apps/se-portal-empresas', express.static(path.join(__dirname, '/dist/se-portal-empresas-app')))
    .use(methodOverride());


app.all('/apps/se-portal-empresas/*', (req, res, next) => {
    // Just send the index.html for other files to support HTML5Mode
    res.sendFile('index.html', { root: path.join(__dirname, '/dist/se-portal-empresas-app') });
});

const server = http.createServer(app);
server.listen(port, (err) => {
    if (err) {
        throw err
    }
    console.log(`From Server: App iniciada exitósamente y corriendo en puerto: ${port}`)
})