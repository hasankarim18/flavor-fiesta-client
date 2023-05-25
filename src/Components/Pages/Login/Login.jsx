
import { useEffect, useState } from "react";
import {
  loadCaptchaEnginge,
  LoadCanvasTemplate,
  validateCaptcha,
} from "react-simple-captcha";

const Login = () => {
  const [user_captcha_value, setUser_captcha_value] = useState('')
  const [isCaptchaValid, setIsCaptchaValid] = useState(false)


  useEffect(() => {
    loadCaptchaEnginge(6); 
  }, [])
  
  const handleValidateCaptcha = (e)=> {
  
    setUser_captcha_value(e.target.value)
   
  }


  useEffect(() => {
   
    const captchaValidation = setTimeout(() => {
      if (validateCaptcha(user_captcha_value, false) === true) {
        console.log("validate");
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
   // const captcha = form.captcha.value

    // if (validateCaptcha(user_captcha_value) == true) {
    //   alert("Captcha Matched");
    // } else {
    //   alert("Captcha Does Not Match");
    // }


    console.log('form submitted',email,password);

  };


    return (
      <div>
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
              <form onSubmit={handleLogin}>
                <div className="card-body">
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
                      disabled={!isCaptchaValid}
                      type="submit"
                      className="btn btn-primary"
                      value="Login"
                    />
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    );
};

export default Login;