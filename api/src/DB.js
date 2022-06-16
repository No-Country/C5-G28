import mongoose from "mongoose";
require('dotenv').config();
mongoose
  .connect("mongodb+srv://juniorcoderbook:U4r3BpKpgAreFx0O@cluster0.axza1.mongodb.net/?retryWrites=true&w=majority", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then((db) => console.log("db is connected"))
  .catch((error) => console.log(error));

  //mongodb://localhost/juniorcoderbook