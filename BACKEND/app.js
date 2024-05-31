var express = require("express");
var path = require("path");
var cors = require("cors");
var cookieParser = require("cookie-parser");
var logger = require("morgan");
var indexRouter = require("./routes/index");
var usersRouter = require("./routes/users");
var employeeRouter = require("./routes/employeeRouter");
var accountRouter = require("./routes/accountRouter");
var app = express();
var mongoose = require("mongoose");
app.use(logger("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, "public")));
app.use(cors());
app.use("/", indexRouter);
app.use("/users", usersRouter);
app.use("/api/employee", employeeRouter);
app.use("/api/account", accountRouter);

app.use("/public/uploads", express.static("public/uploads"));

mongoose.connect(process.env.DB_URL).then(() => console.log('Database connected successfully')).catch(err => console.log('Database connection error: ', err));

module.exports = app;
