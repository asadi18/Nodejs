exports.getallPost = (req, res) => {
  let { category, page, filter } = req.query;
  console.log(req.query);
  console.log(category, page, filter);
  res.send("Render All post");
};

exports.getSinglePost = (req, res) => {
  let { category, page, filter } = req.query;
  console.log(req.query);
  console.log(category, page, filter);
  res.send("Render All post");
};

exports.createPost = (req, res) => {
  res.send("Create New post");
};

exports.updatePost = (req, res) => {
  res.send("Update Post = " + req.params.postId);
};

exports.deletePost = (req, res) => {
  res.send("Delete Post" + req.params.postId);
};
