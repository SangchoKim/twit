const express = require('express');
const db = require('../models');
const bcrypt = require('bcrypt');
const router = express.Router();
const passport = require('passport');
const {isLoggedIn} = require('./middleware');

router.get('/',isLoggedIn,(req,res)=>{ // 내 정보 가져오는 것  ex) /api/user/
  const user = Object.assign({}, req.user.toJSON());
  delete user.password;
  res.json(user);
});

router.post('/', async (req, res, next) => { // POST /api/user 회원가입
    try {
      const exUser = await db.User.findOne({
        where: {
          userId: req.body.userId,
        },
      });
      if (exUser) {
        return res.status(403).send('이미 사용중인 아이디입니다.');
      }
      const hashedPassword = await bcrypt.hash(req.body.password, 12); // salt는 10~13 사이로
      const newUser = await db.User.create({
        nickname: req.body.nickname,
        userId: req.body.userId,
        password: hashedPassword,
      });
      console.log(newUser);
      return res.status(200).json(newUser);
    } catch (e) {
      console.error(e);
      // 에러 처리를 여기서
      return next(e);
    }
  });

router.get('/:id', async (req,res,next)=>{ // 남의 정보 가져오는 것 ex) /api/user/123
  try {
    // console.log("jsonUser",req.params.id);
    const user = await db.User.findOne({
      where: { id: parseInt(req.params.id, 10) },
      include: [{
        model: db.Post,
        as: 'Posts',
        attributes: ['id'],
      }, {
        model: db.User,
        as: 'Followings',
        attributes: ['id'],
      }, {
        model: db.User,
        as: 'Followers',
        attributes: ['id'],
      }],
      attributes: ['id', 'nickname'],
    });
    const jsonUser = user.toJSON();
    
    jsonUser.Posts = jsonUser.Posts ? jsonUser.Posts.length : 0;
    jsonUser.Followings = jsonUser.Followings ? jsonUser.Followings.length : 0;
    jsonUser.Followers = jsonUser.Followers ? jsonUser.Followers.length : 0;
    res.json(jsonUser);
  } catch (e) {
    console.error(e);
    next(e);
  }
});

router.post('/logout',(req,res)=>{ // 로그아웃 ex) /api/user/logout
   req.logOut();
   req.session.destroy();
   res.send('로그아웃 성공');
});

router.post('/login',(req,res,next)=>{ // 로그인 /api/user/login
  passport.authenticate('local', (err, user, info) => {
    if (err) {
      console.error(err);
      return next(err);
    }
    if (info) {
      return res.status(401).send(info.reason);
    }
    return req.login(user, async (loginErr) => {
      try {
        if (loginErr) {
          return next(loginErr);
        }
        const fullUser = await db.User.findOne({
          where: { id: user.id },
          include: [{ // include assoiated 되어있는 부분 불러오는 기능
            model: db.Post, 
            as: 'Posts', 
            attributes: ['id'],  // attributes 필터링 기능
          }, {
            model: db.User,
            as: 'Followings',
            attributes: ['id'],
          }, {
            model: db.User,
            as: 'Followers',
            attributes: ['id'],
          }],
          attributes: ['id', 'nickname', 'userId'],
        });
        console.log("fullUser",fullUser);
        return res.json(fullUser);
      } catch (e) {
        next(e);
      }
    });
  })(req, res, next);
});

router.get('/:id/followings', isLoggedIn, async (req, res, next) => { // /api/user/:id/followings
  try { // 내가 팔로잉 하고 있는 사람들 불러오기
    const user = await db.User.findOne({
      where: { id: parseInt(req.params.id, 10) },
    });
    const followers = await user.getFollowings({
      attributes: ['id', 'nickname'],
    });
    res.json(followers);
  } catch (e) {
    console.error(e);
    next(e);
  }
});

router.get('/:id/followers', isLoggedIn, async (req, res, next) => { // /api/user/:id/followers
  try { // 나를 팔로잉 하고 있는 사람들 불러오기
    const user = await db.User.findOne({
      where: { id: parseInt(req.params.id, 10) },
    });
    const followers = await user.getFollowers({
      attributes: ['id', 'nickname'],
    });
    res.json(followers);
  } catch (e) {
    console.error(e);
    next(e);
  }
});

router.delete('/:id/follower', isLoggedIn, async (req, res, next) => {
  try { // 나를 팔로잉 하고 있는 사람들 제거하기
    const me = await db.User.findOne({
      where: { id: req.user.id },
    });
    await me.removeFollower(req.params.id);
    res.send(req.params.id);
  } catch (e) {
    console.error(e);
    next(e);
  }
});

router.post('/:id/follow', isLoggedIn, async (req, res, next) => { // 팔로우 아무개 등록하기
  try {
    const me = await db.User.findOne({
      where: { id: req.user.id },
    });
    await me.addFollowing(req.params.id);
    res.send(req.params.id);
  } catch (e) {
    console.error(e);
    next(e);
  }
});

router.delete('/:id/follow', isLoggedIn, async (req, res, next) => { // 팔로우 아무개 취소하기
  try {
    const me = await db.User.findOne({
      where: { id: req.user.id },
    });
    await me.removeFollowing(req.params.id);
    res.send(req.params.id);
  } catch (e) {
    console.error(e);
    next(e);
  }
});

router.delete('/:id/follower',(req,res)=>{ // 팔로워 지우기 
   
});

router.get('/:id/posts', async (req, res, next) => { // 해당 아이디 값에 post들만 가져오기
   console.log("posts",req.params.id);
  try {
    const posts = await db.Post.findAll({
      where: {
        UserId: parseInt(req.params.id, 10),
        RetweetId: null,
      },
      include: [{
        model: db.User,
        attributes: ['id', 'nickname'],
      }, {
        model: db.Image,
      }, {
        model: db.User,
        through: 'Like',
        as: 'Likers',
        attributes: ['id'],
      }],
    });
    res.json(posts);
  } catch (e) {
    console.error(e);
    next(e);
  }
});

router.patch('/nickname', isLoggedIn, async (req, res, next) => {
  try {
    await db.User.update({
      nickname: req.body.nickname,
    }, {
      where: { id: req.user.id },
    });
    res.send(req.body.nickname);
  } catch (e) {
    console.error(e);
    next(e);
  }
});

module.exports = router;