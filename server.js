const express = require("express");

require("./config/dbConnect");

const app = express();
app.use(express.json());

app.use("/todos", require("./routers/todoRouter"));

app.listen(4000, () => console.log("Server up and running"));
