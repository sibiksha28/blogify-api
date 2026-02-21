const posts = [
  { id: "1", title: "First Post" },
  { id: "2", title: "Second Post" }
];

exports.getAllPosts = (req, res) => {
  res.status(200).json({
    success: true,
    data: posts
  });
};

exports.getPostById = (req, res) => {
  const post = posts.find(p => p.id === req.params.id);

  res.status(200).json({
    success: true,
    data: post
  });
};