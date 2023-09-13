import mongoose from "mongoose";


const formSchema = new mongoose.Schema({

    fullName: {
        type: String,
        required: true,
    
    },
    email: {
        type: String,
        required: true,  
        unique: true
    },
    phone: {
        type: String,
        required: true,
        // unique:true
    },
    dob: {
        type: String,
        required: true
    },
    gender: {
        type: String,
        required: true,
    },
    aadharFront:{
        type:Object,
        required:true
    },
    aadharBack: {
        type:Object,
        required:true
    },
    fname: {
        type: String,
        required: true,
        // unique:true
    },
    fphone: {
        type: String,
        required: true,
        // unique:true
    },
    laddress: {
        type: String,
        required: true,
        // unique:true
    },
    same: {
        type: Boolean,
        required: true,
        // unique:true
    },
    areyoua: {
        type: String,
        required: true,
        // unique:true
    },
    qualification: {
        type: String,
        required: true,
        // unique:true
    },
    qualificationYear: {
        type: String,
        required: true,
        // unique:true
    },
    college: {
        type: String,
        required: true,
        // unique:true
    },
    designation : {
        type: String,
        required: true,
        // unique:true
    },
    company: {
        type: String,
        required: true,
        // unique:true
    },

    course: {
        type: String,
        required: true,
        // unique:true
    }




})


const formData = mongoose.model("form", formSchema);

export default formData