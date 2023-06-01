import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate()
  const loginData = async () => {
    console.log(email, password);
    const response = await fetch("http://localhost:8080/login", {
      method: "post",
      body: JSON.stringify({ email: email, password: password }),
      headers: {
        "Content-Type": "application/json",
      },
    });
    const result = await response.json();
    console.log(result);
    if (result.status === 200) {
      localStorage.setItem("user", JSON.stringify(result.user));
      navigate("/dashboard");
    } else {
      alert("Please enter correct details...");
    }
  };

  /** login click function end */

  /** captcha onChange */
  // function onChange(value) {
  //   console.log("Captcha value:", value);
  // }
  /** captcha onChange end */

  return (
    /** design code */
    <>
      <div className="container-fluid">
        <div className='row bg-dark'>
          <div className='col-sm-10'></div>
          <div className='col-sm-2'>
            <button className='btn btn-danger' >Logout</button>
          </div>
        </div>
        <div className="row back p-4">
          <div className="col-sm-4"></div>
          <div class="col-sm-4 bg-light text-black  border rounded-5">
            <div class="text-center pt-3 ps-2">
              <img src="./image/logo1.png" height="100px" width={350} alt="img" />
            </div>

            <div class="d-flex align-items-center px-1 ms-xl-4 mt-5  pt-xl-0 ">
              <form style={{ width: "26rem" }}>

                <div class="form-outline mb-3">
                  <label class="form-label" for="form2Example18">
                    E-Mail / User Name
                  </label>
                  <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="Email or Username"
                    id="form2Example18"
                    class="form-control form-control-lg fs-6"
                  />
                </div>

                <div class="form-outline mb-2">
                  <label class="form-label" for="form2Example28">
                    Password
                  </label>
                  <input
                    type="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    id="form2Example28"
                    class="form-control form-control-lg fs-6"
                    placeholder="Password"
                  />
                </div>
                <div class="form-check d-flex justify-content-start mb-4">
                  <input
                    class="form-check-input"
                    type="checkbox"
                    value=""
                    id="form1Example3"
                  />
                  <label class="form-check-label" for="form1Example3">
                    &nbsp; Remember Me
                  </label>
                </div>
                { /** captcha code */}
                {/* <ReCAPTCHA
                  sitekey="6LeIxAcTAAAAAJcZVRqyHh71UMIEGNQ_MXjiZKhI"
                  onChange={onChange}
                  className="mb-3"
                /> */}
                { /** captcha code end*/}
                <div class="pt-1 mb-4">
                  <button
                    class="btn btn-warning w-100 fs-5 border-0 text-light"
                    style={{ background: "#ed721d" }}
                    type="button"
                    onClick={loginData}
                  >
                    Login
                  </button>
                </div>
                <p class="small mb-3 pb-lg-2">
                  <Link class="text-muted" to="/for-pass">
                    Forgot password?
                  </Link>
                </p>
                <p className="text-center">
                  Don't have an account?{" "}
                  <a href="#!" class="link-warning">
                    Register here
                  </a>
                </p>
              </form>
            </div>
          </div>
          <div className="col-sm-4"></div>
        </div>
      </div>
    </>
    /** design code end */
  );
};
/** Main function closing */


/** export page */
export default Login;
