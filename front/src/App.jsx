import { useForm } from "react-hook-form";

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

  const { register, handleSubmit, formState: { errors } } = useForm();
  const onSubmit = (data) => console.log(data);

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <input
        type="text"
        placeholder="Enter your full name"
        {...register("fullName", { required: true, pattern: /^[A-Za-z ]+$/, minLength: 4, maxLength: 30 })}
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
        {...register("phone", { required: true, pattern: /^[0-9]+$/, minLength: 10, maxLength: 10 })}
      />
      {errors.phone && <p role="alert">Enter a proper phone number with 10 digits</p>}
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


      <input type="submit" />
    </form>
  );
}
