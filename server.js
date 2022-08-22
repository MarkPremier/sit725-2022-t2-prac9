var express = require("express");
var app = express();
var cors = require("cors");
//let dbConnect = require("./dbConnect")
let projectRoutes = require("./routes/projectRoutes");
let userRoutes = require("./routes/userRoutes");

app.use(express.static(__dirname + "/public"));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cors());
app.use("/api/projects", projectRoutes);
app.use("/api/user", userRoutes);

var port = process.env.port || 3000;

app.listen(port, () => {
  console.log(`Web server running at: http://localhost:${port}`);
  console.log("Type Ctrl+C to shut down the web server");
});
