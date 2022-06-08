import UserModel from "../models/UserModel";

const getUser = (id) => {};

export const save = (req, res) => {
  let { id, followid } = req.params;
  console.log(id);
  console.log(followid);

  UserModel.find();
};

export const remove = (req, res) => {};

export const getAll = (req, res) => {
  let userId = req.params.id;

  UserModel.find({ _id: userId })
    .select("follows")
    .exec((error, user) => {
      if (error) {
        return res.status(500).send({
          status: "error",
          message: "error",
        });
      }
      if (!user) {
        return res.status(500).send({
          status: "result",
          message: "No results",
        });
      }
      let [{ _id, follows }] = user;

      return res.status(200).send({
        follows,
      });
    });
};
