import UserModel from "../models/UserModel";

export const save = async (req, res) => {
  let id = req.params.id;
  let followid = req.body.followid;

  await UserModel.findByIdAndUpdate(
    { _id: id },
    { $push: { follows: followid } }
  ).exec((error, user) => {
    if (error) {
      console.log(error);
      return res.status(500).send({
        status: "error",
        message: "error",
      });
    }
    if (!id || !followid) {
      return res.status(500).send({
        status: "result",
        message: "No results",
      });
    }

    return res.status(200).send({
      user,
    });
  });
};

export const remove = async (req, res) => {
  let id = req.params.id;
  let followid = req.body.followid;

  await UserModel.findByIdAndUpdate(
    { _id: id },
    { $pull: { follows: followid } }
  ).exec((error, user) => {
    if (error) {
      console.log(error);
      return res.status(500).send({
        status: "error",
        message: "error",
      });
    }
    if (!id || !followid) {
      return res.status(500).send({
        status: "result",
        message: "No results",
      });
    }

    return res.status(200).send({
      user,
    });
  });
};

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
