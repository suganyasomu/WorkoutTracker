const express = require("express");
const logger = require("morgan");
const mongoose = require("mongoose");

const PORT = process.env.PORT || 3000;

// const User = require("./userModel.js");
const app = express();

app.use(logger("dev"));

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use(express.static("public"));

mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/userdb", { useNewUrlParser: true });

app.get("/exercise?",(req,res)=>{

})

app.get("/api/workouts",(req,res)=>{

})

app.put("/api/workouts/:id",(req,res)=>{

});
app.post("api/workouts",(req,res)=>{

});
app.listen(PORT, () => {
  console.log(`http://localhost:${PORT}`);
});
