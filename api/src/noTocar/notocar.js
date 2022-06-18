//like / dislike a post

// router.put("/:id/like", async (req, res) => {
//     try {
//       const post = await Post.findById(req.params.id);
//       if (!post.likes.includes(req.body.userId)) {
//         await post.updateOne({ $push: { likes: req.body.userId } });
//         res.status(200).json("The post has been liked");
//       } else {
//         await post.updateOne({ $pull: { likes: req.body.userId } });
//         res.status(200).json("The post has been disliked");
//       }
//     } catch (err) {
//       res.status(500).json(err);
//     }
//   });

//follow a user

// router.put("/:id/follow", async (req, res) => {
//     if (req.body.userId !== req.params.id) {
//       try {
//         const user = await User.findById(req.params.id);
//         const currentUser = await User.findById(req.body.userId);
//         if (!user.followers.includes(req.body.userId)) {
//           await user.updateOne({ $push: { followers: req.body.userId } });
//           await currentUser.updateOne({ $push: { followings: req.params.id } });
//           res.status(200).json("user has been followed");
//         } else {
//           res.status(403).json("you allready follow this user");
//         }
//       } catch (err) {
//         res.status(500).json(err);
//       }
//     } else {
//       res.status(403).json("you cant follow yourself");
//     }
//   });

//unfollow a user

// router.put("/:id/unfollow", async (req, res) => {
//     if (req.body.userId !== req.params.id) {
//       try {
//         const user = await User.findById(req.params.id);
//         const currentUser = await User.findById(req.body.userId);
//         if (user.followers.includes(req.body.userId)) {
//           await user.updateOne({ $pull: { followers: req.body.userId } });
//           await currentUser.updateOne({ $pull: { followings: req.params.id } });
//           res.status(200).json("user has been unfollowed");
//         } else {
//           res.status(403).json("you dont follow this user");
//         }
//       } catch (err) {
//         res.status(500).json(err);
//       }
//     } else {
//       res.status(403).json("you cant unfollow yourself");
//     }
//   });

// https://github.com/FaztWeb/node-web-push-notifaction/blob/master/src/routes/index.js

// https://github.com/FaztTech/nodejs-imgshare/tree/master/src/config
