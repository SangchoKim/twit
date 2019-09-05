const express = require('express');
const morgan = require('morgan'); // 로그 찍어주는 역할
const cors = require('cors'); // 포트가 다른 서버끼리 데이터를 주고 받을 수 있도록 만들어주는 미들웨어
const cookieParser = require('cookie-parser');
const expressSession = require('express-session');
const dotenv = require('dotenv');  // 해커가 중요한 코드에 접근을 하지 못하도록 막는 것 
const passport = require('passport');

const passportConfig = require('./passport');
const db = require('./models');
const userAPIRouter = require('./routes/user');
const postAPIRouter = require('./routes/post');
const postsAPIRouter = require('./routes/posts');
const hashtagAPIRouter = require('./routes/hashtag');

const dev = process.env.NODE_ENV !== 'production';
const prod = process.env.NODE_ENV === 'production';

dotenv.config();
const app = express();
db.sequelize.sync();
passportConfig();

app.use(morgan('dev'));
app.use('/', express.static('uploads')); // 프론트단에서 접근 가능해짐 -> '/' 업로드 경로를 root 처럼 사용 가능 함
app.use(express.json()); // JSON 형식의 본문 처리 
app.use(express.urlencoded({extended:true})); // Post 형식 처리 
app.use(cors({ 
    origin:true,  // 요청 주소와 같도록 만드는 것
    credentials:true,  // 쿠기를 다른 도메인으로 보낼때 -> 도메인이 다르기떄문에 설정 필요 (Back)
}));
app.use(cookieParser(process.env.COOKIE_SECRET));
app.use(expressSession({
    resave:false,
    saveUninitialized:false,
    secret: process.env.COOKIE_SECRET,
    cookie:{
        httpOnly:true,
        secure:false,  // https를 쓸 때 True
    },
    name:'shelley',
}));

app.use(passport.initialize());
app.use(passport.session());

app.get('/', (req, res) => {
    res.send('react nodebird 백엔드 정상 동작!');
  });

// API는 다른 서비스가 내 서비스의 기능을 실행할 수 있게 열어둔 창구 
app.use('/api/user', userAPIRouter);
app.use('/api/post', postAPIRouter);
app.use('/api/posts', postsAPIRouter);
app.use('/api/hashtag', hashtagAPIRouter);

app.listen(prod ? process.env.PORT : 3065, () => {
    console.log(`server is running on ${process.env.PORT}`);
});

