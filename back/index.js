import cors from "cors"
import express from "express"
import connection from "./Connections.js"; 
// import formData from "./model.js"
import formData from "./model.js";


const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors({ origin: "http://localhost:5173" }))

 
app.post("/formdata",async(req,res)=>{
    console.log(req.body.data)
    res.status(200).json("form data")

    const{fullName,email,phone,dob,gender,aadharFront,aadharBack,fname,fphone,laddress,same,areyoua,qualification,qualificationYear,college,designation,company,course}=req.body

    const data = new formData({

        fullName,
        email,
        phone,
        dob,
        gender,
        aadharFront,
        aadharBack,
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

    })
    console.log(data)

    await data.save();


})  



connection.then(() => {
    app.listen(8080, () => {
        console.log("Server started at port 8080");
    });
});