require("dotenv").config();
const express = require("express");
const app = express();
const cors = require("cors");
const connection = require("./db");
const adminAuth = require("./routes/adminAuth")
const userRoutes = require("./routes/users");
const authRoutes = require("./routes/auth");
const passwordResetRoutes = require("./routes/passwordReset");
const Admin =require('./models/admin');
const AdminUser= require('./routes/adminUser');

// database connection
connection();

// middlewares
app.use(express.json());
app.use(cors());

app.get('/getAdmins',(req,res) => {
    Admin.find()
    .then(admin => res.json(admin))
    .catch(err => res.json(err))
})

// routes
app.use("/api/users", userRoutes);
app.use("/api/adminAuth",adminAuth);
app.use("/api/auth", authRoutes);
app.use("/api/password-reset", passwordResetRoutes);
app.use("/api/adminUser",AdminUser);

const port = process.env.PORT || 8080;
app.listen(port, console.log(`Listening on port ${port}...`));
