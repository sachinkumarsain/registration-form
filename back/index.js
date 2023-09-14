import cors from "cors";
import express from "express";
import connection from "./Connections.js";
import formData from "./model.js"; // Import your model
import multer from 'multer';
import path from 'path';

const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors({ origin: "http://localhost:5173" }));

const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, './uploads');
  },
  filename: (req, file, cb) => {
    const extname = path.extname(file.originalname);
    const filename = `${Date.now()}${extname}`;
    cb(null, filename);
  },
});

const upload = multer({ storage: storage });

app.post("/formdata", upload.fields([{ name: 'aadharFront', maxCount: 1 }, { name: 'aadharBack', maxCount: 1 }]), async (req, res) => {
  
  const { fullName, email, phone, dob, gender, fname, fphone, laddress, same, areyoua, qualification, qualificationYear, college, designation, company, course } = req.body;

  
  const data = new formData({
    fullName,
    email,
    phone,
    dob,
    gender,
    aadharFront: req.files['aadharFront'][0].path, 
    aadharBack: req.files['aadharBack'][0].path,  
    fname,
    fphone,
    laddress,
    same,
    areyoua,
    qualification,
    qualificationYear,
    college,
    designation,
    company,
    course
  });

  try {
    await data.save(); 
    res.status(200).json("Form data and files uploaded successfully");
  } catch (error) {
    console.error("Error saving form data:", error);
    res.status(500).json("Internal Server Error");
  }
});

connection.then(() => {
  app.listen(8080, () => {
    console.log("Server started at port 8080");
  });
});
