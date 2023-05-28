import { Link, useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import { Helmet } from "react-helmet-async";
import { useContext } from "react";
import { AuthContext } from "../../../Provider/AuthProvider";
import Swal from "sweetalert2";


const SignUp = () => {
  const { register, handleSubmit, reset,  formState: {errors} } = useForm();
  const { createUser, updateUserProfile } = useContext(AuthContext);
  const navigate = useNavigate()
 
  const onSubmit = (data)=> {

    const email = data.email
    const password = data.password 

    createUser(email, password)
    .then(result =>{
      const loggedUser = result.user 
     updateUserProfile(loggedUser.name, loggedUser.photoURL)
     .then(()=> {
        Swal.fire({
          title:"User Profile Successfully Created"    
        })
        .then(()=> {
          reset()
          navigate('/')
        })
     }) 
     .catch((error)=> {
        console.log(error);
     })


    })
    .then(error => {
      console.log(error);
    })


  
  
  }


  return (
    <div>
      <Helmet>
        <title> Sign Up | Flavor Fiesta</title>
      </Helmet>
    
      <div className="hero min-h-screen bg-base-200">
        <div className="hero-content flex-col lg:flex-row-reverse">
          <div className="text-center lg:text-left">
            <h1 className="text-5xl font-bold">Sign Up Now</h1>
            <p className="py-6">
              Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda
              excepturi exercitationem quasi. In deleniti eaque aut repudiandae
              et a id nisi.
            </p>
          </div>
          <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
            <div className="card-body">
              <form onSubmit={handleSubmit(onSubmit)}>
                {/* name */}
                <div className="form-control">
                  <label className="label">
                    <span className="label-text">Email</span>
                  </label>
                  <input
                    {...register("name")}
                    type="text"
                    placeholder="Name"
                    name="name"
                    className="input input-bordered"
                  />
                </div>
                {/* Photo url */}
                <div className="form-control">
                  <label className="label">
                    <span className="label-text">Email</span>
                  </label>
                  <input
                    {...register("photourl")}
                    type="text"
                    placeholder="Photo url"                   
                    className="input input-bordered"
                  />
                </div>
                {/* email */}
                <div className="form-control">
                  <label className="label">
                    <span className="label-text">Email</span>
                  </label>
                  <input
                    {...register("email", { required: true })}
                    type="email"
                    name="email"
                    placeholder="email"
                    className="input input-bordered"
                  />
                </div>
                {/* error  */}

                {errors.email && (
                  <div className="my-1">
                    <span className="text-xl text-red-400">
                      Email is required
                    </span>
                  </div>
                )}
                {/* password */}
                <div className="form-control">
                  <label className="label">
                    <span className="label-text">Password</span>
                  </label>
                  <input
                    {...register("password", { required: true, minLength: 6 })}
                    type="password"
                    placeholder="password"
                    name="password"
                    className="input input-bordered"
                  />
                  {errors.password && (
                    <div className="my-1">
                      <span className="text-xl text-red-400">
                        {errors.password?.type === "required" &&
                          "Password is required"}
                        {errors.password?.type === "minLength" &&
                          "Password must be 6 chanrecter length."}
                      </span>
                    </div>
                  )}
                  <label className="label">
                    <small className="text-xl mt-4">
                      Already have an account?
                      <Link className="text-yellow-500" to="/login">
                        Login{" "}
                      </Link>
                    </small>
                  </label>
                </div>

                <div className="form-control mt-6">
                  <button className="btn btn-primary">Sign Up</button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignUp;