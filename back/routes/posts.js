const express = require('express');
const db = require('../models');

const router = express.Router();

router.get('/', async (req, res, next) => { // GET /api/posts // 모든 게시글 가져오기.
  try {
    const posts = await db.Post.findAll({
      include: [{
        model: db.User,
        attributes: ['id', 'nickname'],
      },
      {
        model:db.Image,
      },
      {
        model: db.User,
        through: 'Like',
        as: 'Likers',
        attributes: ['id'],
      },
      {model: db.Post,
        as: 'Retweet',
        include: [{
          model: db.User,
          attributes: ['id', 'nickname'],
        }, {
          model: db.Image,
        }],
      }],
      order: [['createdAt', 'DESC']], // DESC는 내림차순, ASC는 오름차순 // 2차원 배열인 이유: 1순위, 2순위
    });
    res.json(posts);
  } catch (e) {
    console.error(e);
    next(e);
  }
});

module.exports = router;
