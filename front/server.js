const express = require('express');
const next = require('next');
const morgan = require('morgan'); // 로그 찍어주는 역할
const cookieParser = require('cookie-parser');
const expressSession = require('express-session');
const dotenv = require('dotenv');

const dev = process.env.NODE_ENV !== 'production';
const prod = process.env.NODE_ENV === 'production';

const app = next({ dev });
const handle = app.getRequestHandler();
dotenv.config();

app.prepare().then(() => {
    const server = express();

  server.use(morgan('dev'));
  server.use(express.json());
  server.use(express.urlencoded({ extended: true }));
  server.use(cookieParser(process.env.COOKIE_SECRET));
  server.use(expressSession({
    resave: false,
    saveUninitialized: false,
    secret: process.env.COOKIE_SECRET,
    cookie: {
      httpOnly: true,
      secure: false,
    },
  }));

  server.get('/post/:id', (req, res) => {
    return app.render(req, res, '/post', { id: req.params.id });
  });

  server.get('/hashtag/:tag', (req, res) => { // user가 tag된 글자를 클릭하면 이쪽으로 데이터의 값이 들어옴
    return app.render(req, res, '/hashtag', { tag: req.params.tag }); // _app.js -> hashtag.js 페이지로 이동 with data
  });

  server.get('/user/:id', (req, res) => { 
    return app.render(req, res, '/user', { id: req.params.id });
  });
  
  server.get('*', (req, res) => {
    return handle(req, res);
  });

  server.listen(3060,()=>{
    console.log('next+express running on port 3060');
  })
});