exports.getAllPosts = (req, res) => {
  res.status(200).json({
    success: true,
    data: []
  });
};