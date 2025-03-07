const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");

const path = require("path");
const multer = require("multer");
const app = express();
const { getServices } = require("./models/UserModels");
if (process.env.NODE_ENV !== "production") {
  require("dotenv").config();
}

app.use(express.json());
app.use(cors());
app.use(express.urlencoded({ extended: true }));
app.use(bodyParser.json());

const Users = require("./routes/UserRoutes");

app.use("/api/", Users);

app.get("/test", (req, res) => {
  res.status(200).send("This Website (voicecall) is up");
  console.log("This is running on ezer");
});

// Serve static files from the "uploads" directory
const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    return cb(null, "./public/PDF");
  },
  filename: function (req, file, cb) {
    return cb(null, `${Date.now()}_${file.originalname}`);
  },
});

const upload = multer({ storage });

app.post("/api/upload", upload.single("file"), (req, res) => {
  console.log("file", req.file);
  console.log("req.body", req.body);
});

app.get("/getServices", async (req, res) => {
  let data = [];
  try {
    data = await getServices();
    res.json({ msg: "Services List", data: data });
  } catch (error) {
    res.json({ msg: error, data: [] });
    console.log(error);
  }
});

const Authenticator = require("./config/VerifyToken");

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
