import PostModel from "../models/PostModel";

export const featured = (req, res) => {
  let searchString = req.params.q;
  console.log(searchString);

  PostModel.find()
    .sort({ _id: -1 })
    .limit(searchString)

    .exec((error, post) => {
      if (error) {
        return res.status(500).send({
          status: "error",
          message: "error",
        });
      }
      return res.status(200).send({
        status: "success",
        post,
      });
    });
};
