const express = require('express');
const router = express.Router();

const postController = require('../controllers/posts.controller');

// Get all posts
router.get('/', postController.getAllPosts);

// Get post by ID (IMPORTANT below / route)
router.get('/:postId', postController.getPostById);

module.exports = router;
