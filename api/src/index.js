import app from "./app.js";
import "./DB";


app.listen(process.env.PORT || 3001);
console.log("server listen on port", 3001);
