const express = require("express");
const logger = require("morgan");
const mongoose = require("mongoose");


const PORT = process.env.PORT || 3005;

// const User = require("./userModel.js");
const app = express();

app.use(logger("dev"));

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use(express.static("public"));

mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/workout", { useNewUrlParser: true });

const htmlRoutes = require("./routes/htmlroutes");
const apiRoutes = require("./routes/apiroutes");
app.use(htmlRoutes);
app.use(apiRoutes);



app.listen(PORT, () => {
  console.log(`http://localhost:${PORT}`);
});
