const express = require("express");
const connectDb = require("./db");

const app = express();
const port = 3000;

connectDb();

app.use(express.json());


app.use(require("./routes/twitts.routes"));
app.use(require("./routes/users.routes"));
app.use(require("./routes/comments.routes"));

app.listen(port, () => {
  console.log("Server");
});
