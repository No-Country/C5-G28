import mongoose from "mongoose";
import "dotenv/config";
mongoose
  .connect(process.env.DB_CNN, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then((db) => console.log("db is connected"))
  .catch((error) => console.log(error));

  //mongodb://localhost/juniorcoderbook