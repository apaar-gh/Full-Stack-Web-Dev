import express from "express";
import bodyParser from "body-parser";

const app = express();
const port = 3000;

app.use(bodyParser.urlencoded({ extended: true }));

app.get("/", (req, res) => {
  res.render("index.ejs",{
    nameLen: 0,
  })
});

app.post("/submit", (req, res) => {
    var fName= req.body["fName"];
    var lName= req.body["lName"];
    var len = fName.length+lName.length;
  res.render("index.ejs",{
    nameLen: len,
  })
});

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
