const Router = require("express");
const postRouter = Router();
const {
  createPost,
  getAllPosts,
  getPostById,
  updatePost,
  deletePost,
} = require("../controllers/postCtrl");

postRouter.post("/createPost", createPost);
postRouter.get("/getPosts", getAllPosts);
postRouter.get("/getPost/:postId", getPostById);
postRouter.put("/update/:postId", updatePost);
postRouter.delete("/delete/:postId", deletePost);

module.exports = postRouter;
