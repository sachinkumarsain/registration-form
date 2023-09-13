import { useForm } from "react-hook-form";
import axios from "axios"

export default function App() {
  // const {
  //   register,
  //   handleSubmit,
  //   watch,
  //   formState: { errors },
  // } = useForm();
  // const onSubmit = (data) => console.log(data);

  // console.log(watch("example")); // watch input value by passing the name of it

  // return (
  //   /* "handleSubmit" will validate your inputs before invoking "onSubmit" */
  //   <form onSubmit={handleSubmit(onSubmit)}>
  //     {/* register your input into the hook by invoking the "register" function */}
  //     <input defaultValue="test" {...register("example")} />

  //     {/* include validation with required or other standard HTML validation rules */}
  //     <input {...register("exampleRequired", { required: true })} />
  //     {/* errors will return when field validation fails  */}
  //     {errors.exampleRequired && <span>This field is required</span>}

  //     <input type="submit" />
  //   </form>
  // );

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  function onSubmit (data){
    console.log(data)
    axios.post("http://localhost:5173/formdata",data)
    .then((result)=>{
      console.log(result.data)
    })


  }
  // const onSubmit = (data) => console.log(data);

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <input
        type="text"
        placeholder="Enter your full name"
        {...register("fullName", {
          required: true,
          pattern: /^[A-Za-z ]+$/,
          minLength: 4,
          maxLength: 30,
        })}
        autoFocus
      />
      {errors.fullName && <p role="alert">Full name is required</p>}
      <input
        type="email"
        placeholder="Enter your email"
        {...register("email", { required: true })}
      />
      {errors.email && <p role="alert">Enter a valid email</p>}
      <input
        type="text"
        placeholder="Enter your phone number"
        {...register("phone", {
          required: true,
          pattern: /^[0-9]+$/,
          minLength: 10,
          maxLength: 10,
        })}
      />
      {errors.phone && (
        <p role="alert">Enter a proper phone number with 10 digits</p>
      )}
      <input    
        type="date"
        placeholder="Enter your Date of Birth"
        {...register("dob", { required: true })}
      />
      {errors.dob && <p role="alert">Enter your Date of Birth</p>}
      <div>
        <input
          id="genderMale"
          type="radio"
          name="gender"
          value="male"
          {...register("gender", { required: true })}
        />
        <label htmlFor="genderMale">Male</label>
      </div>

      <div>
        <input
          id="genderFemale"
          type="radio"
          name="gender"
          value="female"
          {...register("gender", { required: true })}
        />
        <label htmlFor="genderFemale">Female</label>
      </div>

      <div>
        <input
          id="genderOther"
          type="radio"
          name="gender"
          value="other"
          {...register("gender", { required: true })}
        />
        <label htmlFor="genderOther">Other</label>
      </div>
      {errors.gender && <p role="alert">Select your gender</p>}

      <input
        type="file"
        placeholder="Upload Aadhaar Front"
        {...register("aadharFront", { required: true })}
      />
      {errors.aadharFront && <p role="alert">Upload your Aadhaar Front Side</p>}

      <input
        type="file"
        placeholder="Upload Aadhaar Back"
        {...register("aadharBack", { required: true })}
      />
      {errors.aadharBack && <p role="alert">Upload your Aadhaar Back Side</p>}

      <input
        type="text"
        placeholder="Enter your parent / guardian / spouse name"
        {...register("fname", {
          required: true,
          pattern: /^[A-Za-z ]+$/,
          minLength: 4,
          maxLength: 30,
        })}
      />
      {errors.fname && <p role="alert">Parent&quot;s name is required</p>}

      <input
        type="text"
        placeholder="Enter your parent / guardian / spouse phone number"
        {...register("fphone", {
          required: true,
          pattern: /^[0-9]+$/,
          minLength: 10,
          maxLength: 10,
        })}
      />
      {errors.fname && (
        <p role="alert">Enter a proper phone number with 10 digits</p>
      )}

      <textarea
        placeholder="Enter your local address (where you stay in Jaipur)"
        {...register("laddress", { required: true })}
      ></textarea>
      {errors.laddress && <p role="alert">Enter your local address</p>}

      <div>
        <input
          id="same"
          type="checkbox"
          name="same"
          value="same"
          {...register("same")}
        />
        <label htmlFor="same">Same as Permanent Address</label>
      </div>

      <div>
        <input
          id="student"
          type="radio"
          name="areyoua"
          value="student"
          {...register("areyoua")}
          checked={true}
        />
        <label htmlFor="student">Student</label>
      </div>

      <div>
        <input
          id="working"
          type="radio"
          name="areyoua"
          value="working"
          {...register("areyoua")}
        />
        <label htmlFor="working">Working Professional</label>
      </div>

      <div>
        <input
          type="text"
          placeholder="Your latest educational degree / diploma"
          {...register("qualification", {
            required: true,
            minLength: 2,
            maxLength: 30,
          })}
        />
        {errors.qualification && <p role="alert">Qualification is required</p>}

        <input
          type="text"
          placeholder="Completion Year"
          {...register("qualificationYear", {
            required: true,
          })}
        />
        {errors.qualificationYear && (
          <p role="alert">Qualification Year is required</p>
        )}

        <input
          type="text"
          placeholder="College / University"
          {...register("college", {
            required: true,
          })}
        />
        {errors.college && <p role="alert">College is required</p>}
      </div>

      <div>
        <input
          type="text"
          placeholder="Designation"
          {...register("designation", {
            required: true,
          })}
        />
        {errors.designation && (
          <p role="alert">Designation is required</p>
        )}

        <input
          type="text"
          placeholder="Company"
          {...register("company", {
            required: true,
          })}
        />
        {errors.company && <p role="alert">Company name is required</p>}
      </div>

      <div>
      <select defaultValue="Course you opted for" name="course" id="course" {...register("course", {required: true})}>
        <option disabled="" value="">Course you opted for</option>
				<option value="advanced java">Advance Java</option>
				<option value="android">Android</option>
				<option value="computer basics">Computer Basics</option>
				<option value="core java">Core Java</option>
				<option value="digital marketing">Digital Marketing</option>
				<option value="full stack">Full Stack Development</option>
				<option value="graphic design">Graphic Design</option>
				<option value="node js">Node JS</option>
				<option value="photoshop">Photoshop</option>
				<option value="php">PHP</option>
				<option value="python">Python</option>
				<option value="react js">React JS</option>
				<option value="web design">Web Design</option>
				<option value="otherCourse">Other Course</option>
			</select>
      </div>

      <input type="submit" />
    </form>
  );
}
