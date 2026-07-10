const express = require("express");
const authRouter = require("./routes/auth.routes");
const movieRouter = require("./routes/movies.routes");
const theatreRouter = require("./routes/theatre.routes");

const app = express();

app.use(express.json());

app.use("/auth", authRouter);
app.use("/movies", movieRouter);
app.use("/theatre", theatreRouter);

module.exports = app;
