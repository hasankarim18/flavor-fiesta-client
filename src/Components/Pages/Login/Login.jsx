
import { useContext, useEffect, useState } from "react";
import {
  loadCaptchaEnginge,
  LoadCanvasTemplate,
  validateCaptcha,
} from "react-simple-captcha";
import { AuthContext } from "../../../Provider/AuthProvider";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { Helmet } from "react-helmet-async";

import Swal from "sweetalert2";
import SocialLogin from "../Shared/SocialLogin/SocialLogin";

const Login = () => {
  const [user_captcha_value, setUser_captcha_value] = useState('')
  const [isCaptchaValid, setIsCaptchaValid] = useState(false)
  const location = useLocation()
  const { loginUser } = useContext(AuthContext);
  const navigate = useNavigate()


   let from = location.state?.from?.pathname || "/";


  useEffect(() => {
    loadCaptchaEnginge(6); 
  }, [])
  
  const handleValidateCaptcha = (e)=> {
  
    setUser_captcha_value(e.target.value)
   
  }


  useEffect(() => {
   
    const captchaValidation = setTimeout(() => {
      if (validateCaptcha(user_captcha_value, false) === true) {
      
        setIsCaptchaValid(true);
      }else {
        setIsCaptchaValid(false);
      }
    }, 0);

    return ()=> {
      clearTimeout(captchaValidation);
    }

  }, [user_captcha_value]);
  



  const handleLogin = (event) => {
    event.preventDefault()

    const form = event.target 

    const email = form.email.value 
    const password = form.password.value  

    

    loginUser(email, password)
      .then(() => {
        // Signed in
      //  const user = userCredential.user;
       Swal.fire({
         title: "Successflly logged in",
       }).then(() => {
         navigate(from);
       });
        
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        console.log(errorCode, errorMessage);
        alert('Login Failed')
      });


  };


    return (
      <div>
        <Helmet>
          <title> Login | Flavor Fiesta</title>
        </Helmet>
        <div className="hero min-h-screen bg-base-200">
          <div className="hero-content justify-center items-center  md:flex-row flex flex-col  ">
            <div className="text-center lg:text-left">
              <h1 className="text-5xl font-bold">Login now!</h1>
              <p className="py-6">
                Provident cupiditate voluptatem et in. Quaerat fugiat ut
                assumenda excepturi exercitationem quasi. In deleniti eaque aut
                repudiandae et a id nisi.
              </p>
            </div>

            <div className="card md:w-1/2 w-full  shadow-2xl bg-base-100">
              <div className="card-body">
                <form onSubmit={handleLogin}>
                  <div className="form-control">
                    <label className="label">
                      <span className="label-text">Email</span>
                    </label>
                    <input
                      type="email"
                      placeholder="email"
                      className="input input-bordered"
                      name="email"
                    />
                  </div>
                  <div className="form-control">
                    <label className="label">
                      <span className="label-text">Password</span>
                    </label>
                    <input
                      type="password"
                      placeholder="password"
                      className="input input-bordered"
                      name="password"
                    />
                    <label className="label">
                      <a href="#" className="label-text-alt link link-hover">
                        Forgot password?
                      </a>
                    </label>
                  </div>
                  <div className="form-control">
                    <label className="label">
                      <LoadCanvasTemplate />
                    </label>
                    <input
                      onChange={handleValidateCaptcha}
                      type="text"
                      placeholder="Type the text above"
                      className="input input-bordered"
                      name="captcha"
                    />
                  </div>
                  <div className="form-control mt-6">
                    <input
                      // disabled={!isCaptchaValid}
                      disabled={false}
                      type="submit"
                      className="btn btn-primary"
                      value="Login"
                    />
                  </div>

                  <span>Todo {isCaptchaValid}</span>

                  <p className="text-xl">
                    <small>
                      New Here{" "}
                      <Link className="text-yellow-500" to="/signup">
                        Sign up
                      </Link>
                    </small>
                  </p>
                </form>
                {/* social login */}
                <div>
                  <SocialLogin />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
};

export default Login;