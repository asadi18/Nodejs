const router = require("express").Router();
const {
  getallPost,
  getSinglePost,
  createPost,
  updatePost,
  deletePost,
} = require("./postController");

router.get("/", getallPost);

router.get("/:postId", getSinglePost);

router.post("/", createPost);

router.put("/:postId", updatePost);

router.delete("/", deletePost);

module.exports = router;
